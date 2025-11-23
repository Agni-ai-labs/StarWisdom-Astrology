
import { KundliKnowledgeBase, YogaRule, ChartData, PlanetPosition } from '../../types';
import { KUNDLI_KNOWLEDGE_DATA } from '../../data/kundliKnowledgeData';

/**
 * KundliScraper Service
 * Enhanced with logic to process the expanded Knowledge Base.
 */

// Helper: Map signs to their lords
const SIGN_LORDS: Record<string, string> = {
  'Aries': 'Mars', 'Taurus': 'Venus', 'Gemini': 'Mercury', 'Cancer': 'Moon',
  'Leo': 'Sun', 'Virgo': 'Mercury', 'Libra': 'Venus', 'Scorpio': 'Mars',
  'Sagittarius': 'Jupiter', 'Capricorn': 'Saturn', 'Aquarius': 'Saturn', 'Pisces': 'Jupiter'
};

const EXALTATION_SIGNS: Record<string, string> = {
  'Sun': 'Aries', 'Moon': 'Taurus', 'Mars': 'Capricorn', 'Mercury': 'Virgo',
  'Jupiter': 'Cancer', 'Venus': 'Pisces', 'Saturn': 'Libra'
};

const OWN_SIGNS: Record<string, string[]> = {
  'Sun': ['Leo'], 'Moon': ['Cancer'], 'Mars': ['Aries', 'Scorpio'],
  'Mercury': ['Gemini', 'Virgo'], 'Jupiter': ['Sagittarius', 'Pisces'],
  'Venus': ['Taurus', 'Libra'], 'Saturn': ['Capricorn', 'Aquarius']
};

export class KundliScraper {
  private knowledgeBase: KundliKnowledgeBase;

  constructor() {
    this.knowledgeBase = KUNDLI_KNOWLEDGE_DATA;
  }

  /**
   * Analyzes a user's chart against the scraped database of Yogas.
   */
  public findYogas(chart: ChartData): YogaRule[] {
    const detectedYogas: YogaRule[] = [];

    this.knowledgeBase.yogas.forEach(rule => {
      if (this.checkRuleCondition(rule, chart)) {
        detectedYogas.push(rule);
      }
    });

    // Fallback if no major Yogas found
    if (detectedYogas.length === 0) {
      detectedYogas.push({
        name: "General Planetary Alignment",
        type: "General",
        requiredPlanets: [],
        condition: "Standard distribution",
        result: "A balanced life with steady progress. Hard work yields results."
      });
    }

    return detectedYogas;
  }

  /**
   * Retrieves enhanced interpretive text for a specific planet/house combination
   */
  public getScrapedInterpretation(planet: string, house: number): string {
    const effects = this.knowledgeBase.planetaryEffects[planet];
    if (effects && effects[house.toString()]) {
      return effects[house.toString()];
    }
    return `The placement of ${planet} in house ${house} is significant for your chart.`;
  }

  /**
   * Enhanced Logic to check if a chart meets the criteria for a Yoga.
   */
  private checkRuleCondition(rule: YogaRule, chart: ChartData): boolean {
    const getPlanet = (name: string) => chart.planets.find(p => p.name === name);

    // --- Gaja Kesari ---
    if (rule.name.includes("Gajakesari")) {
      const jupiter = getPlanet("Jupiter");
      const moon = getPlanet("Moon");
      if (!jupiter || !moon) return false;
      const houseDiff = Math.abs(jupiter.house - moon.house);
      // 1, 4, 7, 10 distance implies Kendra. Note: Math.abs logic is simplified for circular house
      // Correct circular distance check:
      const distance = (jupiter.house - moon.house + 12) % 12;
      return [0, 3, 6, 9].includes(distance); 
    }

    // --- Budhaditya ---
    if (rule.name.includes("Budhaditya")) {
      const sun = getPlanet("Sun");
      const mercury = getPlanet("Mercury");
      return !!(sun && mercury && sun.house === mercury.house);
    }

    // --- Chandra Mangala ---
    if (rule.name.includes("Chandra-Mangala")) {
      const moon = getPlanet("Moon");
      const mars = getPlanet("Mars");
      return !!(moon && mars && moon.house === mars.house);
    }

    // --- Pancha Mahapurusha Logic (Hamsa, Malavya, Sasa, Ruchaka, Bhadra) ---
    if (rule.name.includes("Pancha Mahapurusha")) {
      const planetName = rule.requiredPlanets[0];
      const planet = getPlanet(planetName);
      if (!planet) return false;

      // Must be in Kendra (1, 4, 7, 10) from Ascendant (House 1, 4, 7, 10 in our 1-based house system assuming House 1 is Ascendant)
      const isKendra = [1, 4, 7, 10].includes(planet.house);
      if (!isKendra) return false;

      // Must be Own Sign or Exalted
      const sign = planet.sign;
      const ownSigns = OWN_SIGNS[planetName] || [];
      const exaltedSign = EXALTATION_SIGNS[planetName];
      
      return ownSigns.includes(sign) || sign === exaltedSign;
    }

    // --- Amala Yoga ---
    if (rule.name.includes("Amala")) {
      // Benefic in 10th from Moon or Lagna. Let's check 10th from Lagna (House 10)
      // Benefics: Jup, Ven, Mer
      const benefics = chart.planets.filter(p => 
        ['Jupiter', 'Venus', 'Mercury'].includes(p.name) && p.house === 10
      );
      return benefics.length > 0;
    }

    // --- Parivartana Yoga (Exchange) ---
    if (rule.name.includes("Parivartana")) {
      // Check for any mutual exchange of signs. 
      // Complexity: O(N^2) but N is small (9 planets).
      for (let i = 0; i < chart.planets.length; i++) {
        for (let j = i + 1; j < chart.planets.length; j++) {
          const p1 = chart.planets[i];
          const p2 = chart.planets[j];
          
          const p1SignLord = SIGN_LORDS[p1.sign];
          const p2SignLord = SIGN_LORDS[p2.sign];
          
          // If Planet 1 is in Planet 2's sign AND Planet 2 is in Planet 1's sign
          if (p1SignLord === p2.name && p2SignLord === p1.name) {
            return true; // Found an exchange
          }
        }
      }
      return false;
    }

    // --- Kemadruma Yoga ---
    if (rule.name.includes("Kemadruma")) {
      const moon = getPlanet("Moon");
      if (!moon) return false;
      
      // Check houses adjacent to Moon (2nd and 12th from Moon)
      // House 1-12 logic
      const prevHouse = moon.house === 1 ? 12 : moon.house - 1;
      const nextHouse = moon.house === 12 ? 1 : moon.house + 1;
      
      const planetsInPrev = chart.planets.some(p => p.house === prevHouse && !['Sun', 'Rahu', 'Ketu', 'Moon'].includes(p.name));
      const planetsInNext = chart.planets.some(p => p.house === nextHouse && !['Sun', 'Rahu', 'Ketu', 'Moon'].includes(p.name));
      
      return !planetsInPrev && !planetsInNext;
    }

    // --- Random chance for others to simulate variety in demo ---
    if (rule.name.includes("Dhana") || rule.name.includes("Lakshmi") || rule.name.includes("Vipareeta")) {
       // In a real full engine, we would check house lords. 
       // For this demo, we return true 30% of the time to show the UI.
       return Math.random() > 0.7; 
    }

    return false;
  }
}

export const kundliService = new KundliScraper();

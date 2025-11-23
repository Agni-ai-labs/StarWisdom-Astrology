
import { FullReport, UserInput, PlanetPosition, ChartData, TarotCard, AnalysisSection, ZodiacSignData } from '../types';
import { ZODIAC_SIGNS, PLANETS } from '../constants';
import { lalaRamswaroopService } from './scraping/lalaRamswaroopScraper';
import { thakurPrasadService } from './scraping/thakurPrasadScraper';
import { kundliService } from './scraping/kundliScraper';

// Deterministic pseudo-random based on string seed
const seededRandom = (seed: string) => {
  let h = 0xdeadbeef;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 2654435761);
  }
  return ((h ^ h >>> 16) >>> 0) / 4294967296;
};

const calculateLifePath = (dob: string): number => {
  const clean = dob.replace(/\D/g, '');
  let sum = 0;
  for (let char of clean) sum += parseInt(char);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let temp = 0;
    sum.toString().split('').forEach(d => temp += parseInt(d));
    sum = temp;
  }
  return sum;
};

const getZodiacSignName = (month: number, day: number): string => {
  const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];
  const lastDays = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];
  return (day > lastDays[month - 1]) ? signs[month] : signs[month - 1];
};

const getZodiacData = (signName: string): ZodiacSignData => {
  // Mock data for demonstration - expanded
  const data: Record<string, ZodiacSignData> = {
    'Aries': { name: 'Aries', dateRange: 'Mar 21 - Apr 19', element: 'Fire', quality: 'Cardinal', rulingPlanet: 'Mars', traits: ['Bold', 'Ambitious', 'Dynamic'] },
    'Taurus': { name: 'Taurus', dateRange: 'Apr 20 - May 20', element: 'Earth', quality: 'Fixed', rulingPlanet: 'Venus', traits: ['Reliable', 'Patient', 'Devoted'] },
    'Gemini': { name: 'Gemini', dateRange: 'May 21 - Jun 20', element: 'Air', quality: 'Mutable', rulingPlanet: 'Mercury', traits: ['Adaptable', 'Outgoing', 'Intelligent'] },
    'Cancer': { name: 'Cancer', dateRange: 'Jun 21 - Jul 22', element: 'Water', quality: 'Cardinal', rulingPlanet: 'Moon', traits: ['Loyal', 'Emotional', 'Sympathetic'] },
    'Leo': { name: 'Leo', dateRange: 'Jul 23 - Aug 22', element: 'Fire', quality: 'Fixed', rulingPlanet: 'Sun', traits: ['Creative', 'Passionate', 'Generous'] },
    'Virgo': { name: 'Virgo', dateRange: 'Aug 23 - Sep 22', element: 'Earth', quality: 'Mutable', rulingPlanet: 'Mercury', traits: ['Loyal', 'Analytical', 'Kind'] },
    'Libra': { name: 'Libra', dateRange: 'Sep 23 - Oct 22', element: 'Air', quality: 'Cardinal', rulingPlanet: 'Venus', traits: ['Cooperative', 'Diplomatic', 'Gracious'] },
    'Scorpio': { name: 'Scorpio', dateRange: 'Oct 23 - Nov 21', element: 'Water', quality: 'Fixed', rulingPlanet: 'Pluto', traits: ['Resourceful', 'Brave', 'Passion'] },
    'Sagittarius': { name: 'Sagittarius', dateRange: 'Nov 22 - Dec 21', element: 'Fire', quality: 'Mutable', rulingPlanet: 'Jupiter', traits: ['Generous', 'Idealistic', 'Humorous'] },
    'Capricorn': { name: 'Capricorn', dateRange: 'Dec 22 - Jan 19', element: 'Earth', quality: 'Cardinal', rulingPlanet: 'Saturn', traits: ['Responsible', 'Disciplined', 'Self-control'] },
    'Aquarius': { name: 'Aquarius', dateRange: 'Jan 20 - Feb 18', element: 'Air', quality: 'Fixed', rulingPlanet: 'Uranus', traits: ['Progressive', 'Original', 'Independent'] },
    'Pisces': { name: 'Pisces', dateRange: 'Feb 19 - Mar 20', element: 'Water', quality: 'Mutable', rulingPlanet: 'Neptune', traits: ['Compassionate', 'Artistic', 'Intuitive'] }
  };
  return data[signName] || data['Aries'];
};

const generateVedicChart = (input: UserInput): ChartData => {
  const seed = input.dateOfBirth + input.timeOfBirth + input.placeOfBirth;
  
  const planets: PlanetPosition[] = PLANETS.map((planet) => {
    const rand = seededRandom(seed + planet);
    return {
      name: planet,
      sign: ZODIAC_SIGNS[Math.floor(rand * 12)],
      house: Math.floor(rand * 12) + 1,
      degree: Math.floor(rand * 30),
      isRetrograde: rand > 0.8
    };
  });

  return {
    ascendant: ZODIAC_SIGNS[Math.floor(seededRandom(seed + 'ASC') * 12)],
    planets
  };
};

const generateTarotSpread = (input: UserInput): TarotCard[] => {
  const seed = input.fullName + input.concern;
  const positions: Array<'Past' | 'Present' | 'Future'> = ['Past', 'Present', 'Future'];
  
  const deck: Partial<TarotCard>[] = [
    { name: 'The Fool', keywords: ['Beginnings', 'Innocence', 'Free Spirit'], element: 'Air' },
    { name: 'The Magician', keywords: ['Manifestation', 'Resourcefulness', 'Power'], element: 'Air' },
    { name: 'The High Priestess', keywords: ['Intuition', 'Sacred Knowledge', 'Divine Feminine'], element: 'Water' },
    { name: 'The Empress', keywords: ['Femininity', 'Beauty', 'Nature'], element: 'Earth' },
    { name: 'The Emperor', keywords: ['Authority', 'Establishment', 'Structure'], element: 'Fire' },
    { name: 'The Hierophant', keywords: ['Spiritual Wisdom', 'Beliefs', 'Conformity'], element: 'Earth' },
    { name: 'The Lovers', keywords: ['Love', 'Harmony', 'Relationships'], element: 'Air' },
    { name: 'The Chariot', keywords: ['Control', 'Willpower', 'Success'], element: 'Water' },
    { name: 'Strength', keywords: ['Strength', 'Courage', 'Persuasion'], element: 'Fire' },
    { name: 'The Hermit', keywords: ['Soul-searching', 'Introspection', 'Solitude'], element: 'Earth' },
    { name: 'Wheel of Fortune', keywords: ['Good Luck', 'Karma', 'Life Cycles'], element: 'Fire' },
    { name: 'Justice', keywords: ['Justice', 'Fairness', 'Truth'], element: 'Air' }
  ];

  const indices = new Set<number>();
  while (indices.size < 3) {
    indices.add(Math.floor(seededRandom(seed + indices.size) * deck.length));
  }

  return Array.from(indices).map((idx, i) => ({
    name: deck[idx].name!,
    imagePlaceholder: `https://picsum.photos/200/300?random=${idx}`,
    meaningUpright: "A time of potential and new beginnings. Trust your instincts.",
    meaningReversed: "Hesitation and fear of the unknown. Taking unnecessary risks.",
    position: positions[i],
    isReversed: seededRandom(seed + idx + 'rev') > 0.7,
    keywords: deck[idx].keywords!,
    element: deck[idx].element as any
  }));
};

export const generateReport = async (input: UserInput): Promise<FullReport> => {
  const dobDate = new Date(input.dateOfBirth);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthName = monthNames[dobDate.getMonth()];
  const year = dobDate.getFullYear();

  // FETCH DYNAMIC CALENDAR DATA FOR THE BIRTH DATE
  const [lalaPanchangData, thakurPrasadData] = await Promise.all([
    lalaRamswaroopService.getPanchang(monthName, year, input.dateOfBirth),
    thakurPrasadService.getCalendarData(monthName, year, input.dateOfBirth)
  ]);
  
  const todayLala = lalaPanchangData[0];
  const todayThakur = thakurPrasadData[0];

  // Generate Chart
  const chart = generateVedicChart(input);
  const lifePath = calculateLifePath(input.dateOfBirth);
  
  const sunSignName = getZodiacSignName(dobDate.getMonth() + 1, dobDate.getDate());
  const moonSignName = chart.planets[1].sign;
  const risingSignName = chart.ascendant;

  // ENHANCED ANALYSIS: Scrape Yogas from Kundli Knowledge Base
  const detectedYogas = kundliService.findYogas(chart);
  
  // ENHANCED ANALYSIS: Dynamic interpretations based on scraped data
  const careerPlanet = chart.planets[2]; // Mars (demo)
  const careerInterpretation = kundliService.getScrapedInterpretation(careerPlanet.name, careerPlanet.house);

  const vedicAnalysis: AnalysisSection[] = [
    {
      title: "Career & Finance",
      content: `Your 10th house is influenced by ${careerPlanet.sign}. ${careerInterpretation} Saturn's placement indicates success comes after age 30.`,
      sentiment: "positive",
      remedies: [
        { type: 'Mantra', description: 'Om Shanaishcharaya Namah', instructions: 'Chant 108 times on Saturdays', timing: 'Saturday evenings during sunset' },
        { type: 'Gemstone', description: 'Blue Sapphire (Neelam)', instructions: 'Wear on middle finger in silver after consulting a specialist', timing: 'Saturday morning during Shukla Paksha' }
      ]
    },
    {
      title: "Relationship & Family",
      content: `Venus in ${chart.planets[5].sign} creates a passionate energy. ${chart.planets[0].name} in the 7th house may indicate an authoritative partner.`,
      sentiment: "neutral",
      remedies: [
        { type: 'Donation', description: 'Donate white sweets on Fridays', instructions: 'To young girls or a temple', timing: 'Friday mornings before 10 AM' }
      ]
    }
  ];

  // Incorporate detected Yogas into analysis
  if (detectedYogas.length > 0) {
    vedicAnalysis.push({
      title: "Special Yogas (Scraped Analysis)",
      content: `We have detected powerful planetary combinations in your chart: ${detectedYogas.map(y => y.name).join(", ")}. ${detectedYogas[0].result}`,
      sentiment: "positive",
      remedies: []
    });
  }

  // Combine Muhurats from both calendars
  const muhurats = [
    ...todayLala.muhurats.map(m => `Lala Ramswaroop: ${m.purpose} at ${m.startTime} (${m.quality})`),
    `Thakur Prasad Tip: ${todayThakur.dailyTip}`,
    todayThakur.specialYogas.length > 0 ? `Thakur Prasad Yoga: ${todayThakur.specialYogas.join(', ')}` : ''
  ].filter(Boolean);

  return {
    vedic: {
      chart,
      analysis: vedicAnalysis,
      yogasPresent: detectedYogas
    },
    lalKitab: {
      debts: ['Pitra Rina (Forefather Debt)', 'Self Debt'],
      remedies: [
        { type: 'Lifestyle', description: 'Feed stray dogs regularly', instructions: 'Helps appease Ketu', timing: 'Daily before sunset' },
        { type: 'Lifestyle', description: 'Avoid accepting free gifts/electronics', instructions: 'Strengthens 8th house protection' }
      ]
    },
    numerology: {
      lifePathNumber: lifePath,
      destinyNumber: calculateLifePath(input.dateOfBirth),
      soulUrgeNumber: 3,
      personalityNumber: 7,
      description: `As a Life Path ${lifePath}, you are driven by a need for stability and structure. You are a builder of systems and foundations.`
    },
    western: {
      sunSign: {
        sign: getZodiacData(sunSignName),
        coreEssence: "You are a natural leader with a pioneering spirit. Your vitality is high, and you approach life with directness and courage."
      },
      moonSign: {
        sign: getZodiacData(moonSignName),
        emotionalSignificance: "Your inner world is intense and transformative. You feel things deeply and value privacy.",
        needs: ["Security", "Trust", "Deep emotional connection"],
        comfortZone: "Private spaces where you can recharge without judgment."
      },
      risingSign: {
        sign: getZodiacData(risingSignName),
        degree: 15.4,
        firstImpression: "People see you as charismatic and confident. You naturally command attention when you walk into a room.",
        socialPersona: ["Confident", "Expressive", "Warm"]
      },
      horoscope: {
        month: monthName,
        year: year,
        overview: "Career opportunities expand this month as Jupiter trines your natal Sun. Expect significant growth in professional networks.",
        keyDates: [
          { date: "Nov 5", event: "New Moon in 8th House" },
          { date: "Nov 12", event: "Jupiter Direct" },
          { date: "Nov 20", event: "Full Moon Clarity" }
        ],
        opportunities: ["Professional recognition", "Financial gains through partnerships"],
        challenges: ["Communication mishaps mid-month", "Avoid impulsive decisions"],
        advice: "Focus on collaborative ventures rather than going it alone. Trust your intuition during the New Moon."
      }
    },
    tarot: generateTarotSpread(input),
    combined: {
      summary: `Your astrological profile indicates a strong year for ${input.concern}. The convergence of Jupiter's transit and your numerology year 5 suggests positive change.`,
      strengths: ['Resilience', 'Intuitive decision making', 'Leadership capability', ...(detectedYogas.map(y => y.name))],
      challenges: ['Impatience with details', 'Tendency to overwork'],
      actionPlan: [
        `Consider the specific energy of the ${todayLala.nakshatra} nakshatra today.`,
        `Observe the ${todayThakur.fastingInfo} fast suggested by Thakur Prasad calendar.`,
        'Begin the 41-day meditation cycle.',
        'Wear lighter colors to balance Saturn\'s heavy influence.',
        'Focus on debt reduction before new investments.'
      ],
      muhuratTimings: muhurats
    },
    panchang: todayLala,
    thakurPrasad: todayThakur
  };
};

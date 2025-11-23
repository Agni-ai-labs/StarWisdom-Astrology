
export interface UserInput {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  gender: 'male' | 'female' | 'other';
  concern: 'relationship' | 'finance' | 'business' | 'job' | 'health' | 'home';
}

export interface PlanetPosition {
  name: string;
  sign: string;
  house: number;
  degree: number;
  isRetrograde: boolean;
}

export interface ChartData {
  ascendant: string;
  planets: PlanetPosition[];
}

export interface NumerologyReport {
  lifePathNumber: number;
  destinyNumber: number;
  soulUrgeNumber: number;
  personalityNumber: number;
  description: string;
}

export interface TarotCard {
  name: string;
  imagePlaceholder: string;
  meaningUpright: string;
  meaningReversed: string;
  position: 'Past' | 'Present' | 'Future';
  isReversed: boolean;
  keywords: string[];
  element: 'Fire' | 'Water' | 'Air' | 'Earth';
}

export interface Remedy {
  type: 'Mantra' | 'Gemstone' | 'Donation' | 'Lifestyle';
  description: string;
  instructions: string;
  timing?: string; // Lala Ramswaroop Muhurat timing
}

export interface AnalysisSection {
  title: string;
  content: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  remedies: Remedy[];
}

export interface ZodiacSignData {
  name: string;
  dateRange: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  quality: 'Cardinal' | 'Fixed' | 'Mutable';
  rulingPlanet: string;
  traits: string[];
}

export interface WesternProfile {
  sunSign: {
    sign: ZodiacSignData;
    coreEssence: string;
  };
  moonSign: {
    sign: ZodiacSignData;
    emotionalSignificance: string;
    needs: string[];
    comfortZone: string;
  };
  risingSign: {
    sign: ZodiacSignData;
    degree: number;
    firstImpression: string;
    socialPersona: string[];
  };
  horoscope: {
    month: string;
    year: number;
    overview: string;
    keyDates: { date: string; event: string }[];
    opportunities: string[];
    challenges: string[];
    advice: string;
  };
}

// Lala Ramswaroop Types
export interface Festival {
  name: string;
  religion: 'Hindu' | 'Islam' | 'Christianity' | 'Sikhism' | 'Jainism' | 'Buddhism';
  significance: string;
  type: 'Major' | 'Minor';
}

export interface Muhurat {
  purpose: string;
  startTime: string;
  endTime: string;
  quality: 'Excellent' | 'Good' | 'Average';
}

export interface DailyPanchang {
  date: string;
  tithi: string;
  paksha: 'Shukla' | 'Krishna';
  nakshatra: string;
  yoga: string;
  karan: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  rahukaal: string;
  festivals: Festival[];
  muhurats: Muhurat[];
}

export interface LalaRamswaroopCalendar {
  year: number;
  months: {
    [key: string]: DailyPanchang[];
  };
}

// Thakur Prasad Calendar Types
export interface ThakurPrasadDaily {
  date: string;
  hindiDate: string; // e.g., "Kartik Krishna Dashami"
  dailyTip: string;
  fastingInfo: string; // Vrat details
  specialYogas: string[]; // e.g. "Sarvartha Siddhi Yoga"
}

export interface ThakurPrasadCalendar {
  year: number;
  months: {
    [key: string]: ThakurPrasadDaily[];
  };
}

// Kundli Knowledge Base Types
export interface YogaRule {
  name: string;
  type: 'Raj Yoga' | 'Dhana Yoga' | 'Arista Yoga' | 'General';
  requiredPlanets: string[]; // Planets involved
  condition: string; // Description of condition (e.g., "Jupiter in Quadrant from Moon")
  result: string; // Prediction/Result
}

export interface KundliKnowledgeBase {
  yogas: YogaRule[];
  planetaryEffects: {
    [key: string]: { // Planet Name
      [key: string]: string; // House Number -> Effect
    }
  };
}

export interface FullReport {
  vedic: {
    chart: ChartData;
    analysis: AnalysisSection[];
    yogasPresent?: YogaRule[]; // Enhanced analysis from scraped kundlis
  };
  lalKitab: {
    debts: string[];
    remedies: Remedy[];
  };
  numerology: NumerologyReport;
  western: WesternProfile;
  tarot: TarotCard[];
  combined: {
    summary: string;
    actionPlan: string[];
    strengths: string[];
    challenges: string[];
    muhuratTimings: string[]; // Integrated Panchang data (Lala + Thakur)
  };
  panchang?: DailyPanchang; 
  thakurPrasad?: ThakurPrasadDaily; // Today's Thakur Prasad data
}

export enum TabId {
  INPUT = 'input',
  LAL_KITAB = 'lalkitab',
  VEDIC = 'vedic',
  NUMEROLOGY = 'numerology',
  WESTERN = 'western',
  TAROT = 'tarot',
  COMBINED = 'combined'
}
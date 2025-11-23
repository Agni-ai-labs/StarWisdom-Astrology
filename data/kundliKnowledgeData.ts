
import { KundliKnowledgeBase } from '../types';

export const KUNDLI_KNOWLEDGE_DATA: KundliKnowledgeBase = {
  yogas: [
    // --- RAJ YOGAS (Power & Status) ---
    {
      name: "Gajakesari Yoga",
      type: "Raj Yoga",
      requiredPlanets: ["Jupiter", "Moon"],
      condition: "Jupiter is in a Kendra (1, 4, 7, 10) from Moon.",
      result: "Grants wisdom, wealth, and a virtuous reputation. You will be capable of overpowering enemies and rising to high positions."
    },
    {
      name: "Budhaditya Yoga",
      type: "Raj Yoga",
      requiredPlanets: ["Sun", "Mercury"],
      condition: "Sun and Mercury are conjoined in the same house.",
      result: "Creates high intelligence, skill in administration, and good reputation in professional life."
    },
    {
      name: "Pancha Mahapurusha (Hamsa)",
      type: "Raj Yoga",
      requiredPlanets: ["Jupiter"],
      condition: "Jupiter in own sign (Sagittarius/Pisces) or exalted (Cancer) in a Kendra house.",
      result: "Makes the person religious, highly respected, and pure in heart. Success in education, law, or philosophy."
    },
    {
      name: "Pancha Mahapurusha (Malavya)",
      type: "Raj Yoga",
      requiredPlanets: ["Venus"],
      condition: "Venus in own sign (Taurus/Libra) or exalted (Pisces) in Kendra.",
      result: "Blesses the native with beauty, luxury, a happy marriage, and success in creative fields or vehicles."
    },
    {
      name: "Pancha Mahapurusha (Sasa)",
      type: "Raj Yoga",
      requiredPlanets: ["Saturn"],
      condition: "Saturn in own sign (Capricorn/Aquarius) or exalted (Libra) in Kendra.",
      result: "Gives authority over others, political success, strong executive ability, but a somewhat solitary nature."
    },
    {
      name: "Pancha Mahapurusha (Ruchaka)",
      type: "Raj Yoga",
      requiredPlanets: ["Mars"],
      condition: "Mars in own sign (Aries/Scorpio) or exalted (Capricorn) in Kendra.",
      result: "Indicates a born leader, commander, or athlete. Strong physique, fame, and victory over enemies."
    },
    {
      name: "Pancha Mahapurusha (Bhadra)",
      type: "Raj Yoga",
      requiredPlanets: ["Mercury"],
      condition: "Mercury in own sign (Gemini/Virgo) in Kendra.",
      result: "Gifted with high intellect, speech, communication skills, and longevity. Success in business and commerce."
    },
    {
      name: "Vipareeta Raj Yoga (Harsha)",
      type: "Raj Yoga",
      requiredPlanets: ["Dusthana Lords"],
      condition: "Lord of 6th house is in 6th, 8th, or 12th house.",
      result: "Success comes through overcoming obstacles or enemies. Invincibility, health, and fame."
    },
    {
      name: "Vipareeta Raj Yoga (Sarala)",
      type: "Raj Yoga",
      requiredPlanets: ["Dusthana Lords"],
      condition: "Lord of 8th house is in 6th, 8th, or 12th house.",
      result: "Long life, fearless, learned, and victorious over enemies. Wealth through unexpected means."
    },
    {
      name: "Vipareeta Raj Yoga (Vimala)",
      type: "Raj Yoga",
      requiredPlanets: ["Dusthana Lords"],
      condition: "Lord of 12th house is in 6th, 8th, or 12th house.",
      result: "Independent spirit, happy, accumulates wealth, and lives a just life."
    },
    {
      name: "Parivartana Yoga (Maha)",
      type: "Raj Yoga",
      requiredPlanets: ["Various"],
      condition: "Mutual exchange of signs between lords of auspicious houses (Kendra/Trikona/2/11).",
      result: "Brings great fortune, status, and wealth depending on the houses involved."
    },
    {
      name: "Neechabhanga Raj Yoga",
      type: "Raj Yoga",
      requiredPlanets: ["Various"],
      condition: "A debilitated planet gets its debilitation cancelled.",
      result: "Initial struggles lead to massive success later in life. The person rises from low status to high status."
    },
    {
      name: "Amala Yoga",
      type: "Raj Yoga",
      requiredPlanets: ["Jupiter", "Venus", "Mercury"],
      condition: "A benefic planet situated in the 10th house from Ascendant or Moon.",
      result: "Professional fame, spotless reputation, and prosperity. The person is philanthropic."
    },

    // --- DHANA YOGAS (Wealth) ---
    {
      name: "Dhana Yoga (2-11 Connection)",
      type: "Dhana Yoga",
      requiredPlanets: ["Jupiter", "Venus"],
      condition: "Lords of 2nd (Wealth) and 11th (Gains) houses are connected.",
      result: "Indicates immense wealth accumulation and multiple sources of income throughout life."
    },
    {
      name: "Lakshmi Yoga",
      type: "Dhana Yoga",
      requiredPlanets: ["Venus", "Jupiter"],
      condition: "Lord of 9th house is in Kendra/Trikona and exalted or in own sign.",
      result: "The person becomes wealthy, noble, learned, and enjoys a life of comfort and luxury."
    },
    {
      name: "Chandra-Mangala Yoga",
      type: "Dhana Yoga",
      requiredPlanets: ["Moon", "Mars"],
      condition: "Moon and Mars are conjoined.",
      result: "Earnings through enterprise, business acumen, but potential for restlessness or emotional volatility."
    },
    {
      name: "Vasumathi Yoga",
      type: "Dhana Yoga",
      requiredPlanets: ["Benefics"],
      condition: "Benefics (Jupiter, Venus, Mercury) occupy Upachaya houses (3, 6, 10, 11) from Moon or Lagna.",
      result: "The person will not be dependent on others and will amass great wealth through their own efforts."
    },

    // --- KNOWLEDGE & SPIRITUALITY ---
    {
      name: "Saraswati Yoga",
      type: "General",
      requiredPlanets: ["Mercury", "Venus", "Jupiter"],
      condition: "Mercury, Jupiter and Venus in Kendra, Trikona or 2nd house.",
      result: "Highly learned, skilled in writing or speech, celebrated for wisdom and artistic skills."
    },

    // --- ARISTA YOGAS (Challenges) ---
    {
      name: "Kemadruma Yoga",
      type: "Arista Yoga",
      requiredPlanets: ["Moon"],
      condition: "No planets (except Sun/Rahu/Ketu) on either side of the Moon.",
      result: "Can indicate periods of loneliness, mental anxiety, or financial fluctuation. Remedies required."
    },
    {
      name: "Shakata Yoga",
      type: "Arista Yoga",
      requiredPlanets: ["Moon", "Jupiter"],
      condition: "Moon in 6th, 8th, or 12th from Jupiter.",
      result: "Life is like a wheel—ups and downs in fortune. Financial instability followed by recovery."
    },
    {
      name: "Pitra Dosha",
      type: "Arista Yoga",
      requiredPlanets: ["Sun", "Rahu", "Saturn"],
      condition: "Sun conjoined with Rahu or Saturn in 9th house.",
      result: "Ancestral karmic debts causing delays in progeny or progress. Requires specific ancestral rituals."
    }
  ],
  planetaryEffects: {
    "Sun": {
      "1": "Leadership qualities, ego, strong vitality, independent nature, thin hair.",
      "2": "Expenses due to government, eye trouble, harsh speech, family disputes.",
      "3": "Courageous, victorious over enemies, good for siblings.",
      "4": "Mental worry, trouble to mother, success in land dealings, heart issues.",
      "5": "Intelligence, few children, interest in politics, speculative gains.",
      "6": "Victory over enemies, good digestion, success in service/admin.",
      "7": "Late marriage, ego clashes with partner, public success, travel.",
      "8": "Health issues, interest in occult, sudden events, weak eyesight.",
      "9": "Disagreement with father/gurus, independent spiritual path.",
      "10": "Career success, government favor, authority, fame, strong reputation.",
      "11": "High gains, influential friends, success in desires.",
      "12": "Spiritual inclination, eye trouble, living in foreign lands."
    },
    "Moon": {
      "1": "Emotional sensitivity, fluctuating moods, caring nature, beautiful appearance.",
      "2": "Wealth from family, soft speech, attractive face.",
      "3": "Fond of travel, artistic, good relationship with sisters.",
      "4": "Happiness from mother, vehicles, and home; peace of mind.",
      "5": "Creative, romantic, love for children, fluctuating mind.",
      "6": "Health issues in childhood, ability to serve others, minor enemies.",
      "7": "Beautiful spouse, emotional dependency in relationships, travel.",
      "8": "Psychic ability, emotional turbulence, longevity.",
      "9": "Fortunate, religious, travel abroad, charitable.",
      "10": "Fluctuations in career, public dealings, popularity, changing jobs.",
      "11": "Many friends, social success, easy gains.",
      "12": "Imaginative, dreamy, expenditure on charity, spiritual experiences."
    },
    "Mars": {
      "1": "Aggressive, energetic, impulsive, potential for head injuries, reddish complexion.",
      "2": "Harsh speech, wealth through technical means, dental issues.",
      "3": "Very courageous, technical skills, trouble to younger siblings.",
      "4": "Domestic arguments, property disputes, technical education, restless at home.",
      "5": "Impulsive in romance, technical intelligence, stomach issues.",
      "6": "Crushes enemies, competitive success, good health.",
      "7": "Manglik Dosha - delay or conflict in marriage, energetic/dominant partner.",
      "8": "Sudden accidents, surgery, disputes over inheritance.",
      "9": "Independent views, conflict with father, technical higher education.",
      "10": "Success in military, police, engineering, surgery. High energy in work.",
      "11": "Wealth from land/property, success in goals, powerful friends.",
      "12": "Expenditure on medical/legal issues, sleep disturbances."
    },
    "Mercury": {
      "1": "Intelligent, humorous, good communicator, youthful appearance.",
      "2": "Witty speech, earning through writing/trading, good education.",
      "3": "Good writing skills, short travels, business acumen.",
      "4": "Academic success, good vehicles, happiness from relatives.",
      "5": "Creative intelligence, success in speculation, mantras, writing.",
      "6": "Argumentative, nervous stress, success in law/debate.",
      "7": "Young or intelligent spouse, business partnerships.",
      "8": "Research ability, inheritance, longevity, nervous system issues.",
      "9": "Higher learning, publishing, fortunate, interest in astrology.",
      "10": "Success in business, journalism, accounting, IT, or astrology.",
      "11": "Multiple sources of gain, intellectual network.",
      "12": "Expenditure on education, nervous trouble, spiritual intellect."
    },
    "Jupiter": {
      "1": "Wisdom, health, optimism, divine protection, corpulent body.",
      "2": "Wealth, truthfulness, good family life, sweet speech.",
      "3": "Philosophical, good to siblings, laziness.",
      "4": "Large home, happiness, good education, peace.",
      "5": "Good children, success in education, speculation gains, mantras.",
      "6": "Victory over enemies through wisdom, digestive issues.",
      "7": "Virtuous spouse, success in marriage/partnerships.",
      "8": "Unexpected inheritance, occult knowledge, peaceful death.",
      "9": "Religious, fortunate, travel for spiritual reasons, guru's grace.",
      "10": "Career in law, education, banking, advisory roles, highly respected.",
      "11": "Fulfillment of desires, wealthy friends, elder sibling support.",
      "12": "Charitable, spiritual liberation, expenditure on good causes."
    },
    "Venus": {
      "1": "Charming, artistic, attractive, fond of luxury, charismatic.",
      "2": "Wealth through arts/beauty, sweet voice, gems.",
      "3": "Artistic talents, good relationship with sisters.",
      "4": "Beautiful home, happiness, luxury vehicles, comfort.",
      "5": "Romance, creativity, daughters, speculative gains.",
      "6": "Issues with reproductive health, kidney issues, debt for luxury.",
      "7": "Happy marriage, beautiful partner, success in partnerships.",
      "8": "Wealth from partner, peaceful life, longevity.",
      "9": "Fortunate, travel for pleasure, artistic guru.",
      "10": "Career in arts, entertainment, luxury goods, fashion, hospitality.",
      "11": "Gains from women, luxury, vehicles, social success.",
      "12": "Bed pleasures, luxury expenditure, spiritual love."
    },
    "Saturn": {
      "1": "Serious, disciplined, slow success, mature appearance, lazy.",
      "2": "Wealth through hard work, separation from family, harsh speech.",
      "3": "Perseverance, victory over enemies, trouble to siblings.",
      "4": "Old house, distance from mother, deep thinker, sorrow.",
      "5": "Delays in children, serious nature, technical learning.",
      "6": "Victory over enemies, service oriented, chronic health issues.",
      "7": "Delayed marriage or mature partner. Dutiful relationships, stable.",
      "8": "Long life, chronic illness, obstacles, inheritance.",
      "9": "Unorthodox beliefs, delays in fortune, philosophical.",
      "10": "Hard work leads to high status. Success comes late but stays. Authority.",
      "11": "Steady gains, long-term goals realized, few but loyal friends.",
      "12": "Isolation, expenditure, spiritual discipline, foreign lands."
    },
    "Rahu": {
      "1": "Unconventional personality, desire for recognition, illusion, tech-savvy.",
      "2": "Unusual speech, foreign wealth, family separation.",
      "3": "Courageous, unconventional communication.",
      "4": "Restless at home, foreign residence, illusion.",
      "5": "Unconventional creativity, trouble with children, speculation.",
      "6": "Victory over enemies, strong immune system, unconventional healing.",
      "7": "Unconventional marriage, inter-caste/foreign spouse, desires.",
      "8": "Sudden events, occult, hidden wealth, chronic illness.",
      "9": "Unorthodox beliefs, foreign travel, rebel.",
      "10": "High ambition, success in foreign lands, tech, politics, media.",
      "11": "Sudden gains, foreign friends, high desires.",
      "12": "Foreign settlement, sleep issues, spiritual escapism."
    },
    "Ketu": {
      "1": "Spiritual leanings, detachment, intuitive, head injury.",
      "2": "Detachment from wealth, spiritual speech.",
      "3": "Strength, spiritual courage.",
      "4": "Detachment from home, spiritual mother.",
      "5": "Spiritual intelligence, intuitive.",
      "6": "Victory over enemies, spiritual healing.",
      "7": "Detached spouse, spiritual relationships.",
      "8": "Occult knowledge, sudden events, injury.",
      "9": "Spiritual guru, pilgrimage.",
      "10": "Dissatisfaction in career, job changes, spiritual work.",
      "11": "Detachment from gains, spiritual friends.",
      "12": "Moksha karaka - spiritual liberation, isolation, meditation."
    }
  }
};

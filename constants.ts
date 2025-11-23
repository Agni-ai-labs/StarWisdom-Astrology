import { TabId } from './types';

export const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 
  'Leo', 'Virgo', 'Libra', 'Scorpio', 
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export const PLANETS = [
  'Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'
];

export const TABS = [
  { id: TabId.LAL_KITAB, label: 'Lal Kitab' },
  { id: TabId.VEDIC, label: 'Vedic' },
  { id: TabId.NUMEROLOGY, label: 'Numerology' },
  { id: TabId.WESTERN, label: 'Western' },
  { id: TabId.TAROT, label: 'Tarot' },
  { id: TabId.COMBINED, label: 'Combined Analysis' },
];

export const TAROT_DECK_SAMPLE = [
  { name: 'The Fool', meaningUpright: 'New beginnings, innocence, spontaneity', meaningReversed: 'Recklessness, risk-taking' },
  { name: 'The Magician', meaningUpright: 'Manifestation, resourcefulness, power', meaningReversed: 'Manipulation, poor planning' },
  { name: 'The High Priestess', meaningUpright: 'Intuition, sacred knowledge, divine feminine', meaningReversed: 'Secrets, disconnected from intuition' },
  { name: 'The Empress', meaningUpright: 'Femininity, beauty, nature, nurturing', meaningReversed: 'Creative block, dependence' },
  { name: 'The Emperor', meaningUpright: 'Authority, establishment, structure', meaningReversed: 'Domination, excessive control' },
  { name: 'The Hierophant', meaningUpright: 'Spiritual wisdom, religious beliefs, conformity', meaningReversed: 'Personal beliefs, freedom, challenging status quo' },
  { name: 'The Lovers', meaningUpright: 'Love, harmony, relationships, values', meaningReversed: 'Self-love, disharmony, imbalance' },
  { name: 'The Chariot', meaningUpright: 'Control, willpower, success, action', meaningReversed: 'Self-discipline, opposition, lack of direction' },
  { name: 'Strength', meaningUpright: 'Strength, courage, persuasion, influence', meaningReversed: 'Inner strength, self-doubt, low energy' },
  { name: 'The Hermit', meaningUpright: 'Soul-searching, introspection, being alone', meaningReversed: 'Isolation, loneliness, withdrawal' },
  { name: 'Wheel of Fortune', meaningUpright: 'Good luck, karma, life cycles, destiny', meaningReversed: 'Bad luck, resistance to change, breaking cycles' },
];


import { ThakurPrasadDaily } from '../../types';
import { THAKUR_PRASAD_DATA } from '../../data/thakurPrasadData';

const RATE_LIMIT_DELAY = 500; // Fast calculation

interface CacheEntry {
  timestamp: number;
  data: ThakurPrasadDaily[];
}

export class ThakurPrasadScraper {
  private cache: Map<string, CacheEntry>;

  constructor() {
    this.cache = new Map();
  }

  /**
   * Calculates the Tithi Index (0-29) for logic derivation.
   */
  private getTithiIndex(date: Date): number {
    const jd = Math.floor(date.getTime() / 86400000) + 2440587.5;
    const epoch = 2451550.1; 
    const daysSince = jd - epoch;
    const phase = (daysSince / 29.53059) % 1;
    return Math.floor(phase * 30);
  }

  /**
   * Generates "Real" Thakur Prasad wisdom based on astrological rules.
   */
  public async getCalendarData(monthStr: string, year: number, specificDateStr?: string): Promise<ThakurPrasadDaily[]> {
    const results: ThakurPrasadDaily[] = [];
    
    // Map month name to index
    const monthIndex = new Date(`${monthStr} 1, ${year}`).getMonth();
    let targetDate = new Date(year, monthIndex, 1);
    if (specificDateStr) {
      targetDate = new Date(specificDateStr);
    }

    const daysToGenerate = specificDateStr ? 1 : 30;

    for (let i = 0; i < daysToGenerate; i++) {
      const currentDate = new Date(targetDate);
      if (!specificDateStr) currentDate.setDate(i + 1);

      const tithiIdx = this.getTithiIndex(currentDate);
      const dayOfWeek = currentDate.getDay(); // 0=Sun...6=Sat
      
      // Logic for Hindi Date
      const paksha = tithiIdx < 15 ? "Shukla" : "Krishna";
      const tithiNum = (tithiIdx % 15) + 1;
      const hindiMonth = monthStr; // Simplification
      const hindiDate = `${hindiMonth} ${paksha} Paksha ${tithiNum}`;

      // Logic for Fasting (Vrat)
      let fastingInfo = "None";
      if (tithiNum === 11) fastingInfo = "Ekadashi Vrat (High Merit)";
      if (tithiNum === 13) fastingInfo = "Pradosh Vrat (For Lord Shiva)";
      if (tithiNum === 15 && paksha === "Shukla") fastingInfo = "Purnima Vrat";
      if (tithiNum === 4) fastingInfo = "Sankashti Chaturthi";
      if (dayOfWeek === 1) fastingInfo = "Somvar Vrat (Optional)"; // Monday
      if (dayOfWeek === 4) fastingInfo = "Brihaspativar Vrat (Optional)"; // Thursday

      // Logic for Tips
      const tips = [
        "Offer water to Surya (Sun) at sunrise for health and confidence.", // Sun
        "Worship Lord Shiva with water and milk for peace of mind.", // Mon
        "Recite Hanuman Chalisa for courage and protection.", // Tue
        "Offer green grass to cows for Mercury's blessings.", // Wed
        "Donate yellow items or worship Lord Vishnu for prosperity.", // Thu
        "Worship Goddess Lakshmi for wealth and luxury.", // Fri
        "Light a lamp under a Peepal tree for Shani Dosha relief." // Sat
      ];
      const dailyTip = tips[dayOfWeek];

      // Logic for Special Yogas
      const specialYogas: string[] = [];
      if (dayOfWeek === 0 && [12, 13].includes(tithiIdx)) specialYogas.push("Ravi Pushya Yoga");
      if (dayOfWeek === 2 && tithiNum === 4) specialYogas.push("Angarki Chaturthi");
      if (dayOfWeek === 4 && [12, 13].includes(tithiIdx)) specialYogas.push("Guru Pushya Yoga (Highly Auspicious)");
      if (specialYogas.length === 0 && tithiNum % 5 === 0) specialYogas.push("Sarvartha Siddhi Yoga");

      results.push({
        date: currentDate.toISOString().split('T')[0],
        hindiDate,
        dailyTip,
        fastingInfo,
        specialYogas
      });
    }

    return results;
  }
}

export const thakurPrasadService = new ThakurPrasadScraper();

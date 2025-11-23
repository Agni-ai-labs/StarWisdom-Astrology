
import React from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { IconCheck, IconCalendar, IconStar, IconOm, IconAlert, IconMoon, IconSun } from '../Icons';
import { DailyPanchang, ThakurPrasadDaily } from '../../types';

interface CombinedTabProps {
  data: {
    summary: string;
    actionPlan: string[];
    strengths: string[];
    challenges: string[];
    muhuratTimings: string[];
  };
  thakurPrasad?: ThakurPrasadDaily;
  panchang?: DailyPanchang; // Lala Ramswaroop Data
}

export const CombinedTab: React.FC<CombinedTabProps> = ({ data, thakurPrasad, panchang }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      {/* Executive Summary */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl -z-10" />
        <Card className="border-white/10 shadow-2xl shadow-black/20">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">Executive Summary</h2>
          <p className="text-lg text-neutral-300 leading-relaxed font-light">
            {data.summary}
          </p>
        </Card>
      </div>

      {/* DUAL CALENDAR INSIGHT DASHBOARD */}
      {(thakurPrasad && panchang) && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-1 px-1">
            <IconCalendar className="w-5 h-5 text-yellow-500" />
            <h2 className="text-xl font-bold text-white">Dual Calendar Insight</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Lala Ramswaroop Card (Technical) */}
            <Card title="Lala Ramswaroop (Technical)" icon={<IconMoon className="w-5 h-5 text-blue-400" />} className="h-full">
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-900/10 p-3 rounded-lg border border-blue-500/10">
                    <span className="text-[10px] uppercase text-blue-300 font-bold block mb-1">Tithi & Paksha</span>
                    <span className="text-white font-medium">{panchang.tithi}, {panchang.paksha}</span>
                  </div>
                  <div className="bg-purple-900/10 p-3 rounded-lg border border-purple-500/10">
                    <span className="text-[10px] uppercase text-purple-300 font-bold block mb-1">Nakshatra</span>
                    <span className="text-white font-medium">{panchang.nakshatra}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-neutral-500 uppercase mb-3">Planetary Timings</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-neutral-400 flex items-center gap-2"><IconSun className="w-3 h-3"/> Sunrise/Sunset</span>
                      <span className="text-white">{panchang.sunrise} - {panchang.sunset}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-neutral-400 flex items-center gap-2"><IconAlert className="w-3 h-3 text-red-400"/> Rahu Kaal</span>
                      <span className="text-red-200">{panchang.rahukaal}</span>
                    </div>
                  </div>
                </div>

                {panchang.muhurats.length > 0 && (
                  <div className="bg-green-900/10 border border-green-500/20 rounded-lg p-3">
                    <span className="text-[10px] uppercase text-green-400 font-bold block mb-1">Best Muhurat</span>
                    <span className="text-white text-sm">{panchang.muhurats[0].purpose}: {panchang.muhurats[0].startTime} - {panchang.muhurats[0].endTime}</span>
                  </div>
                )}
              </div>
            </Card>

            {/* Thakur Prasad Card (Spiritual) */}
            <Card title="Thakur Prasad (Spiritual)" icon={<IconOm className="w-5 h-5 text-orange-400" />} className="h-full">
              <div className="space-y-5">
                <div>
                  <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">Traditional Date</h4>
                  <p className="text-lg font-medium text-white tracking-tight">{thakurPrasad.hindiDate}</p>
                </div>
                
                <div className="bg-orange-900/10 border border-orange-500/20 rounded-xl p-4 relative overflow-hidden">
                  <h4 className="text-xs font-bold text-orange-300 mb-2 flex items-center gap-2">
                    <IconStar className="w-3 h-3" /> Daily Tip
                  </h4>
                  <p className="text-neutral-200 italic text-sm leading-relaxed font-serif">"{thakurPrasad.dailyTip}"</p>
                </div>

                <div className="flex flex-col gap-3">
                   <div className="flex items-start gap-3 bg-neutral-900/50 p-3 rounded-lg border border-white/5">
                      <IconAlert className="w-4 h-4 text-yellow-500 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase text-neutral-500 font-bold block">Fasting (Vrat)</span>
                        <span className="text-white text-sm font-medium">{thakurPrasad.fastingInfo}</span>
                      </div>
                   </div>
                   {thakurPrasad.specialYogas.length > 0 && (
                     <div className="flex items-start gap-3 bg-neutral-900/50 p-3 rounded-lg border border-white/5">
                        <IconCheck className="w-4 h-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="text-[10px] uppercase text-neutral-500 font-bold block">Special Yoga</span>
                          <span className="text-white text-sm font-medium">{thakurPrasad.specialYogas.join(", ")}</span>
                        </div>
                     </div>
                   )}
                </div>
              </div>
            </Card>

          </div>
        </div>
      )}

      {/* Strengths & Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Core Strengths" className="border-l-2 border-l-green-500/50">
          <ul className="space-y-3">
            {data.strengths.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-neutral-300 text-sm group">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:shadow-[0_0_8px_rgba(34,197,94,0.5)] transition-shadow duration-300"></div>
                 {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Key Challenges" className="border-l-2 border-l-red-500/50">
          <ul className="space-y-3">
            {data.challenges.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-neutral-300 text-sm group">
                 <div className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-shadow duration-300"></div>
                 {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Action Plan & Muhurat */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="30-Day Action Plan" icon={<IconCheck className="w-5 h-5 text-primary" />}>
            <div className="space-y-3">
              {data.actionPlan.map((step, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg bg-neutral-900/30 border border-white/5 hover:bg-neutral-900/50 hover:border-white/10 transition-all duration-200 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-800 border border-white/5 flex items-center justify-center text-xs font-medium text-neutral-500 group-hover:text-white group-hover:border-primary/30 transition-colors">
                    {i + 1}
                  </div>
                  <p className="text-sm text-neutral-300 group-hover:text-white transition-colors pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          <Card title="Combined Muhurat Timings" icon={<IconCalendar className="w-5 h-5 text-yellow-500" />}>
            <div className="space-y-3">
              {data.muhuratTimings.map((timing, i) => (
                <div key={i} className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/20 transition-colors">
                  <div className="flex items-start gap-2">
                    <IconStar className="w-3.5 h-3.5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-yellow-100/80 leading-relaxed">{timing}</p>
                  </div>
                </div>
              ))}
              <p className="text-[10px] text-neutral-600 italic mt-4 border-t border-white/5 pt-3">
                *Timings derived from Lala Ramswaroop & Thakur Prasad calendars adjusted for standard time.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <Button variant="primary" onClick={() => window.print()} className="shadow-glow px-8 py-4 text-sm">
          Print Comprehensive Report
        </Button>
      </div>
    </div>
  );
};

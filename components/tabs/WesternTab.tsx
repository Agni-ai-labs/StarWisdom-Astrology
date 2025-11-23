import React from 'react';
import { WesternProfile, ZodiacSignData } from '../../types';
import { Card } from '../Card';
import { IconSun, IconMoon, IconRising, IconCalendar, getZodiacIcon } from '../Icons';

interface WesternTabProps {
  data: WesternProfile;
}

const ZodiacSection = ({ 
  title, 
  data, 
  icon,
  type 
}: { 
  title: string; 
  data: { sign: ZodiacSignData; [key: string]: any }; 
  icon: React.ReactNode;
  type: 'sun' | 'moon' | 'rising';
}) => {
  const SignIcon = getZodiacIcon(data.sign.name, "w-12 h-12 text-white");
  
  let accentColor = "bg-neutral-800";
  if (data.sign.element === 'Fire') accentColor = "bg-red-900/20 border-red-900/50";
  if (data.sign.element === 'Earth') accentColor = "bg-green-900/20 border-green-900/50";
  if (data.sign.element === 'Air') accentColor = "bg-blue-900/20 border-blue-900/50";
  if (data.sign.element === 'Water') accentColor = "bg-purple-900/20 border-purple-900/50";

  return (
    <div className={`rounded-xl border border-border p-6 ${accentColor} relative overflow-hidden`}>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-full bg-surface border border-border shadow-lg">
             {icon}
          </div>
          <div>
            <h3 className="text-sm font-bold text-textMuted uppercase tracking-wider">{title}</h3>
            <div className="flex items-baseline gap-2">
              <h2 className="text-2xl font-bold text-white">{data.sign.name}</h2>
              {type === 'rising' && <span className="text-sm text-textMuted">{(data as any).degree}°</span>}
            </div>
            <p className="text-xs text-textMuted">{data.sign.dateRange}</p>
          </div>
          <div className="ml-auto hidden sm:block opacity-80">
            {SignIcon}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="block text-xs text-textMuted">Ruling Planet</span>
              <span className="font-medium text-white">{data.sign.rulingPlanet}</span>
            </div>
            <div>
              <span className="block text-xs text-textMuted">Element & Quality</span>
              <span className="font-medium text-white">{data.sign.element} | {data.sign.quality}</span>
            </div>
          </div>

          <div className="bg-surface/50 rounded-lg p-3 border border-white/5">
             <p className="text-sm text-neutral-300 leading-relaxed">
               {type === 'sun' && (data as any).coreEssence}
               {type === 'moon' && (data as any).emotionalSignificance}
               {type === 'rising' && (data as any).firstImpression}
             </p>
          </div>

          {type === 'moon' && (
            <div>
              <h4 className="text-xs font-bold text-textMuted uppercase mb-2">Emotional Needs</h4>
              <div className="flex flex-wrap gap-2">
                {(data as any).needs.map((need: string, i: number) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-surface border border-border text-neutral-300">
                    {need}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const WesternTab: React.FC<WesternTabProps> = ({ data }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ZodiacSection 
          title="Sun Sign" 
          data={data.sunSign} 
          icon={<IconSun className="w-6 h-6 text-yellow-500" />}
          type="sun"
        />
        <ZodiacSection 
          title="Moon Sign" 
          data={data.moonSign} 
          icon={<IconMoon className="w-6 h-6 text-blue-400" />}
          type="moon"
        />
        <ZodiacSection 
          title="Rising Sign (Ascendant)" 
          data={data.risingSign} 
          icon={<IconRising className="w-6 h-6 text-purple-500" />}
          type="rising"
        />
      </div>

      <Card className="border-t-4 border-t-blue-600">
        <div className="flex items-start gap-4 mb-6">
          <IconCalendar className="w-8 h-8 text-blue-500 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-white">Monthly Horoscope</h2>
            <p className="text-textMuted">{data.horoscope.month} {data.horoscope.year} - {data.sunSign.sign.name}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 text-lg leading-relaxed">
              {data.horoscope.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-green-400 uppercase tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Opportunities
              </h4>
              <ul className="space-y-2">
                {data.horoscope.opportunities.map((opp, i) => (
                  <li key={i} className="text-sm text-neutral-300 flex items-start gap-2">
                    <span className="text-green-500/50">•</span> {opp}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Challenges
              </h4>
              <ul className="space-y-2">
                {data.horoscope.challenges.map((chal, i) => (
                  <li key={i} className="text-sm text-neutral-300 flex items-start gap-2">
                    <span className="text-yellow-500/50">•</span> {chal}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg p-4 border border-border">
            <h4 className="text-sm font-bold text-white mb-3">Key Dates</h4>
            <div className="flex flex-wrap gap-3">
              {data.horoscope.keyDates.map((date, i) => (
                <div key={i} className="px-3 py-2 rounded bg-neutral-800 border border-neutral-700">
                  <span className="block text-blue-400 font-bold text-xs">{date.date}</span>
                  <span className="text-xs text-neutral-400">{date.event}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-blue-900/20 border border-blue-900/50 rounded-lg">
            <span className="text-blue-200 font-medium text-sm">✨ Guidance: </span>
            <span className="text-blue-100/80 text-sm italic">{data.horoscope.advice}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};
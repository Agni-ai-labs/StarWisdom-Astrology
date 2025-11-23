import React from 'react';
import { NumerologyReport } from '../../types';
import { Card } from '../Card';
import { IconSparkles } from '../Icons';

interface NumerologyTabProps {
  data: NumerologyReport;
}

const NumberCircle = ({ num, label }: { num: number; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-blue-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-purple-900/30">
      {num}
    </div>
    <span className="text-xs font-medium uppercase tracking-wider text-textMuted">{label}</span>
  </div>
);

export const NumerologyTab: React.FC<NumerologyTabProps> = ({ data }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-8">
        <NumberCircle num={data.lifePathNumber} label="Life Path" />
        <NumberCircle num={data.destinyNumber} label="Destiny" />
        <NumberCircle num={data.soulUrgeNumber} label="Soul Urge" />
        <NumberCircle num={data.personalityNumber} label="Personality" />
      </div>

      <Card title={`Life Path Number ${data.lifePathNumber}`} icon={<IconSparkles className="w-5 h-5 text-yellow-500" />}>
        <p className="text-lg text-text leading-relaxed">
          {data.description}
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-surfaceHighlight rounded border border-border/50">
            <h4 className="text-secondary font-bold text-sm mb-2 uppercase">Lucky Colors</h4>
            <p className="text-textMuted text-sm">White, Light Blue, Silver</p>
          </div>
          <div className="p-4 bg-surfaceHighlight rounded border border-border/50">
            <h4 className="text-secondary font-bold text-sm mb-2 uppercase">Lucky Days</h4>
            <p className="text-textMuted text-sm">Monday, Friday</p>
          </div>
          <div className="p-4 bg-surfaceHighlight rounded border border-border/50">
            <h4 className="text-secondary font-bold text-sm mb-2 uppercase">Compatible #</h4>
            <p className="text-textMuted text-sm">2, 6, 9</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
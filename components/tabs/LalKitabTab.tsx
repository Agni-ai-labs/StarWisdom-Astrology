import React from 'react';
import { Remedy } from '../../types';
import { Card } from '../Card';
import { IconAlert, IconOm } from '../Icons';

interface LalKitabTabProps {
  debts: string[];
  remedies: Remedy[];
}

export const LalKitabTab: React.FC<LalKitabTabProps> = ({ debts, remedies }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Rinanubandha (Karmic Debts)" icon={<IconAlert className="w-5 h-5 text-red-500" />}>
          <p className="text-sm text-textMuted mb-4">
            Lal Kitab identifies specific ancestral debts that may be causing obstructions in your current life path.
          </p>
          <ul className="space-y-2">
            {debts.map((debt, i) => (
              <li key={i} className="flex items-center gap-2 text-sm bg-red-950/20 border border-red-900/30 p-2 rounded text-red-200">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                {debt}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Varshphal (Yearly) Remedies">
          <p className="text-sm text-textMuted mb-4">
            Simple, practical measures to harmonize planetary energies for the current year.
          </p>
          <div className="space-y-3">
            {remedies.map((remedy, i) => (
              <div key={i} className="flex gap-3 p-3 rounded-lg bg-surfaceHighlight border border-border/50">
                <div className="text-secondary mt-1">
                  <IconOm className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-text">{remedy.description}</div>
                  <div className="text-sm text-textMuted mt-1">{remedy.instructions}</div>
                  {remedy.timing && (
                    <div className="text-xs text-primary mt-2 bg-primary/10 inline-block px-2 py-1 rounded">
                      ⏰ {remedy.timing}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      <Card title="Red Book Philosophy">
        <div className="prose prose-invert max-w-none text-sm text-textMuted">
          <p>
            Unlike traditional Vedic astrology, Lal Kitab focuses on the remediation of planetary afflictions through simple, affordable means. 
            It emphasizes that your destiny is not set in stone, but can be modified through conscious action and karma correction.
          </p>
          <p className="mt-2">
            <strong>Note:</strong> Perform remedies during daylight hours unless specified otherwise. Do not perform multiple major remedies on the same day.
          </p>
        </div>
      </Card>
    </div>
  );
};
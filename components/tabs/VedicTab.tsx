import React from 'react';
import { ChartData, AnalysisSection } from '../../types';
import { Card } from '../Card';
import { IconStar, IconAlert, IconCheck } from '../Icons';

interface VedicTabProps {
  chart: ChartData;
  analysis: AnalysisSection[];
}

export const VedicTab: React.FC<VedicTabProps> = ({ chart, analysis }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Visualization */}
        <Card title="Rashi Chart (D1)" className="lg:col-span-1">
          <div className="relative aspect-square border border-border rounded-lg bg-neutral-950 p-4 flex items-center justify-center">
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px bg-border opacity-20">
              {/* North Indian Style Chart Grid Simulation */}
            </div>
            <div className="grid grid-cols-2 gap-8 text-center">
              {chart.planets.slice(0, 4).map(p => (
                <div key={p.name} className="flex flex-col">
                  <span className="text-xs text-textMuted uppercase">{p.name}</span>
                  <span className="font-bold text-primary">{p.sign}</span>
                  <span className="text-xs text-textMuted">House {p.house}</span>
                </div>
              ))}
            </div>
            <div className="absolute bottom-2 right-2 text-xs text-textMuted">
              ASC: {chart.ascendant}
            </div>
          </div>
        </Card>

        {/* Planetary Details Table */}
        <Card title="Planetary Positions" className="lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-textMuted">
                  <th className="p-2">Planet</th>
                  <th className="p-2">Sign</th>
                  <th className="p-2">House</th>
                  <th className="p-2">Degree</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {chart.planets.map((p) => (
                  <tr key={p.name} className="border-b border-border/50 hover:bg-surfaceHighlight/50 transition-colors">
                    <td className="p-2 font-medium">{p.name}</td>
                    <td className="p-2">{p.sign}</td>
                    <td className="p-2">{p.house}</td>
                    <td className="p-2">{p.degree}°</td>
                    <td className="p-2">
                      {p.isRetrograde ? <span className="text-red-400 text-xs border border-red-900/50 bg-red-900/20 px-1 rounded">Retro</span> : <span className="text-green-400 text-xs">Direct</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Detailed Analysis */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold px-1">Detailed Analysis</h2>
        {analysis.map((section, idx) => (
          <Card key={idx} title={section.title} icon={<IconStar className="w-5 h-5" />}>
            <p className="text-textMuted leading-relaxed mb-4">
              {section.content}
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4 border border-border">
              <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <IconCheck className="w-4 h-4 text-primary" /> Recommended Remedies
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {section.remedies.map((remedy, rIdx) => (
                  <div key={rIdx} className="text-sm p-3 bg-surfaceHighlight rounded border border-border/50">
                    <div className="font-medium text-secondary mb-1">{remedy.type}</div>
                    <div className="text-textMuted">{remedy.description}</div>
                    <div className="text-xs text-textMuted mt-1 italic">{remedy.instructions}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
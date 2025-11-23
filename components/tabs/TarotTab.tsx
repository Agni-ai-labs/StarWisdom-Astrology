import React, { useState } from 'react';
import { TarotCard } from '../../types';
import { IconCards } from '../Icons';

interface TarotTabProps {
  cards: TarotCard[];
}

export const TarotTab: React.FC<TarotTabProps> = ({ cards }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-light text-white mb-3">Past, Present, Future</h2>
        <p className="text-textMuted">
          Hover over the cards to reveal the hidden wisdom of the arcana. 
          Each position represents a distinct timeline in your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {cards.map((card, index) => (
          <div key={index} className="relative group perspective-1000 w-full max-w-xs flex flex-col items-center">
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-textMuted uppercase text-center">
              {card.position}
            </p>
            
            <div 
              className="relative w-64 h-96 transition-all duration-500 ease-out transform group-hover:scale-105 group-hover:-translate-y-2 z-0 group-hover:z-10 cursor-pointer rounded-xl shadow-2xl"
              tabIndex={0}
              role="button"
              aria-label={`Tarot card ${card.name} in ${card.position} position`}
            >
              {/* Card Image */}
              <div className="absolute inset-0 rounded-xl overflow-hidden border border-border bg-surface shadow-black/50 shadow-lg">
                 <img 
                   src={card.imagePlaceholder} 
                   alt={card.name} 
                   className={`w-full h-full object-cover transition-transform duration-700 ${card.isReversed ? 'rotate-180' : ''}`}
                 />
              </div>

              {/* Glassmorphism Overlay (Reveal on Hover) */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex flex-col justify-center items-center p-6 text-center border border-white/10">
                <h3 className="text-xl font-bold text-white mb-1">{card.name}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full mb-4 ${card.isReversed ? 'bg-red-900/50 text-red-200' : 'bg-green-900/50 text-green-200'}`}>
                  {card.isReversed ? 'Reversed' : 'Upright'}
                </span>

                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {card.keywords.map((kw, k) => (
                    <span key={k} className="text-[10px] uppercase tracking-wide text-neutral-300 bg-white/10 px-2 py-1 rounded">
                      {kw}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed line-clamp-4">
                  {card.isReversed ? card.meaningReversed : card.meaningUpright}
                </p>
              </div>
            </div>
            
            {/* Mobile-only visible label since hover doesn't exist on touch mostly */}
            <div className="md:hidden mt-4 text-center">
              <h3 className="font-bold text-white">{card.name}</h3>
              <p className="text-xs text-textMuted">{card.isReversed ? 'Reversed' : 'Upright'}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
           <div className="bg-surfaceHighlight p-4 rounded-lg border border-border">
             <h4 className="text-sm font-bold text-primary mb-2">Interpretation Guide</h4>
             <p className="text-xs text-textMuted leading-relaxed">
               The spread uses a linear timeline. The center card represents your current energy and is the anchor of the reading. The left shows influences passing away, and the right shows emerging energies.
             </p>
           </div>
           <div className="bg-surfaceHighlight p-4 rounded-lg border border-border">
             <h4 className="text-sm font-bold text-secondary mb-2">Meditation Focus</h4>
             <p className="text-xs text-textMuted leading-relaxed">
               Reflect on the {cards[1].element} element of the center card ({cards[1].name}). 
               {cards[1].element === 'Fire' && " Focus on action and willpower."}
               {cards[1].element === 'Water' && " Focus on emotions and intuition."}
               {cards[1].element === 'Air' && " Focus on intellect and communication."}
               {cards[1].element === 'Earth' && " Focus on stability and material needs."}
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};
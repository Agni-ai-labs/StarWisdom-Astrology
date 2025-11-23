
import React, { useState } from 'react';
import { UserInput } from '../../types';
import { Button } from '../Button';
import { Card } from '../Card';
import { IconSparkles } from '../Icons';

interface BirthDetailsFormProps {
  onSubmit: (data: UserInput) => void;
  isLoading: boolean;
}

const InputGroup = ({ label, children }: { label: string, children?: React.ReactNode }) => (
  <div className="space-y-2">
    <label className="block text-xs font-medium text-textMuted uppercase tracking-widest ml-0.5">{label}</label>
    {children}
  </div>
);

export const BirthDetailsForm: React.FC<BirthDetailsFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<UserInput>({
    fullName: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    gender: 'male',
    concern: 'job'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Apple/Vercel style input classes
  const inputClasses = `
    w-full px-4 py-3.5 
    rounded-lg 
    bg-[#0A0A0A] 
    border border-white/10 
    hover:border-white/20
    focus:border-white/40 focus:ring-4 focus:ring-white/5 focus:outline-none 
    transition-all duration-200 
    text-white placeholder-neutral-600 
    text-sm font-normal
    shadow-sm
  `;
  
  const selectClasses = `
    w-full px-4 py-3.5 
    rounded-lg 
    bg-[#0A0A0A] 
    border border-white/10 
    hover:border-white/20
    focus:border-white/40 focus:ring-4 focus:ring-white/5 focus:outline-none 
    transition-all duration-200 
    text-white 
    text-sm font-normal
    shadow-sm appearance-none
    cursor-pointer
  `;

  return (
    <div className="w-full max-w-xl mx-auto pt-8 pb-24 px-4">
      <div className="text-center mb-12 space-y-6 animate-slide-up">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 shadow-glow mb-2 backdrop-blur-sm">
           <IconSparkles className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
          StarWisdom<span className="text-primary">.AI</span>
        </h1>
        <p className="text-textMuted text-lg max-w-md mx-auto font-normal leading-relaxed">
          Professional-grade astrological analysis powered by ancient wisdom and modern intelligence.
        </p>
      </div>

      <div className="glass-card rounded-2xl p-1 shadow-2xl shadow-black/50 animate-fade-in backdrop-blur-xl">
        <div className="bg-[#050505]/50 rounded-xl p-6 md:p-8 border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputGroup label="Full Name">
              <input
                type="text"
                name="fullName"
                required
                className={inputClasses}
                placeholder="e.g. Alex Smith"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="name"
              />
            </InputGroup>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputGroup label="Date of Birth">
                <input
                  type="date"
                  name="dateOfBirth"
                  required
                  className={`${inputClasses} [color-scheme:dark]`}
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </InputGroup>
              <InputGroup label="Time of Birth">
                <input
                  type="time"
                  name="timeOfBirth"
                  required
                  className={`${inputClasses} [color-scheme:dark]`}
                  value={formData.timeOfBirth}
                  onChange={handleChange}
                />
              </InputGroup>
            </div>

            <InputGroup label="Place of Birth">
              <input
                type="text"
                name="placeOfBirth"
                required
                className={inputClasses}
                placeholder="City, Country"
                value={formData.placeOfBirth}
                onChange={handleChange}
                autoComplete="address-level2"
              />
            </InputGroup>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputGroup label="Gender">
                <div className="relative">
                  <select
                    name="gender"
                    className={selectClasses}
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-textMuted">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor"><path d="M2.5 4.5L6 8L9.5 4.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </InputGroup>
              <InputGroup label="Primary Concern">
                <div className="relative">
                  <select
                    name="concern"
                    className={selectClasses}
                    value={formData.concern}
                    onChange={handleChange}
                  >
                    <option value="job">Career & Profession</option>
                    <option value="finance">Wealth & Finance</option>
                    <option value="relationship">Love & Relationships</option>
                    <option value="business">Business Growth</option>
                    <option value="health">Health & Vitality</option>
                    <option value="home">Home & Property</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-textMuted">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor"><path d="M2.5 4.5L6 8L9.5 4.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </InputGroup>
            </div>

            <div className="pt-6">
              <Button type="submit" variant="primary" fullWidth className="h-12 text-base shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]" isLoading={isLoading}>
                Generate Analysis
              </Button>
              <p className="text-[10px] text-center text-neutral-600 mt-4">
                By generating, you acknowledge the Terms of Service. 
                Calculations powered by Swiss Ephemeris.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

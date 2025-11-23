
import React, { useState, useEffect, useRef } from 'react';
import { UserInput, FullReport, TabId } from './types';
import { generateReport } from './services/astrologyService';
import { TABS } from './constants';
import { BirthDetailsForm } from './components/forms/BirthDetailsForm';
import { VedicTab } from './components/tabs/VedicTab';
import { LalKitabTab } from './components/tabs/LalKitabTab';
import { NumerologyTab } from './components/tabs/NumerologyTab';
import { WesternTab } from './components/tabs/WesternTab';
import { TarotTab } from './components/tabs/TarotTab';
import { CombinedTab } from './components/tabs/CombinedTab';
import { Button } from './components/Button';
import { IconSparkles } from './components/Icons';
import { ErrorBoundary } from './components/ErrorBoundary';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>(TabId.INPUT);
  const [isLoading, setIsLoading] = useState(false);
  const [reportData, setReportData] = useState<FullReport | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const tabListRef = useRef<HTMLDivElement>(null);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = async (input: UserInput) => {
    setIsLoading(true);
    try {
      const data = await generateReport(input);
      setReportData(data);
      setActiveTab(TabId.VEDIC);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Generation failed", error);
      // In a production app, we would use a toast notification system here
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentTabId: string) => {
    const availableTabs = TABS.filter(t => t.id !== TabId.INPUT);
    const currentIndex = availableTabs.findIndex(t => t.id === currentTabId);
    let nextTabId = null;

    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % availableTabs.length;
      nextTabId = availableTabs[nextIndex].id;
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + availableTabs.length) % availableTabs.length;
      nextTabId = availableTabs[prevIndex].id;
    }

    if (nextTabId) {
      setActiveTab(nextTabId as TabId);
      // Focus management for accessibility
      setTimeout(() => {
        const button = document.getElementById(`tab-${nextTabId}`);
        button?.focus();
      }, 0);
    }
  };

  const renderTabContent = () => {
    if (!reportData) return null;

    switch (activeTab) {
      case TabId.VEDIC:
        return <VedicTab chart={reportData.vedic.chart} analysis={reportData.vedic.analysis} />;
      case TabId.LAL_KITAB:
        return <LalKitabTab debts={reportData.lalKitab.debts} remedies={reportData.lalKitab.remedies} />;
      case TabId.NUMEROLOGY:
        return <NumerologyTab data={reportData.numerology} />;
      case TabId.WESTERN:
        return <WesternTab data={reportData.western} />;
      case TabId.TAROT:
        return <TarotTab cards={reportData.tarot} />;
      case TabId.COMBINED:
        return <CombinedTab data={reportData.combined} thakurPrasad={reportData.thakurPrasad} panchang={reportData.panchang} />;
      default:
        return null;
    }
  };

  const availableTabs = TABS.filter(t => t.id !== TabId.INPUT);

  return (
    <div className="min-h-screen flex flex-col bg-background text-text selection:bg-primary/30 selection:text-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-black/80 backdrop-blur-xl border-white/5 py-3' : 'bg-transparent border-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 shadow-inner">
              <IconSparkles className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              StarWisdom<span className="text-primary">.AI</span>
            </span>
          </div>
          
          {reportData && (
             <Button 
               variant="ghost" 
               className="text-xs h-8 hover:bg-white/10" 
               onClick={() => {
                 setReportData(null);
                 setActiveTab(TabId.INPUT);
                 window.scrollTo({ top: 0, behavior: 'smooth' });
               }}
             >
               New Reading
             </Button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {activeTab === TabId.INPUT ? (
            <BirthDetailsForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Tab Navigation */}
              <div className="mb-10 overflow-x-auto pb-2 scrollbar-hide">
                <div 
                  ref={tabListRef}
                  className="flex p-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl w-max mx-auto sticky top-20 z-40 shadow-2xl shadow-black/50"
                  role="tablist"
                  aria-label="Report Sections"
                >
                  {availableTabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        id={`tab-${tab.id}`}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`panel-${tab.id}`}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => setActiveTab(tab.id as TabId)}
                        onKeyDown={(e) => handleKeyDown(e, tab.id)}
                        className={`
                          relative px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-primary
                          ${isActive ? 'text-white shadow-lg' : 'text-neutral-400 hover:text-white'}
                        `}
                      >
                        {isActive && (
                          <div className="absolute inset-0 bg-white/10 rounded-lg border border-white/5 shadow-inner -z-10 animate-in fade-in zoom-in-95 duration-200" />
                        )}
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Content Area */}
              <div 
                id={`panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                className="min-h-[60vh] focus:outline-none"
                tabIndex={-1}
              >
                <ErrorBoundary key={activeTab}>
                  {renderTabContent()}
                </ErrorBoundary>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/30 backdrop-blur-sm py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-neutral-500 text-xs font-medium">
            © 2025 StarWisdom AI. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-[10px] text-neutral-600 uppercase tracking-wider">
            <span className="hover:text-neutral-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-neutral-400 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-neutral-400 cursor-pointer transition-colors">Data Sources: Lala Ramswaroop, Thakur Prasad</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

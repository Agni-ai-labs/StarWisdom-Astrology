
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { IconAlert } from './Icons';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 animate-in fade-in">
          <Card className="border-red-900/50 bg-red-950/10">
            <div className="flex flex-col items-center text-center space-y-4 py-8">
              <div className="p-3 rounded-full bg-red-900/20 text-red-500">
                <IconAlert className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-white">Something went wrong</h2>
              <p className="text-textMuted max-w-md">
                We encountered an error while generating this section of the report. 
                This might be due to missing astrological data for the specific date/time.
              </p>
              <div className="pt-4">
                <Button 
                  variant="secondary"
                  onClick={() => this.setState({ hasError: false })}
                >
                  Try Again
                </Button>
              </div>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <pre className="mt-4 p-4 bg-black/50 rounded text-left text-xs text-red-300 overflow-auto max-w-full">
                  {this.state.error.toString()}
                </pre>
              )}
            </div>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

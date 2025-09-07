"use client";

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="container mx-auto px-4 py-8">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>¡Oops! Algo salió mal</AlertTitle>
            <AlertDescription className="mt-2">
              Ha ocurrido un error inesperado. Por favor, intenta recargar la página.
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-2">
                  <summary>Detalles del error (desarrollo)</summary>
                  <pre className="text-xs mt-2 overflow-auto">
                    {this.state.error.message}
                  </pre>
                </details>
              )}
            </AlertDescription>
            <div className="mt-4">
              <Button onClick={this.handleRetry} variant="outline">
                Intentar de nuevo
              </Button>
            </div>
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}

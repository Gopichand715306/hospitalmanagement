import React, { Component } from 'react';

/*
  --- VIVA CONCEPT EXPLANATIONS ---
  Error Boundaries are class components that catch JavaScript runtime errors anywhere in their child component tree.
  They log those errors and display a beautiful fallback UI instead of crashing the whole browser screen.
  NOTE: As of now, Error Boundaries must be built using Class Components.
*/
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Academic reference: You can log the error details to local tracking analytics here
    console.error("ErrorBoundary caught an active runtime error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-fallback">
          <div className="fallback-card">
            <h2>Something went wrong.</h2>
            <p>Please refresh the page or head back to the home view dashboard.</p>
            <button onClick={() => window.location.reload()}>Refresh Page</button>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
// library imports
import React, { Component, ReactNode } from 'react';
import Error from './Error';

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, State> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        // You can log the error to an error reporting service here
        console.error('Error caught by ErrorBoundary:', error, info);
    }

    render() {
        if (this.state.hasError) {
            // Render fallback UI if there's an error
            return <Error />
        }

        // Render children if there's no error
        return this.props.children;
    }
}

export default ErrorBoundary;

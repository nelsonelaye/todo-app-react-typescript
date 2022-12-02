import React from "react";

type states = {
  hasError: boolean;
};
class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.log("Error", error);
    console.log("Info", info);
  }
  render(): React.ReactNode {
    // if (this.state.hasError) {
    return <h1>ErrorBoundary</h1>;
    // }
  }
}

export default ErrorBoundary;

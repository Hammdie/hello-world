import * as React from 'react';

interface HelloWorldProps {
  color: string;
}
export class HelloWorld extends React.Component<HelloWorldProps> {
  constructor(props: HelloWorldProps) {
    super(props);
  }
  render() {
    return (
      <div style={{ color: this.props.color }}>
        Hello World from TypeScript REACT Component!
      </div>
    );
  }
}

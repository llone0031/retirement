import React from 'react';
import Form from './form';

class ResultTax extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };

    }

    render() {
      return (
        <div className="result">
            Tax Amount: {this.props.taxAmount}           
        </div>
      );
    }
  }

  export default ResultTax;
import React from 'react';
import Form from './form';

class Result extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <div className="result">
            <div>Total Pension: {this.props.totalPention}</div>
            <div >Future Value Of Current Savings: {this.props.futureValueofCurrentSaving}</div>
            <div style={{backgroundColor : 'white', marginTop : '50px', textAlign: 'center'}}>
            {this.props.message === "success" && <p className="text-success">Current saving is sufficient to cover desired pension.</p>}
            {this.props.message === "fail" && <p className="text-warning">Current saving is not sufficient to meetup goal. you need to contribute {this.props.requiredContriAmount} annually to achieve the goal</p>}
            </div>
        </div>
      );
    }
  }

  export default Result;
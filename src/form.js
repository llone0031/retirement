import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        submited : false,
        desiredAnnualIncome : 10000,
        retireAge : 65,
        retireLength: 20,
        currentAge: 30,
        retireRR: 0.10,
        pentionFundRR: 0.08,
        annualContriAmount: 1000,
        requiredContriAmount: 0,
        contriLength: 0,
        currentSaving: 5000,
        futureValueofCurrentSaving: 0,
        totalPention: 0,
        rate1: 1,
        rate2: 1
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.calculateResult = this.calculateResult.bind(this);
      this.calculateTotalPention = this.calculateTotalPention.bind(this);
      this.calculateFutureValueOfCurrentSaving = this.calculateFutureValueOfCurrentSaving.bind(this);
      this.calculateContriAmount = this.calculateContriAmount.bind(this);
      this.props.getResult.bind(this);
    }

    calculateResult(e){
        this.setState({submited:true});
        if (!this.validInputs()){
            alert("Information Required")
            return;
          }
        this.calculateTotalPention();
      }
    
    calculateTotalPention(){
      var total = 0;
      var rate1 = 1;
      for (let y = 0; y < this.state.retireLength; y++){
        var pv = this.state.desiredAnnualIncome / this.state.rate1;
        total = total + pv;
        rate1 = rate1 * (1 + parseFloat(this.state.retireRR));
      }
      this.setState({totalPention: total}, this.calculateFutureValueOfCurrentSaving());
    }

    calculateFutureValueOfCurrentSaving(){
      var yearToRetire = this.state.retireAge - this.state.currentAge;
      var currentRate2= 1;
      for (let i = 0; i < yearToRetire; i++){
        currentRate2 = currentRate2*(1 + parseFloat(this.state.pentionFundRR)
        );
      }
      this.setState({futureValueofCurrentSaving: this.state.currentSaving*currentRate2, rate2: currentRate2}, this.calculateContriAmount);
    }

    calculateContriAmount(){
      var a = (this.state.rate2 - 1) * (1 + this.state.pentionFundRR);
      var b = this.state.totalPention - this.state.futureValueofCurrentSaving;
      this.setState({requiredContriAmount: b*this.state.pentionFundRR/a}, ()=>{
        var result = {
          totalPention: this.state.totalPention,
          futureValueofCurrentSaving: this.state.futureValueofCurrentSaving,
          requiredContriAmount: this.state.requiredContriAmount
        };
        this.props.getResult(result);
      });
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({submited:false})
      this.setState({
        [name]: value
      });
    }

    validInputs(){
      if (this.state.annualContriAmount 
          && this.state.retireAge
          && this.state.retireLength
          && this.state.currentAge
          && this.state.retireRR
          && this.state.pentionFundRR
          && this.state.currentSaving)
          return true;
        return false;
    }
  
    render() {
      return (
        <div>
          <form className="container">
            <div className="form-group row">
                <label htmlFor="desiredAnnualIncome" className="col-form-label"> Desired Annual Income </label>
                <input name="desiredAnnualIncome" id="desiredAnnualIncome" type="number" value={this.state.desiredAnnualIncome}
                    onChange={this.handleInputChange}
                    className={'form-control'+ (!this.state.desiredAnnualIncome && this.state.submited ? ' border border-danger':'')}/>
            </div>
            <div className="form-group row">
                <label htmlFor="retireAge" className="col-form-label"> Retire Age </label>
                <input name="retireAge" id="retireAge" type="number" value={this.state.retireAge}
                    onChange={this.handleInputChange} 
                    className={'form-control'+ (!this.state.retireAge && this.state.submited ? ' border border-danger':'')}/>
            </div>
            <div className="form-group row">
                <label htmlFor="retireLength" className="col-form-label"> Retire Length </label>
                <input name="retireLength" id="retireLength" type="number" value={this.state.retireLength}
                    onChange={this.handleInputChange} 
                    className={'form-control'+ (!this.state.retireLength && this.state.submited? ' border border-danger':'')}/>
            </div>
            <div className="form-group row">
                <label htmlFor="currentAge" className="col-form-label"> current age </label>
                <input name="currentAge" id="currentAge" type="number" value={this.state.currentAge}
                onChange={this.handleInputChange} 
                className={'form-control'+ (!this.state.currentAge && this.state.submited? ' border border-danger':'')}/>
            </div>
            <div className="form-group row">
                <label htmlFor="retireRR" className="col-form-label"> Retire RR </label>
                <input name="retireRR" id="retireRR" type="number" value={this.state.retireRR}
                    onChange={this.handleInputChange} 
                    className={'form-control'+ (!this.state.retireRR && this.state.submited? ' border border-danger':'')}/>
            </div>
            <div className="form-group row">
                <label htmlFor="pentionFundRR" className="col-form-label"> Pension RR </label>
                <input name="pentionFundRR" id="pentionFundRR" type="number" value={this.state.pentionFundRR}
                    onChange={this.handleInputChange} 
                    className={'form-control'+ (!this.state.pentionFundRR && this.state.submited? ' border border-danger':'')}/>
            </div>
            <div className="form-group row">
                <label htmlFor="currentSaving" className="col-form-label"> Current Saving </label>
                <input name="currentSaving" id="currentSaving" type="number" className="form-control" value={this.state.currentSaving}
                    onChange={this.handleInputChange} 
                    className={'form-control'+ (!this.state.currentSaving && this.state.submited? ' border border-danger':'')}/>
            </div>
            <button className="btn btn-secondary btn-lg" style={{"marginTop": 20}} type="button" onClick={this.calculateResult}>Submit</button>
        </form>
    </div>       
      );
    }
  }

  export default Form;
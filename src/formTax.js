import React from 'react';

class FormTax extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        taxStatus : 1,
        taxableIncome : 10000
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.calculateResult = this.calculateResult.bind(this);
      this.taxCalculate1 = this.taxCalculate1.bind(this);
      this.taxCalculate2 = this.taxCalculate2.bind(this);
      this.taxCalculate3 = this.taxCalculate3.bind(this);
    }

    calculateResult(e){
        if (this.state.taxStatus == 1){
          this.taxCalculate1();
        } else if (this.state.taxStatus == 2){
          this.taxCalculate2();
        } else {
          this.taxCalculate3();
        }
    }

    taxCalculate1() {
      var bracketLimit1=9950, bracketLimit2= 40525, bracketLimit3 = 86375, bracketLimit4 = 164925, bracketLimit5 = 209425, bracketLimit6 = 523600;
      var taxAmount = 0
      var taxableIncome = this.state.taxableIncome;
      if (taxableIncome <= bracketLimit1)
          {taxAmount = taxableIncome * 0.1}
      else if (taxableIncome <= bracketLimit2)
          {taxAmount = bracketLimit1*0.1 +(taxableIncome -bracketLimit1)*0.12}
      else if (taxableIncome <= bracketLimit3)
          {taxAmount = bracketLimit1*0.1 + (bracketLimit2 - bracketLimit1)*0.12 + (taxableIncome -bracketLimit2)*0.22}
      else if (taxableIncome <= bracketLimit4)
          {taxAmount = bracketLimit1*0.1 + (bracketLimit2 - bracketLimit1)*0.12 + (bracketLimit3 -bracketLimit2)*0.22 + ( taxableIncome - bracketLimit3)*0.24}
      else if (taxableIncome <= bracketLimit5)
          {taxAmount = bracketLimit1*0.1 + (bracketLimit2- bracketLimit1)*0.12 + (bracketLimit3 -bracketLimit2)*0.22 + (bracketLimit4 - bracketLimit3)*0.24 + ( taxableIncome - bracketLimit4)*0.32}
      else if (taxableIncome <= bracketLimit6)
          {taxAmount = bracketLimit1*0.1 + (bracketLimit2- bracketLimit1)*0.12 + (bracketLimit3 -bracketLimit2)*0.22 + (bracketLimit4 - bracketLimit3)*0.24 + (bracketLimit5 - bracketLimit4)*0.32 + ( taxableIncome - bracketLimit5)*0.35}
      else  
          {taxAmount = bracketLimit1*0.1 + (bracketLimit2- bracketLimit1)*0.12 + (bracketLimit3 -bracketLimit2)*0.22 + (bracketLimit4 - bracketLimit3)*0.24 + (bracketLimit5 -bracketLimit4)*0.32 + (bracketLimit6 -bracketLimit5)*0.35 + ( taxableIncome - bracketLimit5)*0.37}
      this.props.getResultinterest(taxAmount);
    }

    taxCalculate2() {
      var bracketLimit1=19900;
      var bracketLimit2=81050;
      var bracketLimit3=172750;
      var bracketLimit4=329850;
      var bracketLimit5=418850;
      var bracketLimit6=628300;
      var taxAmount = 0;
      var taxableIncome = this.state.taxableIncome;

      if (taxableIncome <= bracketLimit1)
          {taxAmount = taxableIncome * 0.1}
      else if (taxableIncome <= bracketLimit2)
          {taxAmount = bracketLimit1*0.1+(taxableIncome -bracketLimit1)*0.12}
      else if (taxableIncome <= bracketLimit3)
          {taxAmount = bracketLimit1*0.1+ (bracketLimit2- bracketLimit1)*0.12+ (taxableIncome -bracketLimit2)*0.22}
      else if (taxableIncome <= bracketLimit4)
          {taxAmount = bracketLimit1*0.1+ (bracketLimit2- bracketLimit1)*0.12+ (bracketLimit3 -bracketLimit2)*0.22+( taxableIncome -bracketLimit3)*0.24}
      else if (taxableIncome <= bracketLimit5)
          {taxAmount = bracketLimit1*0.1+ (bracketLimit2- bracketLimit1)*0.12+ (bracketLimit3 -bracketLimit2)*0.22+(bracketLimit4 -bracketLimit3)*0.24+( taxableIncome - bracketLimit4)*0.32}
      else if (taxableIncome <= bracketLimit6)
          {taxAmount = bracketLimit1*0.1+ (bracketLimit2- bracketLimit1)*0.12+ (bracketLimit3 -bracketLimit2)*0.22+(bracketLimit4 -bracketLimit3)*0.24+(bracketLimit5 -bracketLimit4)*0.32+( taxableIncome - bracketLimit5)*0.32}
      else  
          {taxAmount = bracketLimit1*10%+ (bracketLimit2- bracketLimit1)*0.12+ (bracketLimit3 -bracketLimit2)*0.22+(bracketLimit4 -bracketLimit3)*0.24+(bracketLimit5 -bracketLimit4)*0.32+(bracketLimit6 -bracketLimit5)*35%+( taxableIncome - bracketLimit5)*0.32}
        this.props.getResultinterest(taxAmount);
      }

      taxCalculate3() {
        var bracketLimit1=14200;
        var bracketLimit2=54200;
        var bracketLimit3=86350;
        var bracketLimit4=164900;
        var bracketLimit5=209400;
        var bracketLimit6=523600;
        var taxAmount =0;
        var taxableIncome = this.state.taxableIncome;

        if (taxableIncome <= bracketLimit1)
                {taxAmount = taxableIncome * 0.1}
        else if (taxableIncome <= bracketLimit2)
                {taxAmount = bracketLimit1*0.1+(taxableIncome -bracketLimit1)*0.12}
        else if (taxableIncome <= bracketLimit3)
                {taxAmount = bracketLimit1*0.1+ (bracketLimit2- bracketLimit1)*0.12+ (taxableIncome -bracketLimit2)*0.22}
        else if (taxableIncome <= bracketLimit4)
              {taxAmount = bracketLimit1*0.1+ (bracketLimit2- bracketLimit1)*0.12+ (bracketLimit3 -bracketLimit2)*0.22+( taxableIncome -bracketLimit3)*0.24}
        else if (taxableIncome <= bracketLimit5)
              {taxAmount = bracketLimit1*0.1+ (bracketLimit2- bracketLimit1)*0.12+ (bracketLimit3 -bracketLimit2)*0.22+(bracketLimit4 -bracketLimit3)*0.24+( taxableIncome - bracketLimit4)*0.24}
        else if (taxableIncome <= bracketLimit6)
              {taxAmount = bracketLimit1*0.1+ (bracketLimit2- bracketLimit1)*0.12+ (bracketLimit3 -bracketLimit2)*0.22+(bracketLimit4 -bracketLimit3)*0.24+(bracketLimit5 -bracketLimit4)*0.24+( taxableIncome - bracketLimit5)*0.35}
        else  {taxAmount = bracketLimit1*0.1+ (bracketLimit2- bracketLimit1)*0.12+ (bracketLimit3 -bracketLimit2)*0.22+(bracketLimit4 -bracketLimit3)*0.24+(bracketLimit5 -bracketLimit4)*0.24+(bracketLimit6 -bracketLimit5)*0.35+( taxableIncome - bracketLimit5)*0.35}
        this.props.getResultinterest(taxAmount);
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
  
    render() {
      return (
        <div>
          <form className="container">
            <div className="form-group row">
            <label htmlFor="taxStatus" className="col-form-label"> Tax Status </label>
            <select 
                name="taxStatus" id="taxStatus"
                value={this.state.taxStatus} 
                onChange={this.handleInputChange}
                className="form-select"
              >
              <option value="1">Unmarried individuals</option>
                <option value="2">Married Individuals</option>
                <option value="3">Heads of households</option>
              </select>
            </div>
            <div className="form-group row">
                <label htmlFor="taxableIncome" className="col-form-label"> Taxable Income </label>
                <input name="taxableIncome" id="taxableIncome" type="number" value={this.state.taxableIncome}
                    onChange={this.handleInputChange}  className='form-control'/>
            </div>
            <button className="btn btn-secondary btn-lg" style={{"marginTop": 20}} type="button" onClick={this.calculateResult}>Submit</button>
        </form>
    </div>       
      );
    }
  }

  export default FormTax;
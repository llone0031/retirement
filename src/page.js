import React from 'react';
import Form from './form';
import FormTax from './formTax'
import './App.css';
import Result from './result';
import ResultTax from './resultTax';

class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showPage1 : true,
        showPage2 : false,
        totalPention: 0,
        futureValueofCurrentSaving: 0,
        requiredContriAmount: 0,
        message : "inital",
        taxAmount: 0 
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.getResult = this.getResult.bind(this);
      this.getResultinterest = this.getResultinterest.bind(this);
      this.showMessage = this.showMessage.bind(this);
      this.showRetire = this.showRetire.bind(this);
      this.showInterest = this.showInterest.bind(this);
    }

    getResult(result) {
        this.setState({totalPention: Math.round(result.totalPention*100)/100, futureValueofCurrentSaving: Math.round(result.futureValueofCurrentSaving*100)/100, requiredContriAmount: Math.round(result.requiredContriAmount*100)/100}, this.showMessage);
    }

    getResultinterest(result){
        this.setState({taxAmount: result});
    }

    showMessage() {
      if (this.state.futureValueofCurrentSaving >= this.state.totalPention && this.state.totalPention != 0) {
        this.setState({message : "success"});
      }
      if (this.state.futureValueofCurrentSaving < this.state.totalPention && this.state.totalPention != 0) {
        this.setState({message : "fail"});
      }
    }

    showRetire(e){
      e.preventDefault();
      this.setState({showPage1: true, showPage2: false});
    }

    showInterest(e){
      e.preventDefault();
      this.setState({showPage1: false, showPage2: true});
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <div className="row">
          <div style={{display:"flex",marginTop: "10px"}}>
            <button onClick={this.showRetire} className="btn btn-primary">Saving for Retirement</button>
            <button style={{marginLeft:'20px'}} onClick={this.showInterest} className="btn btn-secondary">Income tax</button>
          </div>
            {this.state.showPage1 && <div className="col-4" style={{marginTop : '50px'}}>
                <Form getResult = {this.getResult}></Form>
            </div>}
            {this.state.showPage1 &&<div className="col-8">
                <Result
                key = {this.state.totalPention}
                totalPention={this.state.totalPention}
                futureValueofCurrentSaving={this.state.futureValueofCurrentSaving}
                requiredContriAmount={this.state.requiredContriAmount} 
                message={this.state.message}></Result>
            </div>}
            {this.state.showPage2 && <div className="col-4" style={{marginTop : '200px'}}>
                <FormTax getResultinterest = {this.getResultinterest}></FormTax>
            </div>}
            {this.state.showPage2 &&<div className="col-8">
                <ResultTax
                key = {this.state.taxAmount}
                taxAmount={this.state.taxAmount }>
                </ResultTax>
            </div>}
        </div>
      );
    }
  } 

  export default Page;
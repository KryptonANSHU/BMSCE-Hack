import React, { Component } from "react";
import "./bmi.css";
import Range from "./Range";
import Output from "./Output";
import Header from "./Header";
import DietList from "./DietList";


class FinalDiet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 175,
      weight: 73,
      bmi: 22.49,
      bmiClass: "Normal",
      bmiArr: []
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("arr"));
    if (data) this.setState({ bmiArr: data });
  }

  heightChange = (height) => {
    this.setState({ height: height }, this.setBmi);
  };

  weightChange = (weight) => {
    this.setState({ weight: weight }, this.setBmi);
  };

  setBmi = () => {
    let bmi = (
      (this.state.weight / this.state.height / this.state.height) *
      10000
    ).toFixed(2);
    this.setState({ bmi: bmi, bmiClass: this.getBmiClass(bmi) });
  };

  getBmiClass = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "Normal";
    if (bmi >= 25 && bmi <= 29.9) return "Overweight";
    if (bmi >= 30) return "Obese";
  };

  saveBmi = (e) => {
    e.preventDefault();
    const obj = {
      weight: this.state.weight,
      height: this.state.height,
      bmi: this.state.bmi
    };
    this.state.bmiArr.push(obj);
    localStorage.setItem("arr", JSON.stringify(this.state.bmiArr));
  };

  render() {
    return (
   
        <div className="App">
          <Header />
          <h1>BMI Calculator</h1>
         
        
              {/* <form>
                <div>
                  <label>Height</label>
                  <Range
                    value={this.state.height}
                    onChange={this.heightChange}
                  />
                </div>
                <div>
                  <label>Weight</label>
                  <Range
                    value={this.state.weight}
                    onChange={this.weightChange}
                  />
                </div>
                <Output data={this.state} />
                <button onClick={this.saveBmi}> Save </button>
              </form> */}

              
           <DietList />
        
         
        </div>
      
    );
  }
}

export default FinalDiet;
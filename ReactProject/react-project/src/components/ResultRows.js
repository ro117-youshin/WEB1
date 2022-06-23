import React, { Component } from "react";
import "./ResultRows.css";
import bar from "../assets/redbar.png"

class ResultRows extends Component {
    state = { 
        percentage: 0
    }
    render() { 
        const { id, name, numberofvotes, rateofvotes } = this.props;
        return ( 
            <div className="result-row">
                <p className="name">
                    {id}{name}
                </p>
                <div className="votes">
                    <img src={bar} width={rateofvotes*10} alt="bar"/> {numberofvotes} ({rateofvotes}%)
                </div>
            </div>
         );
    }
}
 
export default ResultRows;
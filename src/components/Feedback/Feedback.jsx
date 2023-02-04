import React, { Component } from "react";
import PropTypes from "prop-types";

class Feedback extends Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
        // initialTotal: 0,
    };
    static propTypes = {
        initialGood: PropTypes.number.isRequired,
        initialNeutral: PropTypes.number.isRequired,
        initialBad: PropTypes.number.isRequired,
    }
    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
    };
    handleIncrementGood = () =>{    
        this.setState(prevState => ({
            good: prevState.good + 1,  
        }))    
    };
    handleIncrementNeutral = () =>{        
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,   
        }))        
    };
    handleIncrementBad = () =>{        
        this.setState(prevState => ({
            bad: prevState.bad + 1,   
        }))    
    };
    // countTotalFeedback = () => {
    //     let total = 0;
    //     total = this.state.good
    // }
    // countPositiveFeedbackPercentage()
    
    render(){
        return(
            <section>
                <h1>Please leave feedback</h1>
                <div>
                    <button type="button" onClick={this.handleIncrementGood}>Good</button>
                    <button type="button" onClick={this.handleIncrementNeutral}>Neutral</button>
                    <button type="button" onClick={this.handleIncrementBad}>Bad</button>
                </div>
                <h2>Statistics</h2>
                <ul>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
                    <li>Total: </li>
                    <li>Positive feedback: %</li>
                </ul>
            </section>
        )
    }
};

export default Feedback;
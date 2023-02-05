import React from "react";
import PropTypes from "prop-types";


const FeedbackOptions = ({title,onIncrementGood, onIncrementNeutral, onIncrementBad}) => (
    <>
    <div>
        <button type="button" onClick={onIncrementGood}>Good</button>
        <button type="button" onClick={onIncrementNeutral}>Neutral</button>
        <button type="button" onClick={onIncrementBad}>Bad</button>
    </div>
    <h2>{title}s</h2>
    </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onIncrementGood: PropTypes.func.isRequired,
    onIncrementNeutral: PropTypes.func.isRequired,
    onIncrementBad: PropTypes.func.isRequired,
};
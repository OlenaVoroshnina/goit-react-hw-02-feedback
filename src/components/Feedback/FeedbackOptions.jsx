import React from "react";

import PropTypes from "prop-types";
import {Button} from './Feedback.styled'


const FeedbackOptions = ({title,onIncrementGood, onIncrementNeutral, onIncrementBad}) => (
    <>
        <div>
            <Button type="button" onClick={onIncrementGood}>Good</Button>
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
import React from 'react';

const State = () => {
    return (
        <div>
            <h1>How state works?</h1>
            <p>Virtual Dom যখব তৈরি করা হয় তখন react এ Real dom এর সাথে সামদাশ্যপৃণ করে।যখন আবার virtual dom state change করা হয় সেই হিসাবে real dom সেই state change করে Render করে।  অর্থাৎ virtual dom change করলে Real dom এর সাথে  compair করা হয়।</p>
        </div>
    );
};

export default State;
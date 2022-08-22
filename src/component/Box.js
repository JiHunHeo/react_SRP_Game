import React from 'react';

const Box = (props) => {
    let result;
    let def;
    if (props.title === 'Computer' && props.result !== 'Tie' && props.result !== '') {
        result = props.result === 'Win' ? 'Lose' : 'Win';
    } else {
        result = props.result;
    }
    if (props.title === 'Computer' || props.title === 'You'){
        def = 'https://www.hooni.net/xe/files/attach/images/203/452/088/fd317da58bf81b38eb29c03842ddcf1b.jpg';
    }
    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <img className="item-img" src={(props.item && props.item.img) || def} alt="가위바위보"></img>
            <h2>{result}</h2>
        </div>
    );
};

export default Box;

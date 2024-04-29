import React from 'react';

const Counter : React.FC = () =>{
    const counter = 0;
    return (
        <div>
            <h2>{counter}</h2>
            <div>
                <button>더하기</button>
                <button>필기</button>
            </div>
        </div>
    );
}

export default Counter;
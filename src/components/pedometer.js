import React, { useRef, useState, useEffect } from 'react';
import Plot from './plot'

const Pedometer = (props) => {

    const [steps, setSteps] = useState();
    useEffect(() => {
        let temp = [];
        for (let i = 0; i < 7; i++) {
            temp.push(Math.ceil(Math.random() * 500));
        }
        console.log("STEPS: " + temp)
        setSteps(temp);
    }, []);

    if (steps) {
        return (
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <h1 className="text-center">{props.match.params.name}</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center" >
                        <Plot steps={steps} />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    }
}

export default Pedometer;
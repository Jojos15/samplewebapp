import React, { useRef, useState, useEffect } from 'react';

const Plot = (props) => {
    const [isReady, setIsReady] = useState();
    const steps = props.steps;
    const plotRef = useRef(null);
    const tempNames = ["", "item1", "item2", "item3", "item4", "item5", "item6", "item7"];

    useEffect(() => {
        setIsReady(1);
    }, []);

    useEffect(() => {
        if (plotRef.current.clientHeight) {
            setIsReady(2);
        }
    }, [plotRef]);

    const getDistance = (value) => {
        if (isReady === 2) {
            let distance = Math.ceil((value * plotRef.current.clientHeight) / Math.max(...steps));
            return distance;
        }
    }

    const getWidth = () => {
        if (isReady === 2) {
            return Math.ceil(plotRef.current.clientWidth / 15);
        }
    }

    return (
        <div>
            <div className="row justify-content-around" ref={plotRef}>
                <div className="col-1 align-self-center pl-1 pr-1 w-100">
                    <h3>Steps</h3>
                </div>
                {
                    steps.map((item, index) => {
                        return (
                            <div className="col-1 align-self-end pl-1 pr-1 w-100 animate__animated animate__fadeInUp" key={index}>
                                <h5 className="text-center mb-1">{item}</h5>
                                <object className="plotBars" width={getWidth()} height={getDistance(item)}></object>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row justify-content-around">
                {
                    tempNames.map((item, index) => {
                        return (
                            <div className="col-1" key={index}>
                                <h5 className="text-center">{item}</h5>
                            </div>
                        );
                    })
                }
            </div>
            <div className="row">
                <div className="col-1">

                </div>
                <div className="col-11">
                    <h3 className="text-center">Day of the Week</h3>
                </div>
            </div>
        </div>
    );

}

export default Plot;
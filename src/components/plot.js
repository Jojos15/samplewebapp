import React, { useRef, useState, useEffect } from 'react';

const Plot = (props) => {
    const [isReady, setIsReady] = useState();
    const steps = props.steps;
    const plotRef = useRef(null);
    const dayNames = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    useEffect(() => {
        setIsReady(1);
        steps = getStepsToDisplay();
    }, []);

    useEffect(() => {
        if (plotRef.current.clientHeight) {
            setIsReady(2);
        }
    }, [plotRef]);

    const getStepsToDisplay = () => {
        if (steps.length == 7) {
            return steps;
        }
        else {
            let tempArr = [...steps];
            tempArr.shift();
            for (let i = 0; i < 7 - tempArr; i++) {
                tempArr.push({ data: 0, date: 0 });
            }
            return tempArr;
        }
    };

    const getDistance = (value) => {
        if (isReady === 2) {
            let tempDataOnlyArr = [];
            for (let i = 0; i < steps.length; i++) {
                tempDataOnlyArr.push(steps[i].data);
            }
            let distance = Math.ceil((value * (plotRef.current.clientHeight - 38)) / Math.max(...tempDataOnlyArr));
            return distance;
        }
    }

    const getWidth = () => {
        if (isReady === 2) {
            return Math.ceil(plotRef.current.clientWidth / 13);
        }
    }

    return (
        <div className="col-md-12">
            <div className="row justify-content-around " ref={plotRef} >
                <div className="col-1 align-self-center">
                    <h5 className="text-left text-warning">Steps</h5>
                </div>
                {
                    steps.map((item, index) => {
                        return (
                            <div className="col-1 align-self-end w-100 animate__animated animate__fadeInUp" key={index}>
                                <h5 className="text-center">{item.data}</h5>
                                <object className="plotBars" width={getWidth()} height={getDistance(item.data)}></object>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row justify-content-around">
                {
                    dayNames.map((item, index) => {
                        return (
                            <div className="col-1" key={index}>
                                <h6 className="text-sm-left text-md-center">{item}</h6>
                            </div>
                        );
                    })
                }
            </div>
            <div className="row-xs">
                <div className="col-12">
                    <h5 className="text-center text-info">Day of the Week</h5>
                </div>
            </div>
        </div>
    );

}

export default Plot;
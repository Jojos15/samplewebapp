import React, { useRef, useState, useEffect } from 'react';

const Plot = (props) => {
    const [isReady, setIsReady] = useState();
    const steps = props.stepsArr
    const plotRef = useRef(null);
    const dayNames = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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
            let tempDataOnlyArr = [];
            for (let i = 0; i < steps.length; i++) {
                tempDataOnlyArr.push(steps[i].data);
            }
            if (Math.max(...tempDataOnlyArr) === 0) {
                return 0;
            }
            let distance = Math.ceil((value * (plotRef.current.clientHeight - 38)) / Math.max(...tempDataOnlyArr));
            return distance;
        }
    }

    const getWidth = () => {
        if (isReady === 2) {
            console.log(window.innerWidth);
            return Math.floor((1.0602 * Math.pow(10, -10) * Math.pow(window.innerWidth, 3)) - (3.18544 * Math.pow(10, -7) * Math.pow(window.innerWidth, 2)) + (0.0836323 * window.innerWidth) - 0.0897574);
        }
    }
    return (
        <div className="col-md-12">
            <div className="row justify-content-around danger-height-small" ref={plotRef} >
                <div className="col-1 align-self-center">
                    <h5 className="text-left text-info">Steps</h5>
                </div>
                {
                    steps.map((item, index) => {
                        return (
                            <div className="col-1 align-self-end w-100 mx-0 px-0 animate__animated animate__fadeInUp vertical-align" key={index}>
                                <h5 className="text-center">{item.data}</h5>
                                <img className="plotBars" width={getWidth()} height={getDistance(item.data)}></img>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row justify-content-around">
                {
                    dayNames.map((item, index) => {
                        return (
                            <div className="col-1 mx-0 px-1" key={index}>
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
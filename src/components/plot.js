import React, { useRef, useState, useEffect } from 'react';

const Plot = (props) => {
    const [isReady, setIsReady] = useState();
    const steps = props.steps;
    const plotRef = useRef(null);

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
            console.log(distance);
            return distance;
        }
    }

    const getWidth = () => {
        if (isReady === 2) {
            console.log(Math.ceil(plotRef.current.clientWidth / 12));
            return Math.ceil(plotRef.current.clientWidth / 12);
        }
    }

    return (
        <div className="row justify-content-around" ref={plotRef}>
            <div className="col-1 align-self-end pl-1 pr-1">
                <object className="plotBars" height={getDistance(steps[0])} width={getWidth()}></object>
            </div>
            <div className="col-1 align-self-end pl-1 pr-1">
                <object className="plotBars" height={getDistance(steps[1])} width={getWidth()}></object>
            </div>
            <div className="col-1 align-self-end pl-1 pr-1">
                <object className="plotBars" height={getDistance(steps[2])} width={getWidth()}></object>
            </div>
            <div className="col-1 align-self-end pl-1 pr-1">
                <object className="plotBars" height={getDistance(steps[3])} width={getWidth()}></object>
            </div>
            <div className="col-1 align-self-end pl-1 pr-1">
                <object className="plotBars" height={getDistance(steps[4])} width={getWidth()}></object>
            </div>
            <div className="col-1 align-self-end pl-1 pr-1">
                <object className="plotBars" height={getDistance(steps[5])} width={getWidth()}></object>
            </div>
            <div className="col-1 align-self-end pl-1 pr-1">
                <object className="plotBars" height={getDistance(steps[6])} width={getWidth()}></object>
            </div>
            <div className="col-1 align-self-end pl-1 pr-1">
                <object className="plotBars" height={getDistance(steps[7])} width={getWidth()}></object>
            </div>
        </div>
    );

}

export default Plot;
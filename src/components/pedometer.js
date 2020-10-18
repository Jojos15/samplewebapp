import React, { useRef, useState, useEffect } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Pedometer = (props) => {

    const data = [
        {
            name: 'Page A', uv: 4000
        },
        {
            name: 'Page B', uv: 3000
        },
        {
            name: 'Page C', uv: 2000
        },
        {
            name: 'Page D', uv: 2780
        },
        {
            name: 'Page E', uv: 1890
        },
        {
            name: 'Page F', uv: 2390
        },
        {
            name: 'Page G', uv: 3490
        },
    ];

    return (
        <div className="row">
            <div className="row parent-div justify-content-center">
                <div className="col-12">
                    <h1 className="text-center">{props.match.params.name}</h1>
                </div>
            </div>
            <div className="row parent-div h-25 justify-content-center">
                <div className="col-5">
                    <BarChart
                        data={data}
                        width={500}
                        height={500}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Legend />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
}

export default Pedometer;
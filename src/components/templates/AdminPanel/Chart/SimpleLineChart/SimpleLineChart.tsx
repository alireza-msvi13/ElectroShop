"use client";
import React from "react";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, PieChart, Pie, Sector,
} from 'recharts';
const data = [
    {
        name: 'دی',
        'بازدید': 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'بهمن',
        'بازدید': 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'اسفند',
        'بازدید': 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'فروردین',
        'بازدید': 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'اردیبهشت',
        'بازدید': 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'خرداد',
        'بازدید': 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'تیر',
        'بازدید': 3490,
        pv: 4300,
        amt: 2100,
    },
];

function SimpleLineChart() {
    return (

        <ResponsiveContainer width={'100%'} height={300}>
            <AreaChart
                data={data}
                syncId="anyId"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="بازدید" stroke="#272729" fill="#7B1FA2" />
            </AreaChart>
        </ResponsiveContainer>

    );
}

export default SimpleLineChart;

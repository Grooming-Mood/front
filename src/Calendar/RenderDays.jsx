import React, { useState } from "react";


export const RenderDays = () => {
    const days = [];
    const date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    for(let i = 0; i < 7; i++) {
        days.push(
            <div className="col" key={i}>
                {date[i]}
            </div>
        );
    }

    return <div className="days row">{days}</div>;
};


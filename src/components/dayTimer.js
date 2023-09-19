import { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function DayTimer(props){
    const [diff, setDiff] = useState(dayjs().diff(dayjs().startOf('day')));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDiff((dayjs().diff(dayjs().startOf('day'),'s'))*100/86400);
        },500)
        return () => 
            clearInterval(intervalId);
        ;
    },[]);

    return(
        <div style={{width: `${Math.round((diff + Number.EPSILON) * 100) / 100}%`}} className={`flex py-[42px] h-full rounded-[30px] items-center ${props.darkmode?'bg-[#181818]':'bg-[#fefffe]'}`}>
                    <p className="absolute text-center w-[100%]">The day is<br/><span className="text-2xl"> {Math.round((diff + Number.EPSILON) * 100) / 100}% </span><br/> completed</p>
        </div>
    );
}
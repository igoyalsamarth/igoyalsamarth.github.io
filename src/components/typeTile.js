import axios from "axios";
import samiCooking from '../assets/samiCooking.png'
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import monkeyType from '../assets/monkeytype.png'
import typingSpeedBackground_b from '../assets/typingSpeedBackground_b.png' 

dayjs.extend(relativeTime)

export default function TypeTile(props){
    const baseURL = 'https://api.monkeytype.com';
    const token = `${process.env.REACT_APP_MONKEYTYPE_KEY}`;
    const [recent,setRecent] = useState({});
    const [highest, setHighest] = useState({});
    const [loading,setLoading] = useState(true);

    const config = {
        headers: {'Authorization': 'ApeKey ' + token},
        params: {
          'mode': 'time',
          'mode2': '60'
        },
    }
    
    const getData = async () => {
        try {
            await axios.all([
            axios.get(`${baseURL}/results/last`,config),
            axios.get(`${baseURL}/users/personalBests`,config)
    ]).then(axios.spread((recentResponse, highestResponse) => {
            setRecent(
                recentResponse.data.data
            );
            setHighest(
                highestResponse.data.data[0]
            );
    })).then(() => setLoading(false))
    } 
    catch(e){
        console.log(e);
    }
}

    useEffect(() => {
        getData();
    },[]);
    return(
        <div className={`flex flex-col justify-end px-[42px] py-[42px] tab:py-[21px] h-full w-full items-start gap-[50px] tab:gap-[20px] ${props.darkmode?'':'invert'}`} style={{background:`url(${typingSpeedBackground_b})`}}>
            <img src={monkeyType} alt="Monkeytype Logo" className={`absolute w-[50px] top-[21px] left-[42px] ${props.darkmode?'':'invert'}`}></img>
            {loading? <img src={samiCooking} className={`w-[200px] ${props.darkmode?'':'invert'}`} alt="Sami Cooking"></img> :
            <>
            <div className={`flex flex-col tab:flex-row ${props.darkmode?'':'invert'}`}>
             <p>Latest Attempt:&nbsp; </p>
             <p> {recent.wpm} WPM, {dayjs(recent.timestamp).fromNow()}</p>
             </div>
             <div className={`flex flex-col tab:flex-row ${props.darkmode?'':'invert'}`}>
             <p>Best Attempt:&nbsp; </p> 
             <p> {highest.wpm} WPM, {dayjs(highest.timestamp).fromNow()}</p> 
             </div>
             </>
            }
           </div>
    );
}
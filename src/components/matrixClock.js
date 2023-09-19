import { useEffect, useState } from "react";
import '../assets/matrixClock.scss'

export default function MatrixClock(props){

    const [time, setTime] = useState(new Date());
    const blocks = [...Array(15).keys()]

    const theMatrix = blocks.map((index) => {
        return(
            <div key={index} className={`${index}`}></div>
        );
    })
    let s = time.getSeconds();
    let m = time.getMinutes();
    let h = time.getHours();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        },500)
        return () => 
            clearInterval(intervalId);
        ;
    },[]);

    if(time.getSeconds() < 10){
        s = '0' +  s;
    }
    if(time.getMinutes() < 10){
        m = '0' +  m;
    }
    if(time.getHours() < 10){
        h = '0' +  h;
    }
    return(
        <div className="flex flex-col mob:flex-row mob:gap-[25px] justify-around px-[36px] py-[36px] h-full w-full items-center font-semibold text-8xl tab:text-7xl mob:text-6xl">
            <div className={`${props.darkmode?'hour-dark':'hour'} flex flex-row gap-[10px]`}>
                <figure className={`grid grid-cols-3 grid-rows-5 w-[49px] mob:w-[37px] h-[83px] mob:h-[63px] content-stretch ${'n' + h.toString().substring(0,1)}`}>{theMatrix}</figure>
                <figure className={`grid grid-cols-3 grid-rows-5 w-[49px] mob:w-[37px] h-[83px] mob:h-[63px] content-stretch ${'n' + h.toString().substring(1)}`}>{theMatrix}</figure>
            </div>
            <div className={`${props.darkmode?'minute-dark':'minute'} flex flex-row gap-[10px]`}>
                <figure className={`grid grid-cols-3 grid-rows-5 w-[49px] mob:w-[37px] h-[83px] mob:h-[63px] content-stretch ${'n' + m.toString().substring(0,1)}`}>{theMatrix}</figure>
                <figure className={`grid grid-cols-3 grid-rows-5 w-[49px] mob:w-[37px] h-[83px] mob:h-[63px] content-stretch ${'n' + m.toString().substring(1)}`}>{theMatrix}</figure>
            </div>
            <div className={`${props.darkmode?'second-dark':'second'} flex flex-row gap-[10px]`}>
                <figure className={`grid grid-cols-3 grid-rows-5 w-[49px] mob:w-[37px] h-[83px] mob:h-[63px] content-stretch ${'n' + s.toString().substring(0,1)}`}>{theMatrix}</figure>
                <figure className={`grid grid-cols-3 grid-rows-5 w-[49px] mob:w-[37px] h-[83px] mob:h-[63px] content-stretch ${'n' + s.toString().substring(1)}`}>{theMatrix}</figure>
            </div>
        </div>
    );
}
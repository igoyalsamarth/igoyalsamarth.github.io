import { useEffect, useState } from "react";
import NoSleep from "nosleep.js";
import '../assets/sleepModeSwitch.scss'

export default function SleepModeSwitch(){
    const [isEnabled, setIsEnabled] = useState(false)
    const noSleep = new NoSleep();
    const driverFunction = () => {
        setIsEnabled(!isEnabled)
        if(isEnabled == true){
            noSleep.enable();
        }
        else{
            noSleep.disable();
        }
    }

    useEffect(() => {
        driverFunction();
    },[]);

    return(
        <div className="flex justify-center px-[42px] py-[42px] h-full w-full items-center">
            <label className="sleepSwitch">
                    <input className="sleepInput" type="checkbox" onClick={() => driverFunction()}></input>
                    <span className="slider flex justify-around items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15.5969 12.0015C15.5969 10.0949 13.9836 8.54926 11.9935 8.54926C10.0034 8.54926 8.39012 10.0949 8.39012 12.0015C8.39012 13.9081 10.0034 15.4537 11.9935 15.4537C13.9836 15.4538 15.5969 13.9081 15.5969 12.0015ZM12 19.1896C9.9395 19.1804 7.80372 18.6788 5.78192 17.7184C4.28076 16.976 2.8178 15.9285 1.54788 14.6356C0.92416 13.9756 0.12862 13.02 0 12.0004C0.0152 11.1172 0.9626 10.027 1.54788 9.36512C2.73874 8.123 4.1636 7.10476 5.78192 6.28154C7.66734 5.36652 9.75424 4.8397 12 4.8104C14.0625 4.81968 16.1978 5.32708 18.2173 6.28154C19.7185 7.02398 21.1822 8.07222 22.4521 9.36512C23.0758 10.0251 23.8714 10.9808 24 12.0004C23.9848 12.8836 23.0374 13.9738 22.4521 14.6357C21.2613 15.8778 19.8356 16.8952 18.2173 17.7185C16.3329 18.6328 14.2408 19.156 12 19.1896ZM11.9985 17.4046C15.1209 17.4046 17.652 14.9847 17.652 11.9996C17.652 9.01448 15.1209 6.5946 11.9985 6.5946C8.8761 6.5946 6.34498 9.0145 6.34498 11.9996C6.34498 14.9847 8.8761 17.4046 11.9985 17.4046Z" fill="white"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10.13 15.842L9.343 18.782L7.41099 18.265L8.19799 15.325C7.02003 14.8908 5.92519 14.258 4.96099 13.454L2.80799 15.607L1.39399 14.193L3.54699 12.039C2.33107 10.5828 1.51408 8.83576 1.17599 6.96899L2.07599 6.80499C4.96534 8.88781 8.4382 10.0059 12 9.99999C15.704 9.99999 19.132 8.81599 21.924 6.80499L22.824 6.96799C22.4863 8.835 21.6697 10.5823 20.454 12.039L22.607 14.193L21.193 15.607L19.039 13.454C18.0749 14.2583 16.98 14.8915 15.802 15.326L16.59 18.265L14.658 18.782L13.87 15.842C12.6323 16.054 11.3677 16.054 10.13 15.842Z" fill="white"/>
                        </svg>
                    </span>
            </label>
        </div>
    );
}
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleAbout, toggleHome, toggleMedia, toggleWork } from "../store/reducers/navbarSlice";

export default function Navbar(props){

    const dispatch = useDispatch();
    const navState = useSelector((state) => state.navbar.navSelect);

    return(
        <>
            <p className={`text-4xl font-bold bg-gradient-to-r from-[#d10a2c] to-[#63b7b7] inline-block text-transparent bg-clip-text`}>Sami.</p>
            <ul className={`flex flex-row rounded-full p-[4px] ${props.darkmode?'bg-[#181818]':'bg-[#ecf3ff]'}`}>
                <NavLink className={`rounded-full py-[4px] w-[75px] text-center ${props.darkmode?'hover:bg-[#232323]':'hover:bg-[#fefffe]'} ${navState==='home' && props.darkmode ?'bg-[#232323]': navState==='home' ? 'bg-[#fefffe]' : ''}`} onClick={() => dispatch(toggleHome())}>
                Home
                </NavLink>
                <NavLink className={`rounded-full py-[4px] w-[75px] text-center ${props.darkmode?'hover:bg-[#232323]':'hover:bg-[#fefffe]'} ${navState==='about' && props.darkmode ?'bg-[#232323]': navState==='about' ? 'bg-[#fefffe]' : ''}`} onClick={() => dispatch(toggleAbout())}>
                    About
                </NavLink>
                <NavLink className={`rounded-full py-[4px] w-[75px] text-center ${props.darkmode?'hover:bg-[#232323]':'hover:bg-[#fefffe]'} ${navState==='work' && props.darkmode ?'bg-[#232323]': navState==='work' ? 'bg-[#fefffe]' : ''}`} onClick={() => dispatch(toggleWork())}>
                    Work
                </NavLink>
                <NavLink className={`rounded-full py-[4px] w-[75px] text-center ${props.darkmode?'hover:bg-[#232323]':'hover:bg-[#fefffe]'} ${navState==='media' && props.darkmode ?'bg-[#232323]': navState==='media' ? 'bg-[#fefffe]' : ''}`} onClick={() => dispatch(toggleMedia())}>
                    Media
                </NavLink>
            </ul>
            <div className={`flex justify-center items-center rounded-full p-[4px] cursor-pointer ${props.darkmode?'bg-[#181818]':'bg-[#ecf3ff]'}`}>
              <p onClick={() => {window.open('https://igoyalsamarth.github.io/Resume.pdf', "_blank");}} className={`rounded-full px-[10px] py-[4px] text-center ${props.darkmode?'hover:bg-[#232323]':'hover:bg-[#fefffe]'}`}>Resume</p>
            </div>
        </>
    );
}
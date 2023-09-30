//e4eaf1
import Navbar from './components/navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from "./components/grid";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from 'react';
import { toggleCopy } from './store/reducers/copySlice';

function App() {

  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.theme.darkMode);
  const isCopied = useSelector((state) => state.copy.isCopied);
  const navbarInfo =  useSelector((state) => state.navbar.navSelect)

  useEffect(() => {
    if(isCopied){
    const timeID = setTimeout(() => {
      dispatch(toggleCopy())
    },1500)
  return() => clearTimeout(timeID);
    }
} ,[toggleCopy()]);

  return (
    <BrowserRouter>
    <div className={`block font-grot ${darkMode? 'bg-[#232323] text-[#f1f3f8]': 'bg-[#e4eaf1]'}`}>
        <div className="flex h-[150px] items-center justify-between mob:flex-col mob:justify-evenly px-[3.5vw]">
          <Navbar darkmode = {darkMode}/>
        </div>
        <div className="pb-20 w-full">
          <div className="relative ml-auto mr-auto -mt-[15px] max-w-[1200px] tab:max-w-[800px] mob:max-w-[375px] mob:-mt-0">
            <Routes>
              <Route path = '/' element={<Grid darkmode={darkMode} navbar = {navbarInfo}/>}/>
            </Routes>
          </div>
        </div>
        {isCopied && 
            <div className='fixed bottom-[35px] bg-[#d10a2c] px-[10px] py-[7px] rounded-lg left-[45vw] tab:left-[43vw] mob:left-[33vw] duration-200'>
              <p className=' text-[#fff] font-bold text-xs'>Copied To Clipboard!</p>
            </div>
        }
    </div>
    </BrowserRouter>
  );
}

export default App;

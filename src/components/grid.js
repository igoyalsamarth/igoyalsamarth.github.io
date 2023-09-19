import samiHi from '../assets/samiHi.png'
import '../assets/grid.scss'

import MatrixClock from './matrixClock';
import DayTimer from './dayTimer';
import DarkModeSwitch from './darkModeSwitch';
import SleepModeSwitch from './sleepModeSwitch';
import SpotifyTile from './spotifyTile';
import TypeTile from './typeTile';
import ReactionTimerTile from './reactiontimertile';
import PortfolioOneTile from './portfolioone'
import Valotag from './valotag';
import DiscordTile from './discordtile';

import LinkedinLogo from './linkedinlogo';
import MediumLogo from './mediumlogo';
import TwitterLogo from './twitterlogo';

export default function Grid(props){
    return(
        <div className="main-grid grid grid-cols-4 mob:grid-cols-2 h-[1504px] tab:h-[1208px] mob:h-[2330.1px]">
              <div className={`grid-tile absolute h-[288px] w-[592px] tab:w-[392px] tab:h-[392px] mob:w-[375px] mob:h-[375px] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818] border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#fefffe] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'about'? 'opacity-100' : 'opacity-20'}`} >
                <div className={`flex flex-col justify-around px-[42px] py-[42px] tab:py-[21px] h-full w-full items-center`}>
                    <img src={samiHi} className='w-[30%] tab:w-[40%] mob:w-[50%]' alt='Sami Hi'></img>
                    <p className="">My name is <span className='font-black text-4xl'>Samarth</span>, a FrontEnd WebDev from The City of Taj, INDIA. I code in React and Tailwind, my fields of interest are Esports, Anime and Music.</p>
                </div>
              </div>
              <div className={`grid-tile absolute h-[288px] tab:h-[188px] mob:h-[179.5px] w-[288px] tab:w-[188px] mob:w-[179.5px] ml-[608px] tab:ml-[408px] mob:ml-[0] mob:mt-[782px] bg-transparent border rounded-[30px] overflow-hidden shadow-md ${props.darkmode?'border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'media'? 'opacity-100' : 'opacity-20'}`}>
                <DayTimer darkmode = {props.darkmode} />
              </div> 
              <div className={`grid-tile absolute h-[592px] tab:h-[392px] mob:h-[179.5px] w-[288px] tab:w-[188px] mob:w-[375px] ml-[912px] tab:ml-[612px] mob:ml-[0px] mob:mt-[391px] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818] border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#fefffe] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'media'? 'opacity-100' : 'opacity-20'}`}>
                <MatrixClock darkmode = {props.darkmode}/>
              </div>   
              <div className={`grid-tile absolute h-[288px] tab:h-[188px] mob:h-[179.5px] w-[288px] tab:w-[188px] mob:w-[179.5px] mt-[304px] tab:mt-[408px] mob:mt-[586.5px] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818] border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#fefffe] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'media'? 'opacity-100' : 'opacity-20'}`}>
                <DarkModeSwitch />
              </div>
              <div className={`grid-tile absolute h-[288px] tab:h-[188px] mob:h-[179.5px] w-[288px] tab:w-[188px] mob:w-[179.5px] ml-[304px] tab:ml-[204px] mob:ml-[195.5px] mt-[304px] tab:mt-[408px] mob:mt-[586.5px] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818] border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#fefffe] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'media'? 'opacity-100' : 'opacity-20'}`}>
                <SleepModeSwitch />
              </div>
              <div onClick={() => {window.open('https://igoyalsamarth.github.io/valotag/', "_blank");}} className={`grid-tile cursor-pointer absolute h-[592px] tab:h-[392px] mob:h-[375px] w-[288px] tab:w-[188px] mob:w-[375px] ml-[608px] tab:ml-[408px] mob:ml-[0px] mt-[304px] tab:mt-[204px] mob:mt-[1173.1px] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818] border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#fefffe] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'work'? 'opacity-100' : 'opacity-20'}`}>
                <Valotag darkmode = {props.darkmode}/>
              </div>
              <div onClick={() => {window.open('https://monkeytype.com/profile/Ssamiii', "_blank");}} className={`grid-tile cursor-pointer absolute h-[288px] tab:h-[188px] mob:h-[375px] w-[592px] tab:w-[392px] mob:w-[179.5px] mt-[608px] tab:mt-[612px] mob:mt-[782.1px] mob:ml-[195.5px] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818] border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#fefffe] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'about'? 'opacity-100' : 'opacity-20'}`}>
                <TypeTile darkmode = {props.darkmode}/>
              </div>
              <div className={`grid-tile absolute h-[288px] tab:h-[188px] mob:h-[179.5px] w-[288px] tab:w-[188px] mob:w-[179.5px] ml-[912px] tab:ml-[612px] mob:ml-[0] mt-[608px] tab:mt-[408px] mob:mt-[977.6px] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818] border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#fefffe] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'about'? 'opacity-100' : 'opacity-20'}`}>
                <SpotifyTile />
              </div>
              <div onClick={() => {window.open('https://twitter.com/igoyalsamarth', "_blank");}}  className={`grid-tile cursor-pointer absolute h-[288px] tab:h-[188px] mob:h-[179.5px] w-[288px] tab:w-[188px] mob:w-[179.5px] mt-[912px] tab:mt-[612px] mob:mt-[1564.1px] tab:ml-[612px] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818] border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#50abf1] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'media'? 'opacity-100' : 'opacity-20'}`}>
                <div className="flex justify-center px-[42px] py-[42px] h-full w-full items-center">
                  <TwitterLogo darkmode = {props.darkmode} />
                </div>
              </div>
              <div className={` grid-tile cursor-pointer absolute h-[288px] tab:h-[188px] mob:h-[179.5px] w-[288px] tab:w-[188px] mob:w-[179.5px] mt-[912px] tab:mt-[816px] mob:mt-[1564.1px] ml-[304px] tab:ml-[204px] mob:ml-[195.5px] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818] border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#5864f3] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'media'? 'opacity-100' : 'opacity-20'}`}>
                <DiscordTile darkmode = {props.darkmode}/>
              </div>
              <div onClick={() => {window.open('https://igoyalsamarth.github.io/reaction-timer/', "_blank");}} className={` grid-tile cursor-pointer absolute h-[288px] tab:h-[188px] mob:h-[375px] w-[592px] tab:w-[392px] mob:w-[179.5px] mt-[912px] tab:mt-[816px] mob:mt-[1759.6px] ml-[608px] tab:ml-[408px] mob:ml-[0] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818]  border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#fefffe] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'work'? 'opacity-100' : 'opacity-20'}`}>               
                <ReactionTimerTile darkmode = {props.darkmode}/>
              </div>
              <div onClick={() => {window.open('https://medium.com/@samarth.goyal1999', "_blank");}} className={`grid-tile cursor-pointer absolute h-[288px] tab:h-[188px] mob:h-[179.5px] w-[288px] tab:w-[188px] mob:w-[179.5px] mt-[1216px] tab:mt-[612px] mob:mt-[1759.6px] tab:ml-[408px] mob:ml-[195.5px] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818] border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#fefffe] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'media'? 'opacity-100' : 'opacity-20'}`}>
                <div className="flex just{ify-center px-[42px] py-[42px] h-full w-full items-center">
                  <MediumLogo darkmode = {props.darkmode} />
                </div>
              </div>
              <div onClick={() => {window.open('https://igoyalsamarth.github.io/portfolio-one/', "_blank");}} className={`grid-tile cursor-pointer absolute h-[288px] tab:h-[188px] mob:h-[179.5px] w-[592px] tab:w-[392px] mob:w-[375px] mt-[1216px] tab:mt-[1020px] mob:mt-[2150.6px] ml-[304px] tab:ml-[0px] mob:ml-[0px] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818] border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#fefffe] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'work'? 'opacity-100' : 'opacity-20'}`}>
                  <PortfolioOneTile darkmode = {props.darkmode}/>
              </div>
              <div onClick={() => {window.open('https://www.linkedin.com/in/goyalsamarth/', "_blank");}} className={`grid-tile cursor-pointer absolute h-[288px] tab:h-[188px] mob:h-[179.5px] w-[288px] tab:w-[188px] mob:w-[179.5px] mt-[1216px] tab:mt-[816px] mob:mt-[1955.1px] ml-[912px] tab:ml-[0px] mob:ml-[195.5px] rounded-[30px] overflow-hidden shadow-md border ${props.darkmode?'bg-[#181818] border-[#d10a0a7c] hover:shadow-[#d10a0a7c]':'bg-[#017fbb] border-[#63b7b7] hover:shadow-[#63b7b7]'} ${props.navbar === 'home'? 'opacity-100': props.navbar === 'media'? 'opacity-100' : 'opacity-20'}`}>
                <div className="flex justify-center px-[42px] py-[42px] h-full w-full items-center">
                  <LinkedinLogo darkmode = {props.darkmode}/>
                </div>
              </div>
            </div>
    );
}
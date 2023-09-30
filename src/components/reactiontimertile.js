import polyBG from '../assets/polyBG.svg'
import zoroSeo from '../assets/zoroSeo1.png'
import zoroSeo1 from '../assets/zoroSeo2.png'
import polyBG_b from '../assets/polyBG_b.svg'

export default function ReactionTimerTile(props){
    return(
        <div className="flex px-[36px] py-[36px] tab:px-[25px] tab:py-[25px] mob:px-[20px] mob:py-[20px] h-full w-full items-start" style={{background: props.darkmode? `url(${polyBG_b})` : `url(${polyBG})`}}>
            <div className={`text-white rounded-full mob:rounded-xl px-[10px] tracking-wider py-[2px] font-semibold text-center text-xs ${props.darkmode?' bg-[#d10a0a7c]':'bg-[#63b7b7]'}`}>ZORO //SEO</div>
            <img src={zoroSeo} alt='ValoTag1' className={`mob:hidden absolute -rotate-[10deg] scale-100 tab:scale-[0.9] mob:scale-150 rounded-xl left-[70px] tab:left-[40px] mob:left-[60px] top-[50px] tab:top-[40px] mob:top-[170px] border ${props.darkmode?' border-[#d10a0a7c]':'border-[#63b7b7]'}`}></img>
            <img src={zoroSeo1} alt='ValoTag1' className={`lap:hidden tab:hidden absolute -rotate-[10deg] scale-[0.9] rounded-xl left-[40px] top-[40px] ${props.darkmode?'border border-[#d10a0a7c]':'border-[#63b7b7]'}`}></img>
        </div>
    );
}
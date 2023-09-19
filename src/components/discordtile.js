import { toggleCopy } from '../store/reducers/copySlice';
import { useDispatch } from 'react-redux';
import DiscordLogo from './discordlogo';

export default function DiscordTile(props){

    const dispatch = useDispatch();

    const copyText = (containerid) => {
        if (window.getSelection) {
            if (window.getSelection().empty) { // Chrome
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) { // Firefox
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) { // IE?
            document.selection.empty();
        }
    
        if (document.selection) {
            const range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(containerid));
            range.select().createTextRange();
            document.execCommand("copy");
        } else if (window.getSelection) {
            const range = document.createRange();
            range.selectNode(document.getElementById(containerid));
            window.getSelection().addRange(range);
            document.execCommand("copy");
        }
    }
    return(
        <div className="flex flex-col justify-center px-[42px] py-[42px] h-full w-full items-center" onClick={() => {copyText('discordID');dispatch(toggleCopy())}}>
            <DiscordLogo darkmode = {props.darkmode} />
            <p className='absolute text-xs opacity-0' id='discordID'>igoyalsamarth</p>
      </div>
    );
}
import {Link} from "react-router-dom";
import { arrow } from '../assets/icons';
const InfoBox = ({text,link,btnText}) =>(
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>
            {text}
        </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>

    </div>
)
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span>Philip</span> 👋
            <br/>
            I am a Software Engineer from Nigeria. I provide tech enabled solutions to existing problems
        </h1>
    ),
    2: (
        <InfoBox text='Worked with a lot of people and picked up  many skills along the way' link='/about' btnText='Learn more'/>
    ),
     3: (
         <InfoBox text='Worked On Various Projects Over the Years. Curious About the Projects ' link='/projects' btnText='Check Projects'/>
    ),
     4: (
         <InfoBox text="Looking for a Proficient SoftWare Engineer either frontend or backend ? I'm Just a few keystrokes away"  link='/contact' btnText='Contact me'/>
    ),

}
const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}
export default HomeInfo;
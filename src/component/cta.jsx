import {Link} from "react-router-dom";
import {github , linkedin} from '../assets/icons/index.js'
const CTA = ()=>{

    return(
        <section className='cta'>
            <p className='cta-text'>Have A Project In Mind ? <br className='sm:block hidden '/>
            Let's build something together
            </p>
            <div className='flex gap-2'>
                <img
                    src={github}
                    onClick={()=><Link to={"https://github.com/Philip-ajibola"}/>}
                    className='w-10 h-10 cursor-pointer'
                />
                <img
                    src={linkedin}
                    onClick={()=><Link to={"https://www.linkedin.com/in/philip-ajibola-63772623b/"}/>}
                    className='w-10 h-10 cursor-pointer'
                />
            </div>
            <Link to={'/contact'} className='btn'>Contact</Link>
        </section>
    )
}
export default CTA;
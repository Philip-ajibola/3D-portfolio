import {Suspense, useRef, useState} from "react";
import  emailjs from '@emailjs/browser'
import {Canvas} from "@react-three/fiber";
import Fox from "../models/fox.jsx";
import Loader from "../component/loader.jsx";
import useAlert from "../hooks/useAlert.js";
const Contact = () =>{
    const formRef = useRef(null);
    const [form, setForm] = useState({name: "", email: "",message:""})
    const [loading, setLoading] = useState(false);
    const [currentAnimation,setCurrentAnimation ] = useState('idle');
    const {alert,showAlert,hideAlert} = useAlert();
    const handleChange  = (e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    };
    const handleFocus = ()=>{
        setCurrentAnimation('walk');

    };
    const handleBlur = ()=>{
        setCurrentAnimation('idle')
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        setCurrentAnimation('hit')
        emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Philip AJibola",
                form_email: form.email,
                to_email: "ajibolaphilip10@gmail.com",
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        ).then(()=>{
            setLoading(false);
            showAlert({show:true, text:'Message Sent successfully!',type:"success"})
            setTimeout(()=>{
                hideAlert();
                setCurrentAnimation('idle')
                setForm({name:"",email: "",message: ""})
            },[3000])

        }).catch((error)=>{
            setLoading(false);
            showAlert({show:true, text:"Didn't get Your Message!",type:"danger"})

            setCurrentAnimation('idle')
            console.log(error);
        })
    };
    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            {alert.show && <Alert {...alert}/>}
            <div className='flex=1 min-w-[50%] flex flex-col'>
                <h1 className='head-text' >Get In Touch </h1>
                <form className='w-full flex flex-col gap-7 mt-14'
                    onSubmit={handleSubmit}
                >
                    <label className='text-black-500 font-semibold'>
                        Name
                        <input
                        type='text'
                        name='name'
                        className='input'
                        placeholder='Micheal'
                        value={form.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Email
                        <input
                        type='text'
                        name='email'
                        className='input'
                        placeholder='example@gmail.com'
                        value={form.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Message
                        <textarea
                        name='message'
                        rows={4}
                        className='textarea'
                        placeholder='Let me know how i can help you '
                        required
                        value={form.message}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        />
                    </label>
                    <button
                    type='submit'
                    className='btn'
                    disabled={loading}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
            <div className='lg:w-/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas
                camera={{
                    position:[0,0,5],
                    fov:75,
                    near:0.1,
                    far:1000,

                }}
                >
                    <directionalLight intensity={2.5} position={[0, 0, 1]}/>
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={<Loader/>}>
                        <Fox
                            position={[0.5,0.35,0]}
                            rotation={[12.6,-0.6,0]}
                            scale={[0.5,0.5,0.5]}
                            currentAnimation={currentAnimation}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Contact;
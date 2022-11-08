import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../assets/about.png'

const About= () => {
    return (
        <div className='items-center mx-auto grid md:grid-cols-2 gird-cols-1 gap-10  md:pb-12 pb-8 md:px-5 sm:px-5'>

            <div className="hero-left ">
                <h1 className="md:text-4xl text-3xl font-bold text-[#0A5078]"><span>About</span>  <span className="text-[#FAB400] border-b-4 border-[#0A5078]">FitiFy</span> </h1>
                <h4 className=' mt-5 font-semibold '>Our fitness coaches can enable you to meet your wellness objectives. They can turn into your instructor, your helper, your mentor and your companion.</h4>
                <p className='mt-5 text-black font-medium'>With FitiFy VIP Members in every corner of the Globe, FitiFy Fitness offers a wide variety of customized online training programs and one-on-one online Coaching by highly educated Fitness Professionals, Transformation Experts and Registered Dieticians for women of all ages, body types, levels of fitness and personal objectives. </p>
                
                <div className='mt-8 '>
                    <Link ><button className="py-[7px] rounded-lg   px-10  bg-[#FAB400]  border border-[#FAB400] duration-300 hover:border-[#FAB400] hover:bg-[#ff391100] text-[#000] mr-5 capitalize text-md font-semibold">Learn More About Us</button></Link>
                 </div>
            </div>
            {/* Hero left End */}

            <div className="hero-right flex justify-center items-center ">
                <img src={about} className='w-full '  alt='About' />
            </div>
            {/* Hero Right End */}


        </div>
    );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { MdLocationPin} from "react-icons/md";
import { BsFillTelephoneInboundFill, BsFillEnvelopeFill} from "react-icons/bs";
import './Footer.css'


const Footer = () => {
    return (
        <div className='bg-[#074061] py-12 w-[100%]' >
            <div className='max-w-[1150px] mx-auto'>
                 <h2 className=" foot-head text-4xl text-[#FAB400] text-center">Get in Touch</h2>
                <div className='my-4'>
                    <div className="location flex justify-center items-center text-white italic">
                        <MdLocationPin className='text-xl text-[#FAB400] mr-2 italic'></MdLocationPin>
                        <p >Katasur, Kaderabad Housing, Mohammadpur - Dhaka</p>
                    </div>
                    <div className="location flex justify-center items-center text-white mt-2 italic">
                        <BsFillTelephoneInboundFill className=' text-[#FAB400] mr-2'></BsFillTelephoneInboundFill>
                        <p>+880-1788-446364</p>
                    </div>
                    <div className="location flex justify-center items-center text-white mt-2 italic">
                        <BsFillEnvelopeFill className=' text-[#FAB400] mr-2'></BsFillEnvelopeFill>
                        <p>info@fitify.com</p>
                    </div>
                </div>

                 <div>
                    <div className='flex justify-center  mt-7'>
                    
                        <ul className='flex'>
                            <a className='w-[43px] h-[43px] mx-[5px] bg-white hover:bg-gray-200 text-[#0A5078]  rounded-full pt-3 flex justify-center' href='https://www.facebook.com/obaedulislam.mohammad/' target="_blank" rel="noopener noreferrer" ><FaFacebookF className='text-lg text-lg '></FaFacebookF></a>
                            <a className='w-[43px] h-[43px] mx-[5px] bg-white hover:bg-gray-200  text-[#0A5078]  rounded-full pt-3 flex justify-center' href='https://www.twitter.com/obaedulislam' target="_blank"  rel="noopener noreferrer"><FaTwitter className='text-lg text-lg '></FaTwitter></a>
                            <a className='w-[43px] h-[43px] mx-[5px] bg-white hover:bg-gray-200 text-[#0A5078]  rounded-full pt-3 flex justify-center' href='https://github.com/obaedulislam' target="_blank"  rel="noopener noreferrer"><FaGithub className='text-lg text-lg ' ></FaGithub></a>
                            <a className='w-[43px] h-[43px] mx-[5px] bg-white hover:bg-gray-200 text-[#0A5078]  rounded-full pt-3 flex justify-center' href='https://www.linkedin.com/in/obaedulislam/' target="_blank"  rel="noopener noreferrer"><FaLinkedinIn className='text-lg text-lg '></FaLinkedinIn></a>
                            <a className='w-[43px] h-[43px] mx-[5px] bg-white hover:bg-gray-200 text-[#0A5078]  rounded-full pt-3 flex justify-center' href='https://www.instagram.com/obaedul_islam/' target="_blank"  rel="noopener noreferrer"><FaInstagram className='text-lg text-lg '></FaInstagram></a>

                        </ul>
                    </div>
                 </div>
                 {/* Social Media Icon End */}

                 <div>
                    <p className='text-center mt-5 text-white italic'>Copyright &copy; 2022 | All Right Reserved by <Link to='http://obaedulislam.com/' target= "_blank" className='text-gray-200 hover:text-[#FAB400]'>Obaedul Islam</Link>  | <Link className='text-gray-200 hover:text-[#FAB400]'>Privacy Policy</Link> | <Link className='text-gray-200 hover:text-[#FAB400]  '>Terms & Conditions</Link></p>
                 </div>
                {/* Footer Bottom End */}
                
            </div>

        </div>
    );
};

export default Footer;
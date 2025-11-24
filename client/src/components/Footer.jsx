import React from 'react';
import { MessageCircleQuestionMark,InstagramIcon ,Linkedin,Github} from 'lucide-react';
const Footer = () => {
    
    return (
        < div className='bg-gray-800 text-white p-6 mt-10 text-center flex flex-col'  >
            <div className='p-4 text-yellow-100'>
                <h1 className='font-semibold text-2xl text-shadow-md'>Cake House</h1>
            </div>
            <div className=' flex items-center justify-center gap-10 p-4'>
                {/* <Instagram /> */}
                <MessageCircleQuestionMark size={28} className='cursor-pointer'  color="#e0621f"  />
                <InstagramIcon  size={28} className='cursor-pointer' color="#e0621f" />
            </div>
            <div className='py-2 flex flex-col gap-2'>
                <p className='text-sm text-gray-400'>&copy; 2024 Cake House. All rights reserved.</p>
                <p className=' text-md text-gray-400'>Developed by Charan</p>
                <div className='flex items-center justify-center gap-10'>
                    <Linkedin color="#e0621f" className='cursor-pointer' onClick={()=>window.open('https://linkedin.com/in/thecharan', '_blank')}/>
                    <Github color="#e0621f" className='cursor-pointer'onClick={()=>window.open("https://github.com/Charan-Crafts","_blank")}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;

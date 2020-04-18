import React, { Component } from 'react'
import Web from '../assets/images/web.svg'
import Webdev from '../assets/images/webdev.svg'
import Webdraw from '../assets/images/webdraw.svg'
import SocialMedia from './SocialMedia'


class Description extends Component {
    render() { 
        return ( 
            
            <div className='w-full bg-white text-center pt-20'>
            {/* say who you are and explain what you do */}
            <div className='inline-block pt-6'>
                <ul className='flex'>
                    <li><img className='h-24 px-8' src={Webdev} alt=''/></li>
                    <li><img className='h-40 px-8' src={Web} alt=''/></li>
                    <li><img className='h-24 px-8' src={Webdraw} alt=''/></li>
                </ul>
            </div>

                <h2 className='pb-4 font-semibold text-gray-900'>Hello! Welcome to my Portfolio.</h2>
                <p className='text-gray-900 pb-4'>Joel Chadamuka is a Full Stack Web Developer based in Harare, Zimbabwe.<br></br>
                He loves programming, travelling and playing the piano. </p>
               <SocialMedia/>
            </div>
         );
    }
}
 
export default Description;
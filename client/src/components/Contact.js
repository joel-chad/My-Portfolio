import React, { Component } from 'react';
import Contacts from '../assets/images/contact.svg'
import SocialMedia from './SocialMedia';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='w-full  text-center pt-20 py-3'>
            
                <div className='h-64 m-auto w-4/5' >
                    <img className='text-center flex h-64 w-4/5' src={Contacts} alt=''/>
                </div>
                <h1 className='py-4 font-semibold text-gray-900'>Contact Me</h1>
                <input className='py-2 pl-4 w-2/5 focus:outline-none bg-gray-200 border-gray-600 border-2 rounded-sm' placeholder='First Name' type='text'/><br></br>
                <div className='w-full h-6'></div>
                <input className='py-2 pl-4 w-2/5 focus:outline-none bg-gray-200 border-gray-600 border-2 rounded-sm' placeholder='Last Name' type='text'/><br></br>
                <div className='w-full h-6'></div>
                <input className='py-2 pl-4 w-2/5 focus:outline-none bg-gray-200 border-gray-600 border-2 rounded-sm' placeholder='Email' type='text'/><br></br>
                <div className='w-full h-6'></div>
                <input className='py-2 pl-4 focus:outline-none text-gray-900 bg-gray-200 border-gray-600 border-2 rounded-sm h-32 w-1/3' placeholder='Message' type='text'/>
                <SocialMedia/>
            </div>
         );
    }
}
 
export default Contact;
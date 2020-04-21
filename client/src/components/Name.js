import React, { Component } from 'react';
import Img from '../assets/images/img.svg'
import Avatar from '../assets/images/avatar.jpg'
import Descripion from './Description';

class Name extends Component {
    render() { 
        return ( 
            <div className='bg-gray-800 w-full h-full pt-16'>
                <div className='h-20 m-auto w-20'>
                    <img className='rounded-full text-center flex w-20 h-20' src={Avatar} alt=''/>
                </div>
                <h1 className='font-semibold text-center text-gray-400'>Joel Chadambuka</h1>
                <p className='text-center text-gray-400'>☛ -- Full Stack Web Developer -- ☚</p>
                <img src={Img} alt=''/>
                <Descripion/>
            </div>
         );
    }
}
 
export default Name;
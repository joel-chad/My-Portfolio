import React, { Component } from 'react';
import avatar from '../assets/images/avatar.jpg'
import { Link } from 'react-router-dom';
import img from '../assets/images/figma.png'

class Blog extends Component {
    state = {  }
    render() { 
        return ( 
            
                <div className="w-full text-center border-b md:w-1/2 mt-6 mx-auto p-4 flex flex-col flex-grow flex-shrink-0">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden">
                            <a href="/c" className="flex flex-wrap no-underline hover:no-underline">
                                <div className='h-16 m-auto w-16'>
                                    <img className='rounded-full text-center flex w-16 h-16' src={avatar} alt=''/>
                                </div>
                                <div className='w-full pt-2 pb-2'>
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">Joel Chadambuka</p>
                                <p className="w-full text-gray-800 text-xs px-6">Apr 2. 2020</p>
                                </div>
                                
                                <div className="w-full font-bold text-xl text-gray-800 px-6">My Top 10 Tools For Web Development.</div>
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    These are the tools that I normally use for developing web applications including text editor, prototyping tools and some backend tools
                                    <br></br><span className='text-base italic'>Disclaimer: This does not mean they are the best but those I am most comfy with.</span>
                                </p>
                            </a>
                        </div>
                        <div class="rounded-lg">
                      <img src={img} alt='' class="object-cover mx-auto flex-shrink-0 w-4/5"/>
                    </div>
                        <div className="mt-auto bg-white overflow-hidden p-6">
                            <div className="flex items-center justify-start">
                                <Link className='text-gray-700 underline font-light italic' to='/article'>Read Blog</Link>
                            </div>
                        </div>
                    </div>
         );
    }
}
 
export default Blog;
import React, { Component } from 'react';
import avatar from '../assets/images/avatar.jpg'
import { Link } from 'react-router-dom';

class Blog extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='inline-block'>
                <div className='flex'>
                <div className="w-full md:w-2/5 mt-10 p-6 flex flex-col flex-grow flex-shrink-0">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="/c" className="flex flex-wrap no-underline hover:no-underline">
                                <div className='w-full pt-2 pb-2'>
                                <h3 class="mr-2 font-bold hover:underline">Joel Chadambuka</h3>
                                </div>
                                <div className='h-24 m-auto w-24'>
                                    <img className='rounded-full text-center flex w-24 h-24' src={avatar} alt=''/>
                                </div>
                                <div className="w-full font-bold text-xl text-gray-800 px-6">Lorem ipsum dolor sit amet.</div>
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
                                </p>
                            </a>
                        </div>
                        <div class="rounded-lg">
                      <img src={avatar} alt='' class="h-64 object-cover w-full rounded-lg border"/>
                    </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-start">
                                <Link className='text-gray-700 underline font-light italic' to='/article'>Read Blog</Link>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
         );
    }
}
 
export default Blog;
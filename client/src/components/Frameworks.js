import React, { Component } from 'react';
import webdev1 from '../assets/images/webdev1.svg'
import mobiledev from '../assets/images/mobiledev.svg'
import ml from '../assets/images/ml.svg'


class Frameworks extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="bg-white py-8">
	
                <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                
                    <h1 className="w-full my-2 font-semibold text-center text-gray-800">What I Specialise In</h1>
                    <div className="w-full mb-4">	
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                
                    
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className='h-64 m-auto w-64'>
                                <img className='text-center flex w-64 h-64' src={webdev1} alt=''/>
                            </div>
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">Web Development</p>
                                <div className="w-full font-bold text-xl text-gray-800 px-6">I like building web applications.</div>
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    I build robust, responsive and fast full stack web applications. I am capable of using vanilla Javascript and frameworks like NodeJs and Express and libraries like React
                                </p>
                        </div> 
                    </div>
                    
                    
                    
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className='h-64 m-auto w-64'>
                                <img className='text-center flex w-64 h-64' src={ml} alt=''/>
                            </div>
                            
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">Data Science</p>
                                <div className="w-full font-bold text-xl text-gray-800 px-6">I work with data.</div>
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    I am fascinated by the untapped potential in everyday data. I like developing data science projects and I have worked with Python libraries like pandas, matplotlib and numPy.
                                </p>
                        </div>
                    </div>
                    
                    
                    
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <div className='h-64 m-auto w-64'>
                                <img className='text-center flex w-64 h-64' src={mobiledev} alt=''/>
                            </div>
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">Mobile App Development</p>
                                <div className="w-full font-bold text-xl text-gray-800 px-6">I make mobile apps.</div>
                                <p className="text-gray-800 text-base px-6 mb-5">
                                    I design, build and maintain user-centric apps. Have a look at myprojects, which highlights
                                     work we’ve done with technologies including Java, Kotlin and Flutter
                                </p>
                        </div>
                    </div>
                    
                    
                </div>

            </section>
         );
    }
}
 
export default Frameworks;
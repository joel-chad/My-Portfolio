import React, { Component } from 'react';
import Frameworks from './Frameworks';
// import Progress from './Progress';
// import Img from '../assets/images/img.svg'

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='w-full bg-white text-center pt-10'>
            <div className='bg-red'>
                {/* your educational background, profile, goals, interests and online resume */}
                <h1 className='pb-4 font-semibold text-5xl text-gray-900'>About Joel</h1>
                <p className='text-gray-900 pb-4'><i className='font-thin text-lg'>I am a web designer and full stack developer based in Harare, Zimbabwe.<br></br><br></br></i> Currently
                studying for a BTech Hons. Degree in Software Engineering at Harare Institute Of Technology,<br></br>I am interning 
                at Health Informatics Training and Research Advancement Centre(Hitrac).<br></br> I am passionate about all things design and I love creating intuitive,
                 dynamic user experiences. I also do freelance work.
                </p>
                </div>
                <hr className='shadow-lg'></hr>
            <Frameworks/>

                <h2 className='pb-4 font-semibold text-gray-900'>Technologies</h2>
                <p className='text-gray-900 pb-4'>I specialise in the folloing technologies:</p>
                <div class="w-full p-6">

                    <div className='p-2'>
                        <h3>React Js:</h3>
                        <div class="shadow w-3/5 bg-grey-light m-auto">
                            <div class="bg-blue-400 text-xs leading-none py-1 text-center text-white" style={{width: "85%"}}>85%</div>
                        </div>
                    </div>

                    <div className='p-2'>
                        <h3>Node Js:</h3>
                        <div class="shadow w-3/5 bg-grey-light mt-2 m-auto">
                            <div class="bg-teal-400 text-xs leading-none py-1 text-center text-white" style={{width: "75%"}}>75%</div>
                        </div>
                    </div>

                    <div className='p-2'>
                        <h3>Vanilla Js:</h3>
                        <div class="shadow w-3/5 bg-grey-light mt-2 m-auto">
                            <div class="bg-orange-600 text-xs leading-none py-1 text-center text-white w-3/5" style={{width: "85%"}}>85%</div>
                        </div>
                    </div>

                    <div className='p-2'>
                        <h3>Python:</h3>
                        <div class="shadow w-3/5 bg-grey-light mt-2 m-auto">
                            <div class="bg-red-600 text-xs leading-none py-1 text-center text-white" style={{width: "65%"}}>65%</div>
                        </div>
                    </div>

                    <div className='p-2'>
                        <h3>Java:</h3>
                        <div class="shadow w-3/5 bg-grey-light mt-2 m-auto">
                            <div class="text-xs leading-none py-1 text-center text-white bg-gray-800" style={{width: "75%"}}>75%</div>
                        </div>
                    </div>

                    <div className='p-3'>
                        <h3>Kotlin:</h3>
                        <div class="shadow w-3/5 bg-grey-light mt-2 m-auto">
                            <div class="text-xs leading-none py-1 text-center text-white bg-yellow-500" style={{width: "65%"}}>65%</div>
                        </div>
                    </div>
                    <div className='w-full h-6'></div>
                    <p>I have also worked with databases like:
                    <br></br>
                    <ul>
                        <li>MongoDb</li>
                        <li>MySQl</li>
                        <li>PostgreSQL</li>
                    </ul>
                    </p>
                <div>
            </div>
            </div>
            
            <div className='bg-gray-800 h-32'>
            
            </div>
            
            {/* <Progress/> */}
        </div>
         );
    }
}
 
export default About;
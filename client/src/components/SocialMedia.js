import React, { Component } from 'react';
import Twitter from '../assets/images/twitter.svg'
import Instagram from '../assets/images/instagram.svg'
import Github from '../assets/images/github.svg'
import Facebook from '../assets/images/facebook.svg'
import LinkedIn from '../assets/images/linkedin.svg'
import {Link} from 'react-router-dom'

class SocialMedia extends Component {
    render() { 
        return ( 
            <div>
                 <div className='inline-block pt-6'>
                <ul className='flex'>
                   <li><span><Link to='/twitter'><img className='h-12' src={Twitter} alt=''/></Link></span></li>
                   <li><span><Link to='/twitter'><img className='h-12' src={Instagram} alt=''/></Link></span></li>
                   <li><span><Link to='/twitter'><img className='h-12' src={Github} alt=''/></Link></span></li>
                   <li><span><Link to='/twitter'><img className='h-12' src={Facebook} alt=''/></Link></span></li>
                   <li><span><Link to='/twitter'><img className='h-12' src={LinkedIn} alt=''/></Link></span></li>
                </ul>
                </div>
            </div>
         );
    }
}
 
export default SocialMedia;
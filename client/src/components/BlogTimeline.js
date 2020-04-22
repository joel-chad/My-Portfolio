import React, { Component } from 'react';
import Blog from './Blog';

class BlogTimeline extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Blog/>
                <Blog/>
            </div>
         );
    }
}
 
export default BlogTimeline;
import React, {Component} from 'react'
import avatar from '../assets/images/avatar.jpg'

class Project extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="max-w-xl mx-auto my-6">
              <article class="border-t p-2 hover:bg-gray-100 flex flex-wrap items-start rounded-sm border-gray-400 cursor-pointer">
                <img src={avatar} alt='' class="rounded-full w-12 h-12 mr-3" />

                <div class="flex flex-wrap justify-start items-start flex-1">

                  <div class="flex flex-1 items-center">
                    <div class="flex-1 flex items-center">
                      <h3 class="mr-2 font-bold hover:underline">
                        Joel Chadambuka
                      </h3>
                      
                      <span class="text-gray-600 text-sm">Apr 7</span>
                    </div>

                    <div class="text-gray-600">
                      <a href="b" class="flex w-6 h-6 bg-transparent hover:bg-blue-200 rounded-full items-center justify-center hover:text-blue-600">
                        <svg viewBox="0 0 24 24" class="w-3 h-3 fill-current"><g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g></svg>
                      </a>
                    </div>
                  </div>

                  <div class="w-full">
                    <p class="my-1">Starhopper</p>

                    <div class="rounded-lg">
                      <img src={avatar} alt='' class="h-64 object-cover w-full rounded-lg border"/>
                    </div>

                  </div>

                </div>
              </article>
          </div>
         );
    }
}
 
export default Project;
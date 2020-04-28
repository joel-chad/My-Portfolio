import axios from 'axios'

const baseUrl = '/project'

class BloApi{

    getProjects(){
        return axios.get(`${baseurl}`)
    }

}

export default BloApi();
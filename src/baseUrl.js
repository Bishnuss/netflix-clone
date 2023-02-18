import axios from 'axios'

// instance creation

// create() - axious

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3"

})

export default instance
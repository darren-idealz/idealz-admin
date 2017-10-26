import axios from "axios";

const getDataApi = {
    requestData: function(location) {
        return axios.get(location)
            .then(response => {
                /**
                 * sadly, jsonplaceholder dosen't match our article shape
                 * so we need to modify it a bit :)
                 */
                return response;
            })
    }
}

export default getDataApi
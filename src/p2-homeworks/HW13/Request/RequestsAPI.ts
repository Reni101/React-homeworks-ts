import axios from "axios";

export const RequestsAPI  = {
     postRequest() {
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success: true}, {})

    },


}
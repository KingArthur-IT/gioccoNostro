import axios from "axios";

export default {
    data() {
        return {
            apiUrl: 'https://api.gioconostro.com/api/v1/'
        };
    },

    methods: {
        sendRequest(url, data = {}, type = 'get') {
            return axios({
                method: type,
                url: url,
                data: data,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            });
        },
        showErrorAlert(error) {
            this.isShowAlertModal = true;
            let errorMsg = error.message;
            if (error.response && error.response.data && error.response.data.message)
                errorMsg = error.response.data.message;
            this.alertModalText = errorMsg;
            console.log(error.message, error.response.data.message);
        },

    },
}

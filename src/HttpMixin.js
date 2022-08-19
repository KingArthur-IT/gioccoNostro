import axios from "axios";
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            apiUrl: 'https://api.gioconostro.com/api/v1/',
        };
    },

    methods: {
        ...mapMutations(['addGameData', 'setGameViewReady', 'setSearchEmail']),
        sendRequest(url, data = {}, type = 'get') {
            url = new URL(url);
            if(url.searchParams.get('page')) {
                data.params.page = url.searchParams.get('page');
            }
            return axios({
                method: type,
                url: url.origin + url.pathname,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                ...data
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
        async findGame(id){
            if(id) {
                this.setGameViewReady(false);
                this.addGameData({});
                await this.sendRequest(this.apiUrl + 'game/show/' + id)
                    .then((response) => {
                        this.addGameData(response.data.data);
                        this.setGameViewReady(true);
                    })
                    .catch((error) => {
                        // this.setGameViewReady(true);
                        this.showErrorAlert(error)
                    });
            }
        }

    },
}

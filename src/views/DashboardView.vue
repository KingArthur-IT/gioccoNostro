<template>
  <div class="dashboard">
      <div class="games" v-if="games && games.length">
        <div class="games__title">
            <span>Your Games</span>
            <div class="games__hide">Hide</div>
        </div>
        <div v-for="game in games" :key="game.id" class="game__item">
            <span class="game__type">{{game.game_type_name}}</span>
            <span class="game__price">${{game.price_code}}</span>
        </div>
    </div>
    <div class="dashboard__hero">
        <div class="dashboard__head">
            <div class="dashboard__head-item">
                <EarningIcon />
                <div class="dashboard__item-content">
                    <p class="dashboard__item-title">Current Earnings:</p>
                    <span class="dashboard__item-num">${{dashboardInfo.earning}}</span>
                </div>
            </div>
            <div class="dashboard__head-item">
                <OutputIcon />
                <div class="dashboard__item-content">
                    <p class="dashboard__item-title">Next Output:</p>
                    <span class="dashboard__item-num">${{dashboardInfo.expected}}</span>
                </div>
            </div>
            <div class="dashboard__head-item">
                <GamesIcon />
                <div class="dashboard__item-content">
                    <p class="dashboard__item-title">Completed Games</p>
                    <span class="dashboard__item-num">{{dashboardInfo.finished}}</span>
                </div>
            </div>
        </div>
        <div class="dashboard__views">
        </div>
    </div>
  </div>
</template>

<script>
import EarningIcon from '@/components/Icons/EarningIcon.vue'
import GamesIcon from '@/components/Icons/GamesIcon.vue'
import OutputIcon from '@/components/Icons/OutputIcon.vue'
import axios from 'axios'

export default {
    components:{
        EarningIcon, GamesIcon, OutputIcon
    },
    data(){
        return{
            games: [],
            dashboardInfo: {
                earning: 0,
                expected: 0,
                finished: 0
            }
        }
    },
    async mounted(){
        await axios.get('https://api.gioconostro.com/api/v1/user/games', 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then((response) => {
                if (response && response.statusText === 'OK'){
                    this.games = [...response.data.page.data];
                }
            })
            .catch((error) => {
                console.log(error.message)
            });
        await axios.get('https://api.gioconostro.com/api/v1/user/dashboard', 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then((response) => {
                if (response && response.statusText === 'OK'){
                    this.dashboardInfo = Object.assign({}, response.data.data)
                }
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
}
</script>

<style scoped>
.dashboard{
    display: flex;
}

.games{
    padding: 24px 20px 0 20px;
    overflow: hidden;
    border-radius: 20px;
    background: var(--section-background);
    min-width: 308px;
    max-height: 88vh;
    margin-right: 23px;
}
.games__title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}
.games__title span{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    color: var(--primary-text-color);
}
.games__hide{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
    text-decoration-line: underline;
    color: var(--gray-text-color);
}
.game__item{
    background: var(--selected-background);
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 14px 16px;
    margin-bottom: 5px;
    cursor: pointer;
}
.game__type, 
.game__price{
    color: var(--primary-text-color);
    font-weight: 500;
    font-size: 14px;
    line-height: 120%
}
.dashboard__hero{
    width: 100%;
}
.dashboard__head{
    width: 100%;
    display: flex;
    margin-bottom: 24px;
}
.dashboard__head-item{
    height: 119px;
    background: var(--section-background);
    padding: 34px 20px;
    flex-basis: 33.3%;
    margin-right: 20px;
    border-radius: 10px;
    display: flex;
}
.dashboard__head-item:last-child{
    margin-right: 0;
}
.dashboard__item-content{
    display: flex;
    flex-direction: column;
    margin-left: 15px;
}
.dashboard__item-title{
    margin: 0;
    margin-bottom: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: var(--gray-text-color);
}
.dashboard__item-num{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
    color: var(--primary-text-color);
}

.dashboard__views{
    width: 100%;
    background-color: var(--section-background);
    border-radius: 20px;
    height: 70vh;
    position: relative;
}
.dashboard__views:after{
    content: '';
    position: absolute;
    background: url('@/assets/img/games-bg.png') no-repeat;
    top: 5%;
    bottom: 0;
    left: 20%;
    right: 0;
}
</style>
<template>
    <div class="border-radius sidebar">
        <div class="sidebar__top-section">
            <div class="sidebar__title">Giocco Nostro</div>
            <div class="sidebar__user-info">
                <div class="sidebar__avatar">{{avatar}}</div>
                <div class="sidebar__user">
                    <p class="sidevar__username">{{userName}}</p>
                    <p class="sidebar__user-id">ID: {{id}}</p>
                </div>
            </div>
            <ul class="siderbar__page-links">
                <li class="sidebar__page-link" :class="{'active-link': $route.meta.title === 'Dashboard'}">
                    <DashboardIcon class="sidebar__page-icon"/>
                    <p>Dashboard</p>
                </li>
                <li class="sidebar__page-link" :class="{'active-link': $route.meta.title === 'Market'}">
                    <MarketIcon class="sidebar__page-icon"/>
                    <p>Market</p>
                </li>
                <li class="sidebar__page-link" :class="{'active-link': $route.meta.title === 'Transitions'}">
                    <TransitionsIcon class="sidebar__page-icon"/>
                    <p>Transitions</p>
                </li>
            </ul>
        </div>
        <div class="sidebar__bottom-section">
            <div class="sidebar__information-wrapper">
                <p class="sidebar__information-title">Information</p>
                <p class="sidebar__information-item">Game Rules</p>
                <p class="sidebar__information-item">Terms of Use</p>
            </div>
            <ul class="siderbar__settings-links">
                <li class="sidebar__settings-link">
                    <SettingsIcon class="sidebar__page-icon"/>
                    <p>Settings</p>
                </li>
                <li class="sidebar__settings-link">
                    <LogoutIcon class="sidebar__page-icon"/>
                    <p>Exit</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MorePoints from '@/components/Icons/MorePoints.vue'
import DashboardIcon from '@/components/Icons/DashboardIcon.vue'
import MarketIcon from '@/components/Icons/MarketIcon.vue'
import TransitionsIcon from '@/components/Icons/TransitionsIcon.vue'
import SettingsIcon from '@/components/Icons/SettingsIcon.vue'
import LogoutIcon from '@/components/Icons/LogoutIcon.vue'

export default {
    components: {
        MorePoints, DashboardIcon, MarketIcon, TransitionsIcon,
        SettingsIcon, LogoutIcon
    },
    setup(){
        const userName = 'Adam Simpson',
              avatar = 'AS',
              id = '64216342136133';
        
        return {
            userName, avatar, id
        }
    }
}
</script>

<style scoped>
.sidebar{
    background-color: var(--section-background);
    min-width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.sidebar__top-section{
    
}
.sidebar__bottom-section{
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.sidebar__title{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 120%;
    color: var(--primary-text-color);
    padding: 27px 0 29px 26px;
}
.sidebar__user-info{
    padding: 22.5px 20px;
    background: var(--selected-background);
    display: flex;
    align-items: center;
    margin-bottom: 27px;
}
.sidebar__avatar{
    width: 42px;
    height: 42px;
    left: 0px;
    top: 0px;
    background: #F2521D;
    border: 1px solid #FFFFFF;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 114%;
    margin-right: 10px;
}
.sidebar__user{

}
.sidevar__username{
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: var(--primary-text-color);
    margin-bottom: 5px;
}
.sidebar__user-id{
    margin: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 125%;
    color: #646A7D;
}
.sidebar__more{
    cursor: pointer;
}
.siderbar__page-links{
    padding: 0;
    margin: 0;
}
.sidebar__page-link{
    padding: 17px 28px;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.active-link.sidebar__page-link,
.sidebar__page-link:hover{
    background: var(--selected-background)
}
.sidebar__page-icon{
    margin-right: 17px;
}
.sidebar__page-link p{
    margin: 0;
    color: var(--gray-text-color);
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
}
.active-link.sidebar__page-link p,
.sidebar__page-link:hover p{
    color: var(--primary-text-color);
}
.sidebar__information-wrapper{
    
}
.sidebar__information-title{
    margin: 0;
    margin-bottom: 14px;
    padding-left: 26px;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #3C4254;
}
.sidebar__information-item{
    margin: 0;
    padding: 14px 26px;
    color: var(--gray-text-color);
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    cursor: pointer;
}
.siderbar__settings-links{
    padding: 0;
    margin: 0;
    margin-bottom: 18px;
}
.sidebar__settings-link{
    padding: 0;
    padding: 18px 28px;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.sidebar__settings-link p{
    margin: 0;
    color: var(--gray-text-color);
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
}
.sidebar__settings-link:hover p{
    color: var(--primary-text-color)
}
</style>
<template>
    <ul class="siderbar__page-links">
        <router-link to="/dashboard" class="router-link" @click="$emit('closeMobileMenu')">
            <li class="sidebar__page-link" :class="{'active-link': $route.meta.title === 'Dashboard'}">
                <DashboardIcon class="sidebar__page-icon"/>
                <p>Dashboard</p>
            </li>
        </router-link>
        <router-link to="/market" class="router-link" @click="$emit('closeMobileMenu')">
            <li class="sidebar__page-link" :class="{'active-link': $route.meta.title === 'Market'}">
                <MarketIcon class="sidebar__page-icon"/>
                <p>Market</p>
            </li>
        </router-link>
        <router-link to="/transactions" class="router-link" @click="$emit('closeMobileMenu')">
            <li class="sidebar__page-link" :class="{'active-link': $route.meta.title === 'Transitions'}">
                <TransitionsIcon class="sidebar__page-icon"/>
                <p>Transactions</p>
            </li>
        </router-link>
    </ul>
</template>

<script>
import DashboardIcon from '@/components/Icons/DashboardIcon.vue'
import MarketIcon from '@/components/Icons/MarketIcon.vue'
import TransitionsIcon from '@/components/Icons/TransitionsIcon.vue'

export default {
    components: {
        DashboardIcon, MarketIcon, TransitionsIcon,
    },
}
</script>

<style scoped>
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
</style>
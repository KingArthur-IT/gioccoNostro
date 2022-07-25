<template>
    <div class="border-radius sidebar">
        <div class="sidebar__top-section">  
            <router-link to="/">
                <div class="sidebar__title">
                    Giocco Nostro
                </div>
            </router-link>    
            <UserInfo />
            <PageLinks />
        </div>
        <div class="sidebar__bottom-section">
            <InformationSection />
        </div>
    </div>
</template>

<script>
import PageLinks from '@/components/PageLinks.vue'
import UserInfo from '@/components/UserInfo.vue'
import InformationSection from '@/components/InformationSection.vue'

export default {
    components: {
        PageLinks, UserInfo, InformationSection
    },
}
</script>

<style scoped>
.sidebar{
    background-color: var(--section-background);
    min-width: 250px;
    min-height: 100vh;
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

@media screen and (max-width: 1020px) {
    .sidebar{
        min-width: auto;
        width: 250px;
    }
    .sidebar__user{
        width: 50%;
    }
}

@media screen and (max-width: 860px) {
    .sidebar{
        display: none;
    }
}
</style>
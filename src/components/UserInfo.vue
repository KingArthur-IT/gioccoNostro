<template>
    <router-link to="/profile" class="router-link" @click="$emit('closeMobileMenu')">
        <div class="sidebar__user-info">
            <div class="sidebar__avatar">{{avatar}}</div>
            <div class="sidebar__user">
                <p class="sidevar__username">{{getUserData.userName}}</p>
                <p class="sidebar__user-id">ID: {{getUserData.userId}}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    components: {
        
    },
    setup(){
        const store = useStore();

        const getUserData = computed(() => {
            return {
                userName: store.state.userName,
                userLastName: store.state.userLastName,
                userId: store.state.userId
            }
        })

        const getFirstLetter = (value) => {
            if (value == null)
                return ''
            else return String(value).slice(0,1).toUpperCase()
        }

        const avatar = computed(() => {
            return getFirstLetter(store.state.userName) + getFirstLetter(store.state.userLastName)
        });
 
        return {
            avatar, getUserData
        }
    }
}
</script>

<style scoped>
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

</style>
<template>
    <div v-if="isLeft" class="arrow">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'enable': isEnable}">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 5.66591L0.75 14.3349C0.75 17.3549 2.889 19.2499 5.916 19.2499L14.084 19.2499C17.111 19.2499 19.25 17.3649 19.25 14.3349L19.25 5.66591C19.25 2.63591 17.111 0.749908 14.084 0.749908L5.916 0.749908C2.889 0.749908 0.75 2.63591 0.75 5.66591Z" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.91394 9.99991L14.0859 9.99991" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.67773 13.7479L5.91373 9.99992L9.67773 6.25192" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
    <div v-else class="arrow">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{'enable': isEnable}">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 5.66591L19.25 14.3349C19.25 17.3549 17.111 19.2499 14.084 19.2499L5.916 19.2499C2.889 19.2499 0.75 17.3649 0.75 14.3349L0.75 5.66591C0.75 2.63591 2.889 0.749908 5.916 0.749908L14.084 0.749908C17.111 0.749908 19.25 2.63591 19.25 5.66591Z" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.0861 9.99991L5.91406 9.99991" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.3223 13.7479L14.0863 9.99992L10.3223 6.25192" stroke="#757B8C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        isLeft: {
            type: Boolean,
            default: true
        },
        isEnable: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style>
.arrow{
    cursor: pointer;
}
.enable path{
    stroke: #246CF9;
}

</style>
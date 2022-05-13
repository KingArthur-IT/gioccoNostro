<template>
    <svg class="svg-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18C7.52201 18.0023 6.06639 17.639 4.76281 16.9425L8.21754e-06 18L1.05841 13.239C0.361593 11.9348 -0.00199311 10.4786 8.21754e-06 9C8.21754e-06 4.0293 4.02931 0 9 0ZM9.9 4.5H8.1V10.8H13.5V9H9.9V4.5Z" fill="#757B8C"/>
    </svg>
</template>

<script>
export default {

}
</script>

<style scoped>
.svg-icon{
    cursor: pointer;
}
.svg-icon path{
    fill: var(--gray-text-color);
}
.sidebar__page-link:hover .svg-icon path,
.svg-icon:hover path,
.active-link .svg-icon path{
    fill: var(--primary-button-color);
}
</style>
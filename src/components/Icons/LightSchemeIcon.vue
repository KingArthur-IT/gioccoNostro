<template>
    <svg class="svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.25 6.75C12.25 5.3315 12.5695 3.9905 13.127 2.7815C12.919 2.7675 12.7115 2.75 12.5 2.75C7.3915 2.75 3.25 6.8915 3.25 12C3.25 17.1085 7.3915 21.25 12.5 21.25C16.097 21.25 19.207 19.1925 20.737 16.1945C15.967 15.6885 12.25 11.6545 12.25 6.75Z" stroke="#E5E6ED" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"/>
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
    stroke: var(--primary-svg-color);
}
.svg-icon:hover path{
    stroke: var(--primary-button-color);
}
</style>
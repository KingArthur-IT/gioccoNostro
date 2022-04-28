<template>
    <div class="select-wrapper">
        <select class="select secondary-text-color">
            <option value="volvo">Eng</option>
            <option value="saab">Ua</option>
        </select>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.select-wrapper{
    width: 50px;
    position: relative;
}
.select{
    background-color: var(--section-background);
    border: none;
    outline: none;
    appearance: none;
    width: 50px;
    cursor: pointer;
    z-index: 2;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.04em;
    text-transform: uppercase;
}
.select-wrapper::after {
  content: "";
  position: absolute;
  top: 6px;
  right: 0;
  width: 9px;
  height: 8px;
  background-color: #D7D7DA;
  color: #fff;
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  z-index: 0;
}
</style>
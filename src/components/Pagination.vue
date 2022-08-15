<template>
  <div class="pagination">
    <PageArrow :isLeft="true"
               :isEnable="isLeftArrowEnable"
               @click="goToPage( linksArray[0].url, isLeftArrowEnable)" />
    <div class="page-nums-wrapper">
      <div v-for="(item, i) in linksArray" :key="item.label">

                <span :class="{'active-page': item.active, 'enable':  (item.label != '...')}" v-if="i != 0 && i != (linksArray.length - 1)"
                      class="page-item"
                      @click="goToPage(item.url, true)">
                    {{ item.label }}
                </span>
      </div>
    </div>
    <PageArrow :isLeft="false" :isEnable="isRightArrowEnable"
               @click="goToPage( linksArray[linksArray.length - 1].url, isRightArrowEnable)" />
  </div>
</template>

<script>
import {computed} from 'vue'
import PageArrow from '@/components/UIKit/PageArrow.vue'

export default {
  components: {
    PageArrow
  },
  emits: ['pageClicked'],
  props: {
    currentPage: {
      type: Number,
      default: 0
    },
    linksArray: {
      type: Array,
      default: []
    },

  },
  setup(props, {emit}) {

    const isLeftArrowEnable = computed(() => {
      return props.currentPage > 1
    })
    const isRightArrowEnable = computed(() => {
      return props.currentPage < (props.linksArray.length - 2)
    })

    const goToPage = (page, isEnable) => {
      if(isEnable) {
        emit('pageClicked', page)
      }
    }

    return {
      isLeftArrowEnable, isRightArrowEnable,
      goToPage
    }
  },
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.page-nums-wrapper {
  display: flex;
}

.page-item.enable {
  cursor: pointer;
}
.page-item {
  color: var(--gray-text-color);
  margin-right: 25px;
}

.page-item:first-child {
  margin-left: 20px;
}

.page-item:last-child {
  margin-right: 20px;
}

.active-page {
  color: var(--primary-text-color)
}


</style>
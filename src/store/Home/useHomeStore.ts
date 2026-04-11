import { defineStore } from 'pinia'
import { ref } from 'vue'

const useHomeStore = defineStore('homeStore', () => {
  const isCollapse = ref(false)

  /**
   * 切换侧边栏折叠状态
   */
  function changeCollapse() {
    isCollapse.value = !isCollapse.value
  }

  return {
    isCollapse,
    // 下面是方法
    changeCollapse,
  }
})

export default useHomeStore

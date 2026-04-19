import { defineStore } from 'pinia'
import { ref } from 'vue'

const useProjectConfigStore = defineStore('projectConfigStore', () => {
  const Pj_Config = ref({
    isRemember: true,
  })

  return {
    Pj_Config,
  }
})

export default useProjectConfigStore

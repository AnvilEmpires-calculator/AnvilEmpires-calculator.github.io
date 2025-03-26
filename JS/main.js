const { createApp, ref} = Vue

createApp({
  setup() {
    const message = ref('Vue is functional')
    
    function ChangeTab(tab) {

    }

    return {
      message
    }
  }
}).mount('#app')
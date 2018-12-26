<template>
  <div class="player">
      <button @click="getTracks" />
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'MusicPlayer',
  data () {
    return {
    }
  },
  methods: {
    getTracks () {
      const data = api().get()
        .then(response => {
          console.log(response.data)
        })
      return data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

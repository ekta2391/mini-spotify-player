<template>
  <div class="home">
    <MusicPlayer />
  </div>
</template>

<script>
import MusicPlayer from './MusicPlayer'
import api from '../services/api'
import store from '../store'

export default {
  name: 'Home',
  store,
  components: {
    MusicPlayer
  },
  created () {
    api().get()
      .then(response => {
        this.$store.commit('init', response.data)
        // console.log(this.$store.state.musicTracks.tracks[0].cover_image)
      })
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

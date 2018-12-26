<template>
  <div class="home">
    <MusicPlayer />
  </div>
</template>

<script>
import MusicPlayer from './MusicPlayer'
export default {
  name: 'Home',
  components: {
    MusicPlayer
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

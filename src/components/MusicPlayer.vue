<template>
  <div class="player">
    <div class="album-art" :style="albumArtStyle">

    </div>
    <div class="track-player">

    </div>
  </div>
</template>

<script>

import store from '../store'

export default {
  name: 'MusicPlayer',
  data () {
    return {
      coverImage: ''
    }
  },
  mounted () {
    console.log(this.$store.state)
    // this.coverImage = this.$store.state.musicTracks.tracks[0].cover_image
  },
  computed: {
    albumArtStyle () {
      return { 'background-image': `url('${this.$store.state.musicTracks.tracks[0].cover_image}')`, 'background-size': 'cover' }
    }
  }
}
</script>

<style scoped>
  .player {
    width: 40%;
    height: 70%;
    background-color: black;
    display: flex;
    flex-direction: column;
  }
  .album-art {
    flex-grow: 2;
  }
  .track-player {
    flex-grow: 1;
  }
</style>

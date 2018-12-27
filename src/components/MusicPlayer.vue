<template>
  <div class="player">
    <div class="album-art" :style="albumArtStyle">

    </div>
    <div class="track-player">
      <audio controls :src="currentTrack.url" type="audio/mpeg"/>
      <button @click="prevTrack">Prev</button>
      <button @click="nextTrack">Next</button>
    </div>
  </div>
</template>

<script>

import store from '../store'

export default {
  name: 'MusicPlayer',
  data () {
    return {
    }
  },
  computed: {
    albumArtStyle () {
      return { 'background-image': `url('${this.$store.state.currentTrack.cover_image}')`, 'background-size': 'cover' }
    },
    currentTrack () {
      return this.$store.state.currentTrack
    }
  },
  methods: {
    nextTrack () {
      this.$store.commit('nextTrack')
    },
    prevTrack () {
      this.$store.commit('prevTrack')
    }
  }
}
</script>

<style scoped>
  .player {
    width: 40%;
    height: 70%;
    background-color: white;;
    display: flex;
    flex-direction: column;
  }
  .album-art {
    flex-grow: 8;
  }
  .track-player {
    flex-grow: 1;
  }
</style>

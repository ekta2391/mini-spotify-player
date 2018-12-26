<template>
  <div class="player">
    <div class="album-art" :style="albumArtStyle">

    </div>
    <div class="track-player">
      <button @click="nextTrack">Click</button>
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
    }
  },
  methods: {
    nextTrack () {
      this.$store.commit('nextTrack')
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

<template>
  <div class="player">
    <div class="album-art" :style="albumArtStyle">

    </div>
    <div class="track-player">
      <!-- <audio controls :src="currentTrack.url" type="audio/mpeg"/>
      <button @click="prevTrack">Prev</button>
      <button @click="nextTrack">Next</button> -->
      <div class="play-buttons">
        <img :src="backImg"/>
        <img :src="playImg"/>
        <img :src="forwardImg"/>
      </div>
      <div class="progress-bar"></div>
    </div>
  </div>
</template>

<script>

import store from '../store'
import backImg from '../assets/back_idle.png'
import backImgHover from '../assets/back_hover.png'
import playImg from '../assets/play_idle.png'
import playImgHover from '../assets/play_hover.png'
import forwardImg from '../assets/forward_idle.png'
import forwardImgHover from '../assets/forward_hover.png'
import pauseImg from '../assets/pause_idle.png'
import pauseImgHover from '../assets/pause_hover.png'

export default {
  name: 'MusicPlayer',
  data () {
    return {
      backImg,
      backImgHover,
      playImg,
      playImgHover,
      forwardImg,
      forwardImgHover,
      pauseImg,
      pauseImgHover
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
    flex-grow: 6;
  }
  .track-player {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
  }
  .play-buttons {
    margin-top: 15%;
  }
  .play-buttons img{
    margin: 5px 12px;
  }
</style>

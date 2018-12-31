<template>
  <div class="player">
    <div class="album-art" :style="albumArtStyle">

    </div>
    <div class="track-player">
      <audio ref="audioPlayer" controls :src="currentTrack.url" type="audio/mpeg"/>
      <div class="play-buttons">
        <img role="button" @click="prevTrack" :src="backImg"/>
        <img v-if="!playing" role="button" @click="playTrack" :src="playImg"/>
        <img v-else role="button" @click="playTrack" :src="pauseImg"/>
        <img role="button" @click="nextTrack" :src="forwardImg"/>
      </div>
      <div class="track-info">
        <p>{{ store ? store.state.musicTracks.artist : '' }}</p>
        <div class="player-progress">
          <div :style="progressStyle" class="progress-bar"></div>
        </div>
        <p>{{ currentTrack.name || '' }}</p>
      </div>
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
      store,
      audioRef: {},
      backImg,
      backImgHover,
      playImg,
      playImgHover,
      forwardImg,
      forwardImgHover,
      pauseImg,
      pauseImgHover,
      playing: false
    }
  },
  created () {
    this.audioRef = this.$refs
  },
  mounted () {
    console.log(this.store)
    this.store = this.$store.commit('getStore')
    this.audioPlay = this.$refs
    console.log(this.audioRef.audioPlayer.played)
  },
  computed: {
    albumArtStyle () {
      return { 'background-image': `url('${this.$store.state.currentTrack.cover_image}')`, 'background-size': 'cover' }
    },
    progressStyle () {
      return {
        width: '50%',
        height: '100%',
        'background-color': '#6ED7C5',
        top: '0',
        left: '0',
        right: '0'
      }
    },
    currentTrack () {
      return this.$store.state.currentTrack
    }
  },
  methods: {
    playTrack () {
      this.playing === false ? this.audioRef.audioPlayer.play() : this.audioRef.audioPlayer.pause()
      this.playing = !this.playing
    },
    nextTrack () {
      this.$store.commit('nextTrack')
    },
    prevTrack () {
      this.$store.commit('prevTrack')
    }
  }
}
</script>

<style lang='scss' scoped>
  .player {
    max-width: 480px;
    max-height: 645px;
    width: 40%;
    height: 70%;
    background-color: white;;
    display: flex;
    flex-direction: column;
  }
  .album-art {
    flex-grow: 10;
  }
  .track-player {
    display: flex;
    flex-direction: row;
    audio {
      display: none;
    }
  }
  .play-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
     margin: 5px 12px;
     &:hover {
      cursor: pointer;
      }
    }
  }
  .track-info {
    flex-grow: 1;
    text-align: left;
    margin-left: 20px;
  }
  .player-progress {
    width: 90%;
    height: 2px;
    background-color: #C9D0CE;
  }
</style>

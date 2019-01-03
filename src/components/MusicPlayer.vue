<template>
  <div class="player">
    <div class="album-art" :style="albumArtStyle">

    </div>
    <div class="track-player">
      <audio id="audioTag" ref="audioPlayer" controls :src="currentTrack.url" type="audio/mpeg"/>
      <div class="play-buttons">
        <span
        role="button"
        class="back-img-btn"
        @click.prevent="prevTrack"
        >
        </span>
        <span
        role="button"
        v-if="!playing"
        class="play-img-btn"
        @click.prevent="playTrack"
        >
        </span>
        <span
        role="button"
        v-else
        class="pause-img-btn"
        @click.prevent="playTrack"
        >
        </span>
        <span
        role="button"
        class="next-img-btn"
        @click.prevent="nextTrack"
        >
        </span>
      </div>
      <div class="track-info">
        <p>{{ storeState.musicTracks.artist || '' }}</p>
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
      audioRef: undefined,
      currentSeconds: 0,
      durationSeconds: 0,
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
  computed: {
    albumArtStyle () {
      return { 'background-image': `url('${this.$store.state.currentTrack.cover_image}')`, 'background-size': 'cover' }
    },
    progressStyle () {
      return {
        width: this.durationSeconds ? (this.currentTime / this.durationSeconds) * 100 + '%' : '0%',
        height: '100%',
        'background-color': '#6ED7C5',
        top: '0',
        left: '0',
        right: '0'
      }
    },
    currentTrack () {
      return this.$store.state.currentTrack
    },
    currentTime () {
      return this.currentSeconds
    },
    storeState () {
      return this.$store.state
    }
  },
  methods: {
    playTrack () {
      this.audioRef = this.$refs.audioPlayer
      this.audioRef.addEventListener('timeupdate', this.update)
      this.playing === false ? this.audioRef.play() : this.audioRef.pause()
      this.playing = !this.playing
    },
    nextTrack () {
      this.$store.commit('nextTrack')
      this.currentSeconds = 0
      this.playing = false
    },
    prevTrack () {
      this.$store.commit('prevTrack')
      this.currentSeconds = 0
      this.playing = false
    },
    update (e) {
      this.currentSeconds = parseInt(this.audioRef.currentTime)
      this.durationSeconds = parseInt(this.audioRef.duration)
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
    margin-left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    img {
     margin: 5px 12px;
     &:hover {
      cursor: pointer;
      }
    }

    span {
      width: 25px;
      height: 20px;
      background-repeat: no-repeat;
    }
  }
  .back-img-btn {
    background-image: url('../assets/back_idle.png');
    &:hover {
      background-image: url('../assets/back_hover.png');
      cursor: pointer;
    }
  }
  .next-img-btn {
    background-image: url('../assets/forward_idle.png');
    &:hover {
      background-image: url('../assets/forward_hover.png');
      cursor: pointer;
    }
  }
  .play-img-btn {
    background-image: url('../assets/play_idle.png');
    margin-left: 10px;
    &:hover {
      background-image: url('../assets/play_hover.png');
      cursor: pointer;
    }
  }
  .pause-img-btn {
    background-image: url('../assets/pause_idle.png');
    margin-left: 10px;
    &:hover {
      background-image: url('../assets/pause_hover.png');
      cursor: pointer;
    }
  }
  .track-info {
    flex-grow: 10;
    text-align: left;
    margin-left: 20px;
  }
  .player-progress {
    width: 90%;
    height: 2px;
    background-color: #C9D0CE;
  }
</style>

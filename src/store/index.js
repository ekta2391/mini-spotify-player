import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      musicTracks: null,
      currentTrack: {}
    },
    mutations: {
      init (state, tracks) {
        state.musicTracks = tracks
        state.currentTrack = tracks.tracks[0]
      },
      nextTrack (state) {
        let currIdx = 0
        state.musicTracks.tracks.find((track, index) => {
          if (track.url === state.currentTrack.url) {
            currIdx = index
          }
        })
        state.currentTrack = state.musicTracks.tracks[currIdx + 1]
        console.log(state.currentTrack)
      },
      prevTrack (state) {
        let currIdx = 0
        state.musicTracks.tracks.find((track, index) => {
          if (track.url === state.currentTrack.url) {
            currIdx = index
          }
        })
        state.currentTrack = state.musicTracks.tracks[currIdx - 1]
        console.log(state.currentTrack)
      }
    }
  }
)

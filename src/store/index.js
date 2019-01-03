import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      musicTracks: [],
      currentTrack: {}
    },
    mutations: {
      init (state, tracks) {
        state.musicTracks = tracks
        state.currentTrack = tracks.tracks[0]
        state.currentTrack.index = 0
      },
      nextTrack (state) {
        let currIdx = 0
        if (state.currentTrack.index < state.musicTracks.tracks.length - 1) {
          state.musicTracks.tracks.find((track, index) => {
            if (track.url === state.currentTrack.url) {
              currIdx = index
            }
          })
          state.currentTrack = state.musicTracks.tracks[currIdx + 1]
          state.currentTrack.index = currIdx + 1
        } else {
          state.currentTrack = state.musicTracks.tracks[0]
          state.currentTrack.index = 0
        }
      },
      prevTrack (state) {
        let currIdx = 0
        if (state.currentTrack.index > 0) {
          state.musicTracks.tracks.find((track, index) => {
            if (track.url === state.currentTrack.url) {
              currIdx = index
            }
          })
          state.currentTrack = state.musicTracks.tracks[currIdx - 1]
          state.currentTrack.index = currIdx - 1
        } else {
          state.currentTrack = state.musicTracks.tracks[state.musicTracks.tracks.length - 1]
          state.currentTrack.index = state.musicTracks.tracks.length - 1
        }
      }
    }
  }
)

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      musicTracks: null
    },
    mutations: {
      init (state, tracks) {
        state.musicTracks = tracks
      }
      // addWord (state, word) {
      //   state.words.push(word)
      // },
      // deleteWord (state, word) {
      //   state.words = state.words.filter(obj => obj.headword !== word)
      // }
    }
  }
)

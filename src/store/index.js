import Vue from 'vue'
import Vuex from 'vuex'
import defaultState from "./default"

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => Object.assign({}, JSON.parse(JSON.stringify(defaultState)))
})

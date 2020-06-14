import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => {
    let user = {
      name: '',
      project: undefined
    }

    try {
      user = JSON.parse(localStorage.getItem('user'))
    } catch (error) {
      console.log(error)
    }


    return {
      token: localStorage.getItem('token') || '',
      user
    }
  },
  mutations: {
    authSuccess (state, { token, user }) {
      state.token = token
      state.user = user

      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    },
    logout (state) {
      state.user = {}
      state.token = ''
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.token
  },
  actions: {
    async login(ctx, { name, password }) {
      try {
        const data = (await axios.post('/users/login', { name, password })).data
        console.log(data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', data.user)
        axios.defaults.headers.common.Authorization = data.token

        ctx.commit('authSuccess', { ...data })
      } catch(e) {
        if (e.response && e.response.status === 401) {
          throw Error('Wrong Password')
        } else if (e.response && e.response.status === 404) {
          throw Error('User doesn\'t exist')
        }
        throw Error('Unknown Error')
      }
    },
    async signup(ctx, user) {
      try {
        await axios.post('/users/signup', user)
      } catch (err) {
        if (err.response && err.response.status === 409) {
          throw Error('Email already in use')
        }
        throw Error('Unknown Error')
      }
    },
    logout ({ commit }) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      delete axios.defaults.headers.common.Authorization

      commit('logout')
    },
    async getTasks({ state }) {
      try {
        console.log(state.user.project)
        const o = (await axios.get('/projects/' + state.user.project)).data
        console.log(o)
        return o
      } catch (e) {
        return []
      }
    }
  }
})



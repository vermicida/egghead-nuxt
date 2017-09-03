import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      todos: [
        {
          task: 'eat'
        },
        {
          task: 'sleep'
        },
        {
          task: 'code'
        }
      ]
    }
  })
}

export default store

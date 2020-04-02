// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuex from 'vuex'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions }) {
  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      navActive: false,
    },
    mutations: {
      toggleNav (state) {
        state.navActive = !state.navActive;
      }
    },
    actions: {
      toggleNav(context) {
        context.commit('toggleNav')
      }
    }
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

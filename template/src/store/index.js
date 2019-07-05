import Vue from "vue";
import Vuex from "vuex";
import createLogger from "../utils/logger";
import books from "./modules/books";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

// initial state
let initialState = {
  books: books.state
};

export default new Vuex.Store({
  modules: {
    books
  },
  mutations: {
    reset(state) {
      Object.keys(state).forEach(key => {
        Object.assign(state[key], initialState[key]);
      });
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

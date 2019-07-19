import gql from "graphql-tag";
import graphqlClient from "@/utils/graphql";

// initial state
const state = {
  book: {},
  bookList: []
};

// getters
const getters = {
  getBookList: state => {
    return state.bookList;
  }
};

// actions
const actions = {
  // eslint-disable-next-line standard/object-curly-even-spacing
  async fetchBook({ commit /*,  state, rootState */ }, id) {
    const response = await graphqlClient.query({
      query: gql`
        query Book($bookId: ID!) {
          book(id: $bookId) {
            id
            title
            author
            description
          }
        }
      `,
      variables: { bookId: id }
    });

    // Trigger the `setBook` mutation
    commit("setBook", response.data.book);
  },
  // eslint-disable-next-line standard/object-curly-even-spacing
  async fetchBookList({ commit /*,  state, rootState */ }) {
    const response = await graphqlClient.query({
      query: gql`
        query BookList {
          bookList {
            id
            title
            author
            description
          }
        }
      `
    });
    // Trigger the `setBookList` mutation
    commit("setBookList", response.data.bookList);
  }
};

// mutations
const mutations = {
  setBook(state, book) {
    state.book = book;
  },
  setBookList(state, bookList) {
    state.bookList = bookList;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

// api/server.js
const booksDb = require("./books");

const { ApolloServer } = require("apollo-server");

const typeDefs = `
  type Book {
    id: ID!
    title: String
    author: String
    description: String
  }
  type Query {
    book(id: ID!): Book
    bookList: [Book]
  }
`;

const resolvers = {
  Query: {
    book(_, { id }) {
      return booksDb.find(book => book.id === id);
    },
    bookList() {
      return booksDb;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

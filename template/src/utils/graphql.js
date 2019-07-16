import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink, concat } from "apollo-link";
import { baseUrl } from "@/static/BaseURL";

const fetch = function(url, options = {}) {
  const { method = "GET", body = {} } = options;

  return new Promise((resolve /*, reject */) => {
    wx.request({
      url,
      data: body,
      method,
      success: res => {
        const text = JSON.stringify(res.data);
        res.text = () => Promise.resolve(text);
        return resolve(res || {});
      },
      complete: res => {
        return res;
      }
    });
  });
};

const httpLink = new HttpLink({
  uri: baseUrl,
  fetch: fetch
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = wx.getStorageSync("authorization") || null;
  operation.setContext({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return forward(operation);
});

const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

export default apolloClient;


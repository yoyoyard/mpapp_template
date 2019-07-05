import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
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

export default new ApolloClient({
  // Provide the URL to the API server.
  link: createHttpLink({
    uri: baseUrl,
    fetch: fetch
  }),
  // Using a cache for blazingly
  // fast subsequent queries.
  cache: new InMemoryCache()
});

import axios from "axios";
import Oauth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

const ck = "ck_17229b1ac151427ad1f297b0d4862b181b654df2";
const cs = "cs_317787e60806c51d45e71a430cbfd29e148240ea";
const baseURL = "https://tao.muha.asia/wp-json";
// connect Woocommerce
const Woocommerce = {
  getItems: (endPoint) => {
    return makeRequest(endPoint);
  },
  getProductByID: id => {
    return makeRequest("/wc/v3/products/" + id);
  }
};

function makeRequest(endpoint, method = "GET") {
  const oauth = getOauth();

  const requestData = {
    url: baseURL + endpoint,
    method
  };

  const requestHTTP =
    requestData.url + "?" + jQuery.param(oauth.authorize(requestData));

  return axios.get(requestHTTP);
}

function getOauth() {
  return Oauth({
    consumer: {
      key: ck,
      secret: cs
    },
    signature_method: "HMAC-SHA1",
    hash_function: function(base_string, key) {
      return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
    }
  });
}

export default Woocommerce;
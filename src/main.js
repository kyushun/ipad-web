import Vue from "vue";
import App from "./App.vue";
import vueSmoothScroll from "vue2-smooth-scroll";
import Swal from "sweetalert2";
import UAParser from "ua-parser-js";

if (process.env.NODE_ENV === "production") {
  window.dataLayer = window.dataLayer || [];
  const gtag = function() {
    window.dataLayer.push(arguments);
  };
  const accessToken = (() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("access_token");
    if (token) {
      localStorage.accessToken = token;
      return token;
    } else {
      if (localStorage.accessToken) {
        // URL に access_token パラムを追加
        params.append("access_token", localStorage.accessToken);
        window.history.replaceState(
          {},
          null,
          `${window.location.pathname}?${params}`
        );
      }
      return localStorage.accessToken || null;
    }
  })();
  gtag("js", new Date());
  gtag("config", "UA-147956404-1", { user_id: accessToken });

  // URL フラグメントを削除
  if (window.location.hash !== "") {
    history.replaceState(
      {},
      null,
      window.location.href.replace(window.location.hash, "")
    );
  }
}

// 非推奨ブラウザ
const recommendedBrowsers = ["Blink", "WebKit", "Gecko"];
const ua = new UAParser();
if (
  !localStorage.confirmDeprecatedBrowser &&
  recommendedBrowsers.indexOf(ua.getEngine().name) == -1
) {
  setTimeout(() => {
    Swal.fire({
      type: "error",
      width: 600,
      title: "お使いのブラウザは対応していません",
      html:
        "このサイトはお使いのブラウザでの動作確認を行っておりません。<br />ページの表示が正しく行われない場合があります。",
      footer:
        '<a href="https://www.google.com/intl/ja_jp/chrome/" target="_blank">推奨ブラウザ (Google Chrome) をダウンロードする</a>',
      showCancelButton: false,
      confirmButtonText: "承知の上で閲覧する"
    }).then(result => {
      if (result.value) {
        localStorage.confirmDeprecatedBrowser = true;
      }
    });
  }, 2000);
}

Vue.config.productionTip = false;
Vue.use(vueSmoothScroll, { offset: -50, updateHistory: false });

new Vue({
  render: h => h(App)
}).$mount("#app");

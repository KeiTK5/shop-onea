import "../public/styles/globals.scss";
import "antd/dist/antd.css";
import LayoutComponent from "../src/component/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import Router from "next/router";
Router.events.on("routeChangeError", (err, url, { shallow }) => {
  console.log("Navigating to: " + "url: " + url, {
    cancelled: err.cancelled,
  });
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </Provider>
  );
}

export default MyApp;

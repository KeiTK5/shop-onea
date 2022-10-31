import "../public/styles/globals.scss";
import "antd/dist/antd.css";
import LayoutComponent from "../src/component/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import Router from "next/router";


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

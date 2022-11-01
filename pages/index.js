import Products from "../src/component/Products/Products";
import api from "./api/api";
export const getStaticProps = async () => {
  const res = await fetch(api.getData());
  const data = await res.json();
  return {
    props: {
      prod: data,
    },
  };
};
export default function Home({ prod }) {
  return <Products prod={prod} />;
}

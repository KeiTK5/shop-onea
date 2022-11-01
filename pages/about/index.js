export const getStaticProps = async () => {
  const res = await fetch("https://json-shop.herokuapp.com/data");
  const data = await res.json();
  return {
    props: { prod: data },
  };
};
export default function About({ prod }) {
  console.log(prod);
  return <div>about</div>;
}

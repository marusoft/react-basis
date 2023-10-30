import styles from "./product.module.css";

const img =
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
const price = "$ 22.3";
const title = "Mens Casual Premium Slim Fit T-Shirts";

const ProductList = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* passing props */}
      <Product img={img} price={price} title={title} />
      <Product img={img} price={price} title={title} />
      <Product img={img} price={price} title={title} />
      <Product img={img} price={price} title={title} />
    </div>
  );
};

const Product = (props) => {
  // console.log(props.img);
  // console.log(props.price);
  // console.log(props.title);
  // // or 
  // const { img, price, title } = props;
  // console.log(img);
  // console.log(price);
  // console.log(title);
  return (
    <div>
      <img src={props.img} alt="" className={styles.productImg} />
      <h1 className={styles.productTitle}>{props.title}</h1>
      <h3>{props.price}</h3>
    </div>
  );
};

export default ProductList;

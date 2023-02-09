import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from '@mui/material/Button';
import Product from './product'
import ProductsList from './productsList'
import { useState } from "react";

export default function Home() {
  const [isShownAdd, setIsShownAdd] = useState(false);
  const [isShownList, setIsShownList] = useState(true);
  const [products, setProducts] = useState([]);
  const handlerAddProduct = (product) => {
    setProducts([...products, product])
  }

  const handlerDeleteProduct = (product) => {
    var array = [...products]; // make a separate copy of the array
    var index = array.indexOf(product)
    if (index !== -1) {
      array.splice(index, 1);
    setProducts(array)
  }
  }


  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShownAdd(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const handleClick1 = () => {
    setIsShownList(current => !current);
  }

  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
<div className={styles.cont}>
<div className={styles.prList}>
{isShownList && <ProductsList handlerDeleteProduct={handlerDeleteProduct} productsList={products} />}
</div>
			<div className={styles.main}>
		  <Button onClick={handleClick} variant="contained">Add Product</Button>
      {isShownAdd && <Product className={styles.main}  handlerAddProduct={handlerAddProduct} products = {products} />}

			</div>
      </div>
		</div>
	);
}


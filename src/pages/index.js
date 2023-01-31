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
{isShownList && <ProductsList productsList={products} />}
</div>
			<div className={styles.main}>
		  <Button onClick={handleClick} variant="contained">Add Product</Button>
      {isShownAdd && <Product className={styles.main} setProducts={setProducts} />}
		  <Button onClick={handleClick1} variant="contained">Show Products</Button>

			</div>
      </div>
		</div>
	);
}


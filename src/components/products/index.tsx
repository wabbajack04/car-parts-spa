import { useEffect, useState } from "react";
import ProductCard from "../product-card";

import products from "../../api";
import { Product } from "../../types";

import styles from "./styles.module.css";

export default function Products() {
  const [parts, setParts] = useState<Product[] | null>(null);

  useEffect(() => {
    Promise.resolve().then(() => setParts(products));
  }, []);

  return (
    <div className={styles.container}>
      {parts?.map((el) => (
        <ProductCard
          key={el.id}
          title={el.title}
          image={el.image}
          price={el.price}
          description={el.description}
        />
      ))}
    </div>
  );
}

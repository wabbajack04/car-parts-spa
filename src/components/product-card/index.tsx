import { ProductCardProps } from "../../types";

import styles from "./styles.module.css";

export default function ProductCard({
  title,
  image,
  price,
  description,
}: ProductCardProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <img src={`/products/${image}`} alt={title} className={styles.picture} />
      <i>Стоимость: {price} ₽</i>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

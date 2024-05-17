import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Header from "../components/header";
import Products from "../components/products";

import styles from "./BaseLayout.module.css";

export default function BaseLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Carousel />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

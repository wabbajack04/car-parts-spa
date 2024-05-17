import Flickity from "react-flickity-component";

import PICTURE1 from "../../assets/campbell-3ZUsNJhi_Ik-unsplash.jpg";
import PICTURE2 from "../../assets/erik-mclean-ZRns2R5azu0-unsplash.jpg";
import PICTURE3 from "../../assets/grahame-jenkins-p7tai9P7H-s-unsplash.jpg";
import PICTURE4 from "../../assets/joey-banks-YApiWyp0lqo-unsplash.jpg";
import PICTURE5 from "../../assets/sven-d-a4S6KUuLeoM-unsplash.jpg";

import "flickity/css/flickity.css";
import styles from "./styles.module.css";

export default function Carousel() {
  return (
    <Flickity className={styles.container}>
      <img src={PICTURE1} />
      <img src={PICTURE2} />
      <img src={PICTURE3} />
      <img src={PICTURE4} />
      <img src={PICTURE5} />
    </Flickity>
  );
}

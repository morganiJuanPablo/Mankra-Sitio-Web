import { Link } from "react-router-dom";
import GalleryItemDetailContainer from "../../common/galleryItemDetail/GalleryItemDetailContainer";
import styles from "./ItemDetail.module.css"

const ItemDetail = () => {
  return (
    <div className={styles.container}>
      <section className={styles.headerItemDetail}>
        <img src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692358189/Mankra-Sitio-Web/Assets/LogoItemDetail_nircil.svg" alt="Logo Mankra" />
        <Link to="/">VOLVER</Link>
      </section>
      <GalleryItemDetailContainer />
    </div>
  );
};

export default ItemDetail;

import { Link } from "react-router-dom";
import GalleryItemDetailContainer from "../../common/galleryItemDetail/GalleryItemDetailContainer";
import styles from "./ItemDetail.module.css";
import CounterContainer from "../../common/counter/CounterContainer";
import SuscriptionContainer from "../../common/suscription/SuscriptionContainer";
import { Skeleton } from "@mui/material";

const ItemDetail = ({ product }) => {
  return (
    <>
      <section className={styles.headerItemDetail}>
        <img
          src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692358189/Mankra-Sitio-Web/Assets/LogoItemDetail_nircil.svg"
          alt="Logo Mankra"
          className={styles.logoMankra}
        />
        <Link to="/">INICIO</Link>
      </section>
      {product.id ? (
        <div className={styles.container}>
          <GalleryItemDetailContainer product={product} />
          <section className={styles.productDetail}>
            <h1>{product.title}</h1>
            <p className={styles.text}>{product.description}</p>
            <p className={styles.price}>{product.price}€</p>
          </section>
          <CounterContainer product={product} />
          <SuscriptionContainer />
          <p className={styles.legalText}>
            <b>Información sobre posibles costes adicionales. </b>
            En productos que se envíen desde fuera de la Unión Europea, puede
            que estés sujeto a cargos adicionales por IVA y, en su caso,
            aranceles aduaneros en tu país. Si necesitas más información sobre
            estos costes, por favor consulta con las autoridades fiscales y
            aduaneras de tu país.
          </p>
        </div>
      ) : (
        <div className={styles.contenedorSkeleton}>
          <Skeleton
            variant="rectangular"
            style={{
              gridArea: "a",
              height: "61.2rem",
              width: "100%",
              maxWidth: "61.2rem",
              margin: 0,
              padding: 0,
            }}
          />

          <Skeleton
            variant="rectangular"
            style={{
              gridArea: "b",
              height: "20rem",
              width: "100%",
              maxWidth: "19.6rem",
              margin: 0,
              padding: 0,
            }}
          />
          <Skeleton
            variant="rectangular"
            style={{
              gridArea: "c",
              height: "20rem",
              width: "100%",
              maxWidth: "19.6rem",
              margin: 0,
              padding: 0,
            }}
          />
          <Skeleton
            variant="rectangular"
            style={{
              gridArea: "d",
              height: "20rem",
              width: "100%",
              maxWidth: "19.6rem",
              margin: 0,
              padding: 0,
            }}
          />

          <Skeleton
            variant="rectangular"
            style={{
              gridArea: "e",
              height: "15rem",
              width: "100%",
              maxWidth: "81.5rem",
              margin: 0,
              padding: 0,
            }}
          />
        </div>
      )}
    </>
  );
};

export default ItemDetail;

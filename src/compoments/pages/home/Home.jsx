import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.contenedorGrid}>
      <div className={styles.item1}>
        <Link to="/itemDetail/bdx7pCkEwweh8bnseRo3">
          <img
            className={styles.imgHome}
            src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692024928/Mankra-Sitio-Web/Assets/close-up-person-working-dreamcatcher_phjqab.jpg"
            alt="Plumas en macramé"
          />
        </Link>
        <p>Comprar</p>
      </div>
      <div className={styles.item2}>
        <a href="">
          <img
            className={styles.imgHome}
            src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692022344/Mankra-Sitio-Web/Assets/dfdd_bk6aoo.jpg"
            alt=""
          />
        </a>
        <p>Comprar</p>
      </div>
      <div className={styles.item3}>
        <Link to="/cart">
          <img
            src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692026024/Mankra-Sitio-Web/Assets/Cart_2_vozxu9.svg"
            alt="Carrito"
          />
        </Link>
        <img
          className={styles.logo}
          src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692025050/Mankra-Sitio-Web/Assets/Logo_pvoyqt.svg"
          alt="Logo Mankra"
        />
      </div>
      <div className={styles.item4}>
        <a href="">
          <img
            className={styles.imgHome}
            src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692011993/Mankra-Sitio-Web/Assets/9_qcfldt.webp"
            alt="Colgante maseta"
          />
        </a>
        <p>Comprar</p>
      </div>
      <div className={styles.item5}>
        <a href="">
          <img
            className={styles.imgHome}
            src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692011993/Mankra-Sitio-Web/Assets/6b_yd6fjh.webp"
            alt=""
          />
        </a>
        <p>Comprar</p>
      </div>
      <div className={styles.item6}>
        <a href="">
          <img
            className={styles.imgHome}
            src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692011993/Mankra-Sitio-Web/Assets/8_gug4hm.webp"
            alt="Plumas en macramé"
          />
        </a>
        <p>Comprar</p>
      </div>
      <div className={styles.item7}>
        <a href="">
          <img
            className={styles.imgHome}
            src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692011991/Mankra-Sitio-Web/Assets/2b_nq9h4d.webp"
            alt="Colgante Pared"
          />
        </a>
        <p>Comprar</p>
      </div>
      <div className={styles.item8}>
        <a href="">
          <img
            className={styles.imgHome}
            src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692011991/Mankra-Sitio-Web/Assets/3b_wwbt3x.webp"
            alt="Atrapa sueños en macramé"
          />
        </a>
        <p>Comprar</p>
      </div>
      <div className={styles.item9}>
        <a href="">
          <img
            className={styles.imgHome}
            src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692011993/Mankra-Sitio-Web/Assets/10_h819xn.jpg"
            alt="Colgante Pared"
          />
        </a>
        <p>Comprar</p>
      </div>
      <div className={styles.item10}>
        <a href="">
          <img
            className={styles.imgHome}
            src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692011994/Mankra-Sitio-Web/Assets/1b_db4qaf.webp"
            alt="Colgante doble"
          />
        </a>
        <p>Comprar</p>
      </div>
      <div className={styles.footer}>
        <p className={styles.conceptotxt}>
          Mankra, un anagrama que viene de la unión de las palabras Macramé y
          Mantra. Conceptos que se basan en patrones repetitivos nudo a nudo, en
          la conexión con uno mismo, una forma de meditación ancestral.
        </p>
        <div className={styles.contenedorInstagram}>
          <p>Síguenos</p>
          <a href="https://www.instagram.com/mankra.macrame/" target="_blank">
            <img
              src="https://res.cloudinary.com/dqykftyy6/image/upload/v1692023834/Mankra-Sitio-Web/Assets/Instagram_2_m9wwzg.svg"
              alt="Ir a instagram"
            />
          </a>
          <p>© 2023 Todos los derechos reservados. Mankra.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;

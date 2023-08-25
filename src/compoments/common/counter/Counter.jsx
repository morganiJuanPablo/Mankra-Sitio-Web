import { Button } from "@mui/material";
import styles from "./Counter.module.css";

const Counter = ({ sumar, restar, counter, product }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contenedorCounter}>
        <Button
          sx={{ justifyContent: "start", paddingLeft: "1rem" }}
          disabled={counter <= 1 && true}
          disableRipple
          onClick={restar}
        >
          -
        </Button>
        <p className={styles.counter}>{counter}</p>
        <Button
          sx={{ justifyContent: "end", marginRight: "1rem" }}
          disabled={counter >= product.stock ? true : false}
          disableRipple
          onClick={sumar}
        >
          +
        </Button>
      </div>
      <button>Añadir</button>
      <button>Ir al carrito</button>
    </div>
  );
};

export default Counter;

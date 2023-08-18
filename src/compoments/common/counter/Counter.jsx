
import { Button } from "@mui/material";
import styles from "./Counter.module.css";

const Counter = ({ sumar, restar, counter }) => {
  return (
    <div className={styles.contenedor}>
      <Button disabled={counter <= 1 && true} disableRipple onClick={restar} className={styles.btnSubtract}>
        -
      </Button>
      <p>{counter}</p>
      <Button
        disabled={counter >= 5 ? true : false}
        disableRipple
        onClick={sumar}
        className={styles.btnToAdd}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;

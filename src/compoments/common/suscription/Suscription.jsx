import styles from "./Suscription.module.css";

const Suscription = ({ handleChange, handleSubmit, errors }) => {
  console.log(errors);
  return (
    <div>
      <p className={styles.titleSuscription}>
        Suscríbete para recibir todas las novedades
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Nombre Completo"
            name="name"
            className={!errors.name ? styles.input : styles.inputError}
            onChange={handleChange}
          />
          <span>{errors.name}</span>
        </div>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Correo Electrónico"
            name="email"
            className={!errors.email ? styles.input : styles.inputError}
            onChange={handleChange}
          />
          <span>{errors.email}</span>
        </div>
        <button type="submit" className={styles.btn}>
          Enviar
        </button>

        <div className={styles.checkboxContainer}>
          <input type="checkbox" required className={styles.checkbox} />
          <p className={styles.checkboxText}>
            Acepto todos los términos y condiciones
          </p>
        </div>
      </form>
    </div>
  );
};

export default Suscription;

import Suscription from "./Suscription";
import { useFormik } from "formik";
import * as Yup from "yup";

const SuscriptionContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (data) => {
      //podemos ponerle cualquier nombre, lo que recibe es el objeto creado en el formulario
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre completo es requerido"),
      email: Yup.string()
        .email("No es una dirección de email válida")
        .required("La dirección de email es requerida"),
    }),
    validateOnChange: false,
  });

  return (
    <Suscription
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default SuscriptionContainer;

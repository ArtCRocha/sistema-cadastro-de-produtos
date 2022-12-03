import React from "react";
import { Container, Form, Label, Input } from "./styles";
import FilledButton from "../filledButton";
import { cadastrarProduto } from "../../services/productsServices";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormCadastroProduto = () => {
  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      description: "",
      price: "",
    },
    onSubmit: (values) => {
      cadastrarProduto(
        values.image,
        values.name,
        values.description,
        values.price
      ).then(() => {
        window.location.href = "/";
      });
    },

    validationSchema: Yup.object({
      image: Yup.string().required("Este campo é obrigatório"),
      name: Yup.string().required("Este campo é obrigatório"),
      description: Yup.string().required("Este campo é obrigatório"),
      price: Yup.string().required("Este campo é obrigatório"),
    }),
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Label>Imagem</Label>
        <Input
          value={formik.image}
          name="image"
          onChange={formik.handleChange}
        />
        {formik.errors.name && <p>{formik.errors.name}</p>}
        <Label>Nome</Label>
        <Input value={formik.name} name="name" onChange={formik.handleChange} />
        {formik.errors.name && <p>{formik.errors.name}</p>}
        <Label>Descrição</Label>
        <Input
          value={formik.description}
          name="description"
          onChange={formik.handleChange}
        />
        {formik.errors.description && <p>{formik.errors.description}</p>}
        <Label>Preço</Label>
        <Input
          value={formik.price}
          name="price"
          onChange={formik.handleChange}
        />
        {formik.errors.price && <p>{formik.errors.price}</p>}
        <FilledButton color="green">Cadastrar</FilledButton>
      </Form>
    </Container>
  );
};

export default FormCadastroProduto;

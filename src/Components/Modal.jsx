import React from "react";
import { Formik } from "formik";
import { Button, TextField, Typography } from "@mui/material";
const Modal = ({ open, handleClose }) => (
  <div
    style={{
      position: "absolute",
      width: "100vw",
      height: "100vh",
      top: 0,
      left: 0,
      opacity: open ? 1 : 0,
      visibility: open ? 1 : 0,
      display: open ? "flex" : "none",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backgroundColor: "rgba(128,128,128, 0.6)",
    }}
  >
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        width: 500,
        height: 300,
        padding: "10px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "50px",
        }}
      >
        <span style={{ fontWeight: 500 }}>Choose your own props...</span>
        <Button sx={{ color: "black" }} onClick={handleClose}>
          X
        </Button>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <TextField
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <Button
              sx={{ color: "black" }}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
            <Typography>{}</Typography>
          </form>
        )}
      </Formik>
    </div>
  </div>
);

export default Modal;

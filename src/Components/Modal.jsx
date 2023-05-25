import React from "react";
import { Formik } from "formik";
import { Button, TextField, Typography } from "@mui/material";
const Modal = ({ open, handleClose, handleOnChangeCity, temp }) => (
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
        initialValues={{ city: "" }}
        validate={(values) => {
          const errors = {};
          console.log(values, "values");
          if (!values.city) {
            errors.city = "Required";
          } else if (!/[A-Za-z]$/i.test(values.city)) {
            errors.city = "Invalid city";
          }
          console.log(errors, "errors");
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleOnChangeCity(values.city);
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
              type="city"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
            />
            {errors.city && touched.city && errors.city}
            <Button
              sx={{ color: "black" }}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
            <Typography>{temp}</Typography>
          </form>
        )}
      </Formik>
    </div>
  </div>
);

export default Modal;

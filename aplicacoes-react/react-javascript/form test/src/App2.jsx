import { useFormik, Formik } from "formik"
import { estados } from "./estadosBrasil"
import { MenuItem, TextField } from "@mui/material"
import { useField } from "formik"

function App2() {
  {/*const formik = useFormik({
    initialValues: {
      uf: "",
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const [field, meta] = useField({
    ...formik.getFieldProps("uf"),
  })

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginLeft: "300px" }}>
      <TextField
        sx={{ width: "200px" }}
        id="uf"
        name="uf"
        label="UF"
        select
        {...field}
        inputProps={{
          ...field.inputProps,
          value: formik.values.uf,
          onChange: formik.handleChange,
        }}
      >
        {estados.map((estado) => (
          <MenuItem key={estado.value} value={estado.value}>
            {estado.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  )
}*/}

{/*

const formik = useFormik({
    initialValues: {
      uf: "",
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  const [field, meta] = useField({
    ...formik.getFieldProps("uf"),
  })

  return (
    <form onSubmit={formik.handleSubmit} style={{ marginLeft: "300px" }}>
      <TextField
        sx={{ width: "200px" }}
        id="uf"
        name="uf"
        label="UF"
        select
        {...field}
        value={formik.values.uf}
        onChange={(e) => {
          formik.setFieldValue("uf", e.target.value)
        }}
      >
        {estados.map((estado) => (
          <MenuItem key={estado.value} value={estado.value}>
            {estado.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  )
}

*/}

return (
    <Formik
      initialValues={{ uf: "" }}
      onSubmit={(values, actions) => {
        console.log({ values, actions })
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ width: "200px" }}
            id="uf"
            name="uf"
            label="UF"
            select
            {...formik.getFieldProps("uf")}
          >
            {estados.map((estado) => (
              <MenuItem key={estado.value} value={estado.value}>
                {estado.label}
              </MenuItem>
            ))}
          </TextField>
        </form>
      )}
    </Formik>
  )
}

export default App2
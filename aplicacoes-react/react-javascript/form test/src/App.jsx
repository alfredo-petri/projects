import { useFormik } from "formik"
import { estados } from "./estadosBrasil"
import { MenuItem, TextField } from "@mui/material"

function App() {

  const formik = useFormik({
    initialValues: {
        uf: "",
    },
    onSubmit: (values) => {
        console.log(values)
    }
  })
  
  return (
        <form onSubmit={formik.handleSubmit} style={{marginLeft:"300px"}}>
        
          <TextField
            sx={{width: "200px"}}
            id="uf"
            name="uf"
            label="UF"
            value={formik.values.uf}
            onChange={formik.handleChange}
            select
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

export default App

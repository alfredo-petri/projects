//hooks
import { useNavigate } from 'react-router-dom';

//types
import { nomesAlimentos } from '../types';

//libraries
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

//styles
import styles from './CalculadoraChurrasco.module.css'

const esquemaValidacao = Yup.object().shape({
  pessoas: Yup.number()
  .min(1, "Deve haver pelo menos 1 pessoa")
  .required("Número de pessoas é obrigatório"),
  
  selecaoAlimentos: Yup.array()
  .of(Yup.string()).test(
    "check-selecaoAlimentos", 
    "Selecione pelo menos um alimento", 
    (array) => array != null && array!.length > 0),
})


const CalculadoraChurrasco = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      
      <Formik initialValues={{pessoas: 0, selecaoAlimentos: []}} 
        validationSchema={esquemaValidacao} 
        onSubmit={(values) => {
        navigate("/resultado", {
        state: {
          pessoas: values.pessoas,
          alimentosSelecionados: values.selecaoAlimentos
        },
        })
        }}>
        {({errors, touched}) => (
          <Form>
          <div className={styles.inputGroup}>
            <label htmlFor="pessoas" className={styles.inputLabel}>Numero de pessoas:</label>
            <Field name="pessoas" type="number" className={styles.inputField}/>
            {errors.pessoas && touched.pessoas ? (<p className={styles.error}>{errors.pessoas}</p>) : null}
          </div>
          <h2>Selecione os alimentos para o churrasco:</h2>
          {Object.keys(nomesAlimentos).map((alimento)=>(
            <div  >
              <Field  name="selecaoAlimentos" className={styles.inputCheckbox} type="checkbox" value= {alimento} />
              <label  htmlFor='selecaoAlimentos' className={styles.inputLabel}>{nomesAlimentos[alimento]}</label> 
            </div>
          ))}
          {errors.selecaoAlimentos && touched.selecaoAlimentos ? (<p className={styles.error}>{errors.selecaoAlimentos}</p>) : null}
          <button type='submit' className={styles.calculateButton}>Calcular</button>
        </Form>     
        )}
      </Formik>
    
    </div>
  )
}

export default CalculadoraChurrasco
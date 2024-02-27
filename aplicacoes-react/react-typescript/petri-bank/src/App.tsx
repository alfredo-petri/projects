import { Footer } from "./components/Footer"
import { FormLogin } from "./components/FormLogin"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"


function App() {
 

  return (
    <>
      <Header/>
      <Layout>
        <h2>Faça o Login</h2>
        <FormLogin/>
      </Layout>
      <Footer/>
    </>
  )
}

export default App

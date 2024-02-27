import { ChakraProvider, Flex } from "@chakra-ui/react"
import { Footer } from "./components/Footer"
import { FormLogin } from "./components/FormLogin"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"


function App() {
 

  return (
    <>
      <ChakraProvider>
        <Flex minHeight="100vh" backgroundColor="#fcfcfc" justifyContent="center" alignItems="center" flexDirection="column">
          <Header/>
          <Layout>
            <h2>Faça o Login</h2>
            <FormLogin/>
          </Layout>
          <Footer/>
        </Flex>
      </ChakraProvider>  
    </>
  )
}

export default App

/*

import styled from "styled-components";

const Form = styled.form`
background-color: yellow
`

*/

import {Input, Flex, Button, FormLabel, Box } from '@chakra-ui/react'

export const FormLogin = () => {
  return (
    <>
        <Flex direction="column" justifyContent="center" alignItems="center">
            <Box mt="15px"  width="300px">
                <FormLabel>
                    <span>Email:</span>
                    <Input type="email" name="email" id="email" placeholder="Digite o seu email" mt="5px" pl="15px"/>
                </FormLabel>
                <FormLabel>
                    <span>Senha:</span>
                    <Input type="password" name="password" id="password" placeholder="Digite a sua senha" mt="5px" pl="15px"/>
                </FormLabel>
            </Box>
            <Button type="submit" w="80px" mt="15px">Entrar</Button>
        </Flex>
    </>
  )
}

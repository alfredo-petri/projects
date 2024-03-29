import { Button, TextareaAutosize } from '@mui/base'
import { Box } from '@mui/material'
import React from 'react'

export default function Chat() {
  return (
    <Box>
        <TextareaAutosize minRows={3} sx={{width: "100%"}} placeholder='Digite a mensagem...' />
        <Button>Enviar</Button>
    </Box>
  )
}

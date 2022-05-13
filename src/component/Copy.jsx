import React from 'react'
import { Container, Typography } from '@mui/material';

const Copy = () => {
  return (
    <Container sx={{ pt:5 }}>
        <Typography variant="caption text" component="h5" color="gray">
          Copyright &copy; Gimpo Daeseong 2022.
        </Typography>
    </Container>
  )
}

export default Copy
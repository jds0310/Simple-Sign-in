import React from 'react'
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import { Container, Typography } from '@mui/material';

const Top = () => {
  return (
    <Container sx={{ pt:5 }}>
        <GroupWorkIcon sx={{ fontSize: 50 }} />
        <Typography variant="h4" component="h4">
          Sign in
        </Typography>
    </Container>
  )
}

export default Top
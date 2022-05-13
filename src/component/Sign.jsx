import React from 'react'
import { Container, Grid, TextField, FormControlLabel, Checkbox, Button, Link } from '@mui/material';

const Sign = () => {
  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <TextField sx={{ width:400, mt:3 }} label="Email Address" autoFocus/>
        <TextField sx={{ width:400, mt:3 }} label="Password" type="password"/>
      </Grid>
      <Grid container alignItems="baseline">
        <FormControlLabel sx={{ pt:1, pl:10}}
            control={<Checkbox value="remember" color="primary"/>} label="Remember me"/>
      </Grid>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, width: 400 }}>
            Sign In
        </Button>
      </Grid>
      <Grid container justifyContent="space-between" >
        <Link sx={{ pl:10 }} component="button" variant="body2" 
            onClick={() => {
                alert("비밀번호 찾기 준비중");
            }}>
            Find a password
        </Link>
        <Link sx={{ pr:10 }} component="button" variant="body2" 
            onClick={() => {
                alert("이메일 찾기 준비중");
            }}>
            Find Account
        </Link>
      </Grid>
    </Container>
  )
}

export default Sign
import React from 'react';
import { Container } from '@mui/material';

const App = () => {
  // First container = background
  // Second container = acutal container
  return <>
    <Container maxWidth={false}>
      <Container maxWidth={false}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
               One Side
            </Grid>
            <Grid item xs={8}>
               Second Side
            </Grid>
        </Grid>
      </Container>
    </Container>
  </>
}


export default App;
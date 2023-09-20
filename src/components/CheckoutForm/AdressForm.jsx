import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, typography, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField';

const AddressForm = () => {

    const methods = useForm();

  return (
    <>
        <Typography variant='h6' gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit=''>
                <Grid container spacing={3}>
                    <FormInput required name='firstname' label='First Name' />
                </Grid>
            </form>
        </FormProvider>
    </>
  );
}

export default AddressForm;
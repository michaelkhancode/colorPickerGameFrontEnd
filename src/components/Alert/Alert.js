import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

const MyApp = ( props ) => {
  const { enqueueSnackbar } = useSnackbar();

  const showError = (errorArray) => {
    for (var errorMessage of errorArray) {
      enqueueSnackbar(errorMessage, {variant:"warning"} )
    }
  };

  if (props.error.length >= 1) {
    showError(props.error);
  }

  return (
    <span></span>
  );
}

const IntegrationNotistack = (props) => {

  return (
    <SnackbarProvider preventDuplicate maxSnack={3}>
      <MyApp error={props.error} />
    </SnackbarProvider>
  );
}

export default IntegrationNotistack
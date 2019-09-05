import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

// function MyApp( props ) {
//   const { enqueueSnackbar } = useSnackbar();

//   console.log(props)

//   const handleClick = () => {
//     enqueueSnackbar('I love snacks.');
//   };

//   const handleClickVariant = (variant) => () => {
//     // variant could be success, error, warning, info, or default
//     enqueueSnackbar('This is a warning message!', { variant });
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleClick}>Show snackbar</Button>
//       <Button onClick={handleClickVariant('success')}>Show warning snackbar</Button>
//     </React.Fragment>
//   );
// }

// export default function IntegrationNotistack() {
//   return (
//     <SnackbarProvider maxSnack={3}>
//       <MyApp />
//     </SnackbarProvider>
//   );
// }

const MyApp = ( props ) => {
  const { enqueueSnackbar } = useSnackbar();

  console.log(props.error.length)

  const showError = (errorArray) => {
    for (var errorMessage of errorArray) {
      enqueueSnackbar(errorMessage, {variant:"warning"} )
    }
  };

  if (props.error.length >= 1) {
    console.log("true")
    showError(props.error);
  }

  return (
    // <React.Fragment>
    //   <Button onClick={handleClick}>Show snackbar</Button>
    //   {/* <Button onClick={handleClickVariant('success')}>Show warning snackbar</Button> */}
    // </React.Fragment>
    <span></span>
  );
}

const IntegrationNotistack = (props) => {

  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp error={props.error} />
    </SnackbarProvider>
  );
}

export default IntegrationNotistack
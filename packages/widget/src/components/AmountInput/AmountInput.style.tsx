import {
  Box,
  InputBase,
  FormControl as MuiFormControl,
  inputBaseClasses,
  styled,
} from '@mui/material';

export const maxInputFontSize = 24;
export const minInputFontSize = 14;

export const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background:"black",
  color:"white",
  padding: theme.spacing(1),
  borderRadius:"4px",
}));

export const FormControl = styled(MuiFormControl)(({ theme }) => ({
  height: 40,
  borderRadius:"4px",
}));


export const Input = styled(InputBase)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 300,
  fontFamily: 'Major Mono Display, monospace',
  color:"white",
  boxShadow: 'none',
  lineHeight: 1,
  [`.${inputBaseClasses.input}`]: {
    fontSize:"16px",
      color: "white", 
    padding: theme.spacing(0, 0, 0, 1),
    '&::placeholder': {
      fontSize:"16px",
      // fontFamily: 'Inter , sans-serif',
      color: "white",
      fontWeight: 300, 
      lineHeight: 1,
      // Replace with the desired color
    },
  },
  '& input[type="number"]::-webkit-outer-spin-button, & input[type="number"]::-webkit-inner-spin-button':
  {
    WebkitAppearance: 'none',
    margin: 0,
  },
  '& input[type="number"]': {
    MozAppearance: 'textfield',
  },
  [`&.${inputBaseClasses.disabled}`]: {
    color: 'white',
  },
  [`.${inputBaseClasses.input}.${inputBaseClasses.disabled}`]: {
    WebkitTextFillColor: 'unset',
  },
}));


// export const Input = styled(InputBase)(({ theme }) => ({
//   fontSize: 20,
//   fontWeight: 600,
//   boxShadow: 'none',
//   lineHeight: 1,
//   [`.${inputBaseClasses.input}`]: {
//     padding: theme.spacing(0, 0, 0, 1),
//   },
//   '& input[type="number"]::-webkit-outer-spin-button, & input[type="number"]::-webkit-inner-spin-button':
//     {
//       WebkitAppearance: 'none',
//       margin: 0,
//     },
//   '& input[type="number"]': {
//     MozAppearance: 'textfield',
//   },
//   [`&.${inputBaseClasses.disabled}`]: {
//     color: 'inherit',
//   },
//   [`.${inputBaseClasses.input}.${inputBaseClasses.disabled}`]: {
//     WebkitTextFillColor: 'unset',
//   },
// }));

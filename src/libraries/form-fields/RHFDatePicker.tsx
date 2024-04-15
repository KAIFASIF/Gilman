// import { Controller, useForm, useFormContext } from 'react-hook-form';
// import { Typography, TextField, MenuItem, createTheme, ThemeProvider } from '@mui/material';

// let theme = createTheme({
//   MuiTypography: {
//     body1: {
//       '& .MuiTypography-body1': {
//         '& .css-ahj2mt-MuiTypography-root': {
//           lineHeight: 40,
//         },
//       },
//     },
//   },
// });

// const dateNow = new Date(); // Creating a new date object with the current date and time
// const year = dateNow.getFullYear(); // Getting current year from the created Date object
// const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
// const month = // Setting current Month number from current Date object
//   monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 if not to adjust for date input.
//     ? `0${monthWithOffset}`
//     : monthWithOffset;
// const date =
//   dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
//     ? `0${dateNow.getUTCDate()}`
//     : dateNow.getUTCDate();

// const materialDateInput = `${year}-${month}-${date}`;

// const RHFDatePicker = (props:any) => {
//   const {
//     type,
//     label,
//     disabled,
//     fullWidth,
//     InputLabelFontSize,
//     lineHeight,
//     lineHeight2,
//     inputProps,
//     SelectProps,
//     size,
//     variant,
//     sx,
//     mapArray,
//     error,
//     helperText,
//     readOnly,
//     IputProps,
//     className,
//     defaultValue,
//     select,
//     mt,
//     isHintLabel,
//     hintLabel,
//     name,
//     hidden,
//     parseError,
//     pastDate,
//     ...rest
//   } = props;

//   const { control } = useFormContext();

//   return (
//     <Controller
//       defaultValue={defaultValue ? defaultValue : ''}
//       control={control}
//       name={name}
//       render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => {
//         return (
//           <>
//             <ThemeProvider theme={theme}>
//               <Typography lineHeight={lineHeight ? lineHeight : 2} sx={{ color: 'black', fontWeight: 500 }}>
//                 {label}
//               </Typography>
//             </ThemeProvider>
//             <TextField
//               {...rest}
//               disabled={disabled ? disabled : false}
//               fullWidth={fullWidth ? fullWidth : true}
//               size={size ? size : 'small'}
//               variant={variant ? variant : 'outlined'}
//               InputLabelProps={{ shrink: true }}
//               onChange={onChange ? onChange : ''}
//               margin='normal'
//               value={value ? value : materialDateInput}
//               defaultValue={materialDateInput}
//               hidden={true}
//               inputProps={{
//                 min: pastDate == true ? null : materialDateInput,
//               }}
//               error={!!error}
//               helperText={error && error.message}
//               type='date'
//             />
//           </>
//         );
//       }}
//     />
//   );
// };

// export default RHFDatePicker;

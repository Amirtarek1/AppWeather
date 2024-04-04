import * as Yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string().trim().min(8, 'Please enter a valid email address').required('Please enter an email address').matches(EmailReg, 'Please enter a valid email address'),
  password: Yup.string().required('Please enter a password').min(8, 'Password must be at least 8 characters long').matches(includeDigRegExp, 'Password must include at least one number')
  .matches(includeCharRegExp, 'Password must include at least one letter'),
});


export const SignupSchema = Yup.object().shape({
    
    username : Yup.string().trim().required("Please enter your name"),
    email: Yup.string().trim().min(8, 'Please enter a valid email address').required('Please enter an email address').matches(EmailReg, 'Please enter a valid email address'),
    password: Yup.string().required('Please enter a password').min(8, 'Password must be at least 8 characters long').matches(includeDigRegExp, 'Password must include at least one number')
    .matches(includeCharRegExp, 'Password must include at least one letter'),
    passwordConfirmation: Yup.string().required('Please confirm your password').min(8 ,'Password must be at least 8 characters long').oneOf([Yup.ref('password'), null], "they are not the same")
    

});


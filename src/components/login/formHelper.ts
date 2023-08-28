import * as Yup from 'yup';

interface LoginProps {
    email:string,
    password:string
}

export const getInitalValues=(values:LoginProps):any=>({
    email: values.email,
    password: values.password
});

export const validationSchema = () => Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
});
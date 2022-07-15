import { Link as RouterLink } from 'react-router-dom';
import { Link, Button, Grid, Typography, TextField, Alert } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUsersWithEmailPassword } from '../../store/auth/thunks';

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener un @'],
    password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);

    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);


    const { displayName, email, password, onInputChange, formState,
        displayNameValid, isFormValid, emailValid, passwordValid } = useForm(formData, formValidations);


    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (!isFormValid) return;

        dispatch(startCreatingUsersWithEmailPassword(formState));
    }

    return (
        <AuthLayout title='Registro'>

            <form onSubmit={onSubmit}>
                <Grid container>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Tu nombre"
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@correo.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Tu contraseña"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                           <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>

                        <Grid item xs={12}>
                            <Button disabled={isCheckingAuthentication} type='submit' variant="contained" fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                >
                    <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
                    <Link color='inherit' component={RouterLink} to="/auth/login">
                        Ingresar
                    </Link>
                </Grid>

            </form>
        </AuthLayout>
    );
}

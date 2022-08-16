
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { startCreatinWithEmailPassword } from "../../store/auth/thunks";
import { useDispatch } from "react-redux";


export const RegisterPage = () => {

  const dispach = useDispatch()

  const [formSubmitted, setformSubmitted] = useState(false)

  const formValidations = {
    fullname: [ (value)=> value.length >= 2 , "Please enter a valid Name" ],
    email: [ (value)=> value.includes("@") , "Email must contain a @ " ],
    password: [ (value)=> value.length >= 6, "Password should be at least 6 char long" ]
  }

  const { formState , fullnameValid, emailValid , passwordValid , onInputChange , isFormValid  } = useForm({
    fullname: "",
    email: "",
    password: "",

  }, formValidations ) 


  const onsubmit = ( event ) => {
    event.preventDefault()
    setformSubmitted(true)

    if( !isFormValid )return

    dispach( startCreatinWithEmailPassword( formState ) )

  }

  return (
    <AuthLayout title="Create an account">

      <form onSubmit={ onsubmit }>
        <Grid container sx={{ mt: 2 }}>
          <Grid item>
            <TextField
              label="Full name"
              type={"text"}
              onChange={ onInputChange }
              value={ formState.fullname }
              name={ "fullname"}
              placeholder="Jhon doe"
              fullWidth
              error={ !!fullnameValid && formSubmitted }
              helperText={ fullnameValid }
            />
            <TextField sx={{ mt: 2 }}
              label="Email"
              type={"email"}
              onChange={ onInputChange }
              value={ formState.email }
              name={ "email"}
              placeholder="Enter your email"
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
              fullWidth
            />

            <TextField
              sx={{ mt: 2 }}
              label="Password"
              type={"password"}
              onChange={ onInputChange }
              value={ formState.password }
              name={ "password"}
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
              placeholder="Choose a password"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth type="submit" >
              Create account
            </Button>
          </Grid>

        </Grid>

        <Grid container direction={"row"} justifyContent="end">
          <Link component={RouterLink} color={"inherit"} to="/auth/login">
            Are you already register?
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};

import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import LoginLayout from "./LoginLayout";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {

  const dispach = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const isCheckingAuth = useMemo(() => status === "Auth checking", [status]);

  const { email, password, onInputChange, formState } = useForm({
    email: "julian@google.com",
    password: "123456",
  });

  const onSubmit = () => {
    e.preventDefault();

    dispach(checkingAuthentication(email, password));
  };

  const onGoogleSignIn = () => {
    dispach(startGoogleSignIn());
  };

  return (
    //Crea un componente que tenga este Form
    <LoginLayout
      onInputChange= { onInputChange }
      isCheckingAuth={isCheckingAuth}
      onGoogleSignIn={onGoogleSignIn}
      onSubmit={onSubmit}
      email ={ email }
      password ={ password }
    />
  );
};

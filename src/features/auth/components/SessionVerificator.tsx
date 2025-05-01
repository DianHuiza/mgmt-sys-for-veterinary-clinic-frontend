import { useDispatch } from "react-redux";
import { login, logout } from "../../../store/slices/auth.slice";
import { verifyService } from "../services/verify";
import { useEffect } from "react";

export const SessionVerificator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    verifyService()
      .then((data) => {
        if (data) {
          dispatch(login(data));
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          dispatch(logout());
        }
      });
  }, [dispatch]);

  return null;
};

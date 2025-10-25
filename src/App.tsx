import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import Snackbar from "@mui/material/Snackbar";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { setError } from "./redux/actions/globalAction";
import { Alert } from "@mui/material";
const App = () => {
  const global = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  return (
    <>
      <RouterProvider router={router} />
      {!!global.error && (
        <Snackbar
          open={!!global.error}
          autoHideDuration={3000}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
          onClose={() => dispatch(setError(""))}
        >
          <Alert
            onClose={() => dispatch(setError(""))}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {global.error}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default App;

import App from "../App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Root() {
  return (
    <>
      <App />
      <ToastContainer />
    </>
  );
}

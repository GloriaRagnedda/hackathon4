import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export default function Reload() {
  
    return (
      <Loader
        type="Puff"
        color="green"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }

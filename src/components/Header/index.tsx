import style from "./index.module.scss";
import logo from "../../assets/iQube.png";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className={style["container"]}>
      <div>
        <Link to="/">
          <img src={logo} alt="iQube logo" />
        </Link>
      </div>
    </div>
  );
};

export default index;

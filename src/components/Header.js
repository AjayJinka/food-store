import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const updateBtnName = () => {
    btnName === "Login" ? setBtnName("Log Out") : setBtnName("Login");
  };
  return (
    <div className="flex justify-between items-center shadow-md pr-4 bg-pink-100">
      <img src={LOGO_URL} alt="logo" className="w-16 h-16"></img>
      <div className="flex gap-x-4 items-center font-bold">
        <div>Online Status text: {onlineStatus ? "✅" : "🔴"}</div>
        <div>
          <Link className="hover:bg-green-200 p-2 rounded-lg" to={"/"}>
            Home
          </Link>
        </div>
        <div>
          <Link className="hover:bg-green-200 p-2 rounded-lg" to={"/about"}>
            About us
          </Link>
        </div>
        <div>
          <Link className="hover:bg-green-200 p-2 rounded-lg" to={"/contact"}>
            Contact us
          </Link>
        </div>
        <div className="hover:bg-green-200 p-2 rounded-lg">
          <Link to={"/cart"}>Cart🛒 - ({cartItems.length} items)</Link>
        </div>
        <button
          className="bg-yellow-300 px-2 py-1 shadow-lg rounded-lg hover:bg-yellow-400"
          onClick={updateBtnName}
        >
          {btnName}
        </button>
        <div className="font-bold">{loggedInUser}</div>
      </div>
    </div>
  );
};

export default Header;

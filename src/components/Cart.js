import { useDispatch, useSelector } from "react-redux";
import ResMenuCategoryItem from "./ResMenuCategoryItem";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="mt-2">
      <div className="flex gap-x-4 justify-center">
        <div className="font-bold bg-blue-400 rounded p-1 px-4 flex items-center justify-center">
          Cart
        </div>
        <button
          className="bg-black text-white rounded p-1 flex items-center justify-center px-4"
          onClick={handleClick}
        >
          Clear Cart🧹
        </button>
      </div>
      {cartItems.length === 0 ? (
        <h1 className="text-center font-bold my-8">
          Cart is Empty, Add items to the Cart!
        </h1>
      ) : (
        cartItems.map((item) => {
          return (
            <div key={item?.card?.info?.id} className="w-8/12 m-auto">
              <ResMenuCategoryItem itemCard={item} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;

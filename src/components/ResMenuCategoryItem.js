import { useDispatch } from "react-redux";
import { RES_MENU_IMG_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";

const ResMenuCategoryItem = (props) => {
  const dispatch = useDispatch();
  const { itemCard } = props;
  const { name, price, defaultPrice, description, imageId } =
    itemCard?.card?.info;
  const updateCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="grid grid-cols-5 gap-x-4 border-b border-gray-300 p-2">
      <div className="col-span-4">
        <div className="mb-2 font-bold">
          <div>{name}</div>
          <div>₹ {(price || defaultPrice) / 100}</div>
        </div>
        <div className="text-sm text-gray-400 text-wrap">{description}</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src={RES_MENU_IMG_URL + imageId}
          alt="img"
          className="h-[8rem] w-full rounded-lg shadow-lg"
        ></img>
        <div className="flex flex-col justify-center items-center relative bottom-4">
          <button
            className="border border-gray-200 rounded text-green-500 font-bold px-4 py-1 bg-gray-100 hover:shadow-lg"
            onClick={() => {
              updateCart(itemCard);
            }}
          >
            Add +
          </button>
          <div className="text-[10px] text-gray-500 mt-[-3px]">
            customisable
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResMenuCategoryItem;

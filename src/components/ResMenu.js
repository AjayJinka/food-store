import { useParams } from "react-router-dom";
import { ICON_URL, RES_MENU_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import useFetchData from "../../utils/useFetchData";
import ResMenuCategory from "./ResMenuCategory";
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchData(RES_MENU_URL + resId);
  const [showItemIndex, setShowItemIndex] = useState(null);
  console.log(resInfo, "resInfo");
  if (resInfo == null) return <Shimmer />;
  const {
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
    locality,
    sla,
    feeDetails,
  } = resInfo?.data?.cards[2]?.card?.card?.info;
  const cards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = cards.filter(
    (card) =>
      card?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="px-56">
      <div className="flex justify-between shadow-lg p-2">
        <div>
          <div className="font-bold text-lg">{name}</div>
          <div className="text-xs text-gray-500 mt-2">
            {cuisines?.join(", ")}
          </div>
          <div className="text-xs text-gray-500">
            {locality}, {sla?.lastMileTravelString}
          </div>
          <div className="flex gap-x-2 mt-4">
            <div>
              <img src={ICON_URL + feeDetails?.icon} alt="deliv-icon"></img>
            </div>
            <div className="text-xs text-gray-500">{feeDetails?.message}</div>
          </div>
        </div>
        <div className="flex flex-col border border-gray-200 rounded items-center my-6 w-28">
          <div className="font-bold text-green-500 py-0.5">
            🌟 {avgRatingString}
          </div>
          <div className="text-gray-400 text-xs border-t font-bold px-4 py-1 border-gray-200">
            {totalRatingsString}
          </div>
        </div>
      </div>
      <div>
        {categories.map((category, index) => {
          return (
            <ResMenuCategory
              key={index}
              category={category}
              showItems={index === showItemIndex}
              setShowItemIndex={() => setShowItemIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResMenu;

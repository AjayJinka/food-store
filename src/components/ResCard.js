import { useContext } from "react";
import { RESIMG_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const ResCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;
  const { id, name, avgRating, sla, cuisines, locality, cloudinaryImageId } =
    resData;
  return (
    <div className="flex flex-col rounded-lg hover:shadow-2xl p-1">
      <div>
        <img
          src={RESIMG_URL + cloudinaryImageId}
          className="h-[10rem] w-full shadow-2xl rounded-lg"
          alt="res-img"
        ></img>
      </div>
      <div className="truncate font-bold">{name}</div>
      <div className="flex items-center gap-x-1">
        <div>🌟 {avgRating}</div>
        <div className="font-bold">.</div>
        <div className="text-gray-500 text-sm">{sla.slaString}</div>
      </div>
      <div className="truncate text-sm text-gray-500">{cuisines.join(",")}</div>
      <div className="text-gray-500 text-sm">{locality}</div>
      <div>Username: {loggedInUser}</div>
    </div>
  );
};

export const withPromoted = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black text-white rounded p-1 absolute">
          Promoted
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;

import ResCard, { withPromoted } from "./ResCard";
import { useContext, useEffect, useState } from "react";
import { RESLIST_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useFetchData from "../../utils/useFetchData";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const apiRes = useFetchData(RESLIST_URL);
  const { loggedInUser, setUserName } = useContext(UserContext);

  const ResCardWithPromoted = withPromoted(ResCard);

  useEffect(() => {
    if (apiRes) {
      const fetchedRestaurants =
        apiRes?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      //console.log(fetchedRestaurants, "fetchedRestaurants");
      setResList(fetchedRestaurants);
      setFilteredResList(fetchedRestaurants);
    }
  }, [apiRes]);

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline; Please check your internet connection</h1>
    );

  //console.log(resList, "resList");
  if (!resList || resList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="px-40">
      <div className="flex items-center gap-x-8 my-6">
        <div className="flex items-center gap-x-1">
          <input
            className="border border-black rounded-lg py-0.5 px-2"
            type="search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            data-testid="searchInput"
          ></input>
          <button
            className="bg-blue-300 rounded-lg px-2 py-1 font-bold hover:bg-blue-400 shadow-lg"
            onClick={() => {
              const filteredList = resList.filter((resCard) => {
                return resCard.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-300 rounded-lg px-2 py-1 font-bold hover:bg-green-400 shadow-lg"
          onClick={() => {
            const filteredList = resList.filter(
              (resCard) => resCard.info.avgRating > 4
            );
            setFilteredResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <label className="font-bold">Username: </label>
          <input
            className="px-2 border border-black rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 gap-y-6">
        {filteredResList.map((resCard, index) => {
          if (index % 2 === 0)
            return (
              <Link
                to={"/restaurants/" + resCard.info.id}
                key={resCard.info.id}
              >
                <ResCardWithPromoted resData={resCard.info} />
              </Link>
            );
          return (
            <Link to={"/restaurants/" + resCard.info.id} key={resCard.info.id}>
              <ResCard resData={resCard.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

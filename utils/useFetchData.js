import { useEffect, useState } from "react";

const useFetchData = (api) => {
  //console.log(api, "api");
  const [apiRes, setApiRes] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(api);
    const json = await data.json();
    //console.log(json, "json");
    setApiRes(json);
  };

  //console.log(apiRes, "apiRes");
  return apiRes;
};

export default useFetchData;

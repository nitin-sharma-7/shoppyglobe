import { useEffect, useState } from "react";

function useFetch(url) {
  const [apiData, setApiData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts or URL changes
    async function getData() {
      try {
        const responce = await fetch(url);
        const { products } = await responce.json();
        setApiData(products);
      } catch (error) {
        setErr(error);
      }
    }
    getData();
  }, [url]);

  return [apiData, err];
}

export default useFetch;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((response) => setData(response.rates ?? {}));
  }, [currency]);
  console.log(data);
  return data;
}

export { useCurrencyInfo };
export default useCurrencyInfo;

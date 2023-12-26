import { useState, useEffect } from "react";

export default function App() {
  const [btcData, setBtcData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coindesk.com/v1/bpi/currentprice.json`,
        );
        const jsonData = await response.json();
        setBtcData(jsonData.bpi.USD);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error: {error.message}</h2>}
      {Object.keys(btcData).length > 0 && (
        <>
          <h1>Current BTC/USD data</h1>
          <p>Code: {btcData.code}</p>
          <p>Symbol: {btcData.symbol}</p>
          <p>Rate: {btcData.rate}</p>
          <p>Description: {btcData.description}</p>
          <p>Rate Float: {btcData.rate_float}</p>
        </>
      )}
    </div>
  );
}

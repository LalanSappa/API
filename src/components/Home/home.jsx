import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTheData = async () => {
    try {
      setLoading(true);
      setError(null);
      const dataRes = await axios.get("https://official-joke-api.appspot.com/random_joke");
      setRes(dataRes.data);
    } catch (err) {
      setError("Failed to fetch joke. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      
      {res && (
        <div id="card">
          <h3>Id: {res.id}</h3>
          <p>Type: {res.type}</p>
          <p>Setup: {res.setup}</p>
          <p>Punchline: {res.punchline}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button id="btn" onClick={getTheData} disabled={loading}>
        {loading ? "Loading..." : "Get a Joke"}
      </button>
    </div>
  );
};

export default Home;
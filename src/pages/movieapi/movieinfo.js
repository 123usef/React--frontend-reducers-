import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
export default function Movieinfo() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=0714847f29bce4a8cecaafb483252205`
      )
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{details.title}</h5>
          <p class="card-text">{details.overview}</p>
          <Link to="/movies" class="btn btn-primary">
            back
          </Link>
        </div>
      </div>
    </>
  );
}

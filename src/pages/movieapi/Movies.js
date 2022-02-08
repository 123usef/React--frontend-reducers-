import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { addtoFavourite } from "../../store/actions/addtofav";
import {removefromfav} from "../../store/actions/removefromfav";
import { useSelector, useDispatch } from "react-redux";
export default function Movies() {
  const dispatch = useDispatch();
  const AddFavourite = (mvs) => {
    dispatch(addtoFavourite(mvs));
  };
  const removefav = (mvs) => {
    dispatch(removefromfav(mvs));
  };
  const selector = useSelector((state) => state.favourites.fav);
  const [mvs, setMvs] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=0714847f29bce4a8cecaafb483252205"
      )
      .then((res) => setMvs(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(mvs);
  return (
    <div className="container ">
      <h1>Movies</h1>
      <div className="row">
        {mvs.map((mvs) => {
          return (
            <div
              className="card col-3 offset-1"
              style={{ width: "18 rem" }}
              key={mvs.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${mvs.poster_path}`}
                className="card-img-top"
                alt="..."
              />
              <i class="far fa-star"></i>
              <div className="card-body">
                <h5 className="card-title">{mvs.title}</h5>
                <p className="card-text">{mvs.overview}</p>
                <Link to={`/movieinfo/${mvs.id}`} className="btn btn-primary">
                  Watch Movie
                </Link>
                {selector.map((ob) => ob.id).indexOf(mvs.id) > -1 ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      removefav(mvs);
                    }}
                  >
                    remove from Favourite
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      AddFavourite(mvs);
                    }}
                  >
                    Add to Favourite
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

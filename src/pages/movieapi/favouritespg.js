import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addtoFavourite } from "../../store/actions/addtofav";
import { removefromfav } from "../../store/actions/removefromfav";
export default function Favourites() {
  const favourite_movies = useSelector((state) => state.favourites.fav);
  const dispatch = useDispatch();
  const AddFavourite = (mvs) => {
    dispatch(addtoFavourite(mvs));
  };
  const removefav = (mvs) => {
    dispatch(removefromfav(mvs));
  };
  return (
    <div className="container ">
      <h1>Movies</h1>
      <div className="row">
        {favourite_movies.map((mvs) => {
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
                {favourite_movies.map((ob) => ob.id).indexOf(mvs.id) > -1 ? (
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

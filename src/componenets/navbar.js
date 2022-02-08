import React from "react";
import bootstrap from "bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../store/actions/lang";
export default function Navbar() {
  const language = useSelector((state) => state.language.lang);
  const counter = useSelector((state) => state.favourites.counter);
  const dispatch = useDispatch();
  const changeLangfun = () => {
    dispatch(changeLanguage(language === "Ar" ? "En" : "Ar"));
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movieworld
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favouritepage">
                favourites <span class="badge bg-primary">{counter}</span>
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link" to="/movies">
                language : {language}
              </span>
            </li>
            <li className="nav-item">
              <button className="nav-link btn " onClick={() => changeLangfun()}>
                change language
              </button>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/login">
              {" "}
              <button className="btn btn-outline-success" type="submit">
                login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline-success" type="submit">
                signup
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

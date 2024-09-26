import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

export const CharacterCard = (props) => {
  const { store, actions } = useContext(Context)
  const name = props.name

  let inFavs = store.favorites.filter(e => e.name === name).length 

  return (
    <div className="card mx-2 bg-light px-0 text-light border border-2 border-secondary-subtle my-3" style={{width: "18rem"}}>
      <img className="card-img-top img-fluid img-cover" src={`https://starwars-visualguide.com/assets/img/characters/${props.imageIndex}.jpg`} alt="Card image cap" />
      <div className="my-auto">
        <div className="card-body text-black ">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text "><b>Birth Year:</b> {props.birth_year}<br /> <b>Height:</b> {props.height}<br/> <b>Eye Color:</b> {props.eye_color}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={props.link} className="btn btn-primary">Learn more</Link>
            <i onClick={() =>
              inFavs === 1 ? actions.deleteFave(name) : actions.addFave(props)} className={inFavs === 1 ? "fas fa-heart heart text-warning" : "far fa-heart heart text-warning"}></i>
          </div>
        </div>
      </div>
    </div>
  )
};


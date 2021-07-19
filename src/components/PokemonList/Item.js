import React, { useState } from "react";
import classes from "./Item.module.css";

const Item = ({ name, types, img, pls, weight, id, moves, stats }) => {
  const [details, setDetails] = useState(true);
  const toogleDetaislHandler = () => {
    setDetails(!details);
    const totalMoves = moves.length;
    const type = types[0].type.name;
    const attack = stats[1].base_stat;
    const defence = stats[2].base_stat;
    const hp = stats[0].base_stat;
    const spAttack = stats[3].base_stat;
    const spDefence = stats[4].base_stat;
    const speed = stats[5].base_stat;

    pls(
      details,
      name,
      img,
      weight,
      type,
      id,
      totalMoves,
      attack,
      defence,
      hp,
      spAttack,
      spDefence,
      speed
    );
  };

  return (
    <>
      <div onClick={() => toogleDetaislHandler()} className={classes.card}>
        <img className={classes.img} src={img} alt={`pokemon ${name}`} />
        <h3 className={classes.name}>{name}</h3>
        <div className={classes.textcontainer}>
          {types.map((type) => {
            return (
              <div
                className={
                  //маю підозру, що тут мало бути якось динамічно :D
                  (type.type.name === "fire" && classes.fire) ||
                  (type.type.name === "poison" && classes.poison) ||
                  (type.type.name === "grass" && classes.grass) ||
                  (type.type.name === "shadow" && classes.shadow) ||
                  (type.type.name === "unknown" && classes.unknown) ||
                  (type.type.name === "fairy" && classes.fairy) ||
                  (type.type.name === "dark" && classes.dark) ||
                  (type.type.name === "dragon" && classes.dragon) ||
                  (type.type.name === "ice" && classes.ice) ||
                  (type.type.name === "water" && classes.water) ||
                  (type.type.name === "electric" && classes.electric) ||
                  (type.type.name === "steel" && classes.steel) ||
                  (type.type.name === "ghost" && classes.ghost) ||
                  (type.type.name === "bug" && classes.bug) ||
                  (type.type.name === "rock" && classes.rock) ||
                  (type.type.name === "ground" && classes.ground) ||
                  (type.type.name === "flying" && classes.flying) ||
                  (type.type.name === "fighting" && classes.fighting) ||
                  (type.type.name === "normal" && classes.normal)
                }
                key={Math.random()}
              >
                <p className={classes.text}>{type.type.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Item;

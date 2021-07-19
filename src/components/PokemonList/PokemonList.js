import React, { useState, useEffect } from "react";
import Item from "./Item";
import classes from "./PokemonList.module.css";
import Button from "../UI/Button";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=12"
  );
  const [isShowing, setIsShowing] = useState(false);

  const [card, setCard] = useState({});
  const fetchedPokemons = async () => {
    const response = await fetch(nextPage);
    const data = await response.json();

    setNextPage(data.next);

    function pokemonObject(result) {
      result.map(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setPokemons((prevPokemons) => [...prevPokemons, data]);
      });
    }

    pokemonObject(data.results);
    await console.log(pokemons);
  };

  useEffect(() => {
    fetchedPokemons();
  }, []);

  const checkStateHandle = (
    tf,
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
  ) => {
    setIsShowing(tf);
    setCard({
      name: name,
      img: img,
      weight: weight,
      type: type,
      id: id,
      moves: totalMoves,
      attack: attack,
      defence: defence,
      hp: hp,
      spA: spAttack,
      spD: spDefence,
      speed: speed,
    });
  };

  return (
    <div className={classes.main}>
      <div className={classes.leftcolumn}>
        {pokemons.map((detail) => {
          return (
            <Item
              key={detail.name}
              name={detail.name}
              types={detail.types}
              img={detail.sprites.back_default}
              weight={detail.weight}
              pls={checkStateHandle}
              console={detail}
              id={detail.id}
              moves={detail.moves}
              stats={detail.stats}
            ></Item>
          );
        })}
        <Button onClick={() => fetchedPokemons()}>load more</Button>
      </div>
      <div className={classes.rightcolumn}>
        {isShowing && (
          <div className={classes.sidecard}>
            <div className={classes.imgContainer}>
              <img
                className={classes.singleImg}
                src={card.img}
                alt={`pokemon ${card.name}`}
              />
            </div>
            <div>
              <h2>{`${card.name} #${card.id}`}</h2>
            </div>
            <div className={classes.containerText}>
              <div className={classes.detailsInfo}>
                <div className={classes.detailTextLeft}>
                  <p>Type</p>
                </div>
                <div className={classes.detailTextRight}>
                  <p>{card.type}</p>
                </div>
              </div>
              <div className={classes.detailsInfo}>
                <div className={classes.detailTextLeft}>
                  <p>Attack</p>
                </div>
                <div className={classes.detailTextRight}>
                  <p>{card.attack}</p>
                </div>
              </div>
              <div className={classes.detailsInfo}>
                <div className={classes.detailTextLeft}>
                  <p>Defence</p>
                </div>
                <div className={classes.detailTextRight}>
                  <p>{card.defence}</p>
                </div>
              </div>
              <div className={classes.detailsInfo}>
                <div className={classes.detailTextLeft}>
                  <p>HP</p>
                </div>
                <div className={classes.detailTextRight}>
                  <p>{card.hp}</p>
                </div>
              </div>
              <div className={classes.detailsInfo}>
                <div className={classes.detailTextLeft}>
                  <p>SP Attack</p>
                </div>
                <div className={classes.detailTextRight}>
                  <p>{card.spA}</p>
                </div>
              </div>
              <div className={classes.detailsInfo}>
                <div className={classes.detailTextLeft}>
                  <p>SP Defence</p>
                </div>
                <div className={classes.detailTextRight}>
                  <p>{card.spD}</p>
                </div>
              </div>
              <div className={classes.detailsInfo}>
                <div className={classes.detailTextLeft}>
                  <p>Speed</p>
                </div>
                <div className={classes.detailTextRight}>
                  <p>{card.speed}</p>
                </div>
              </div>
              <div className={classes.detailsInfo}>
                <div className={classes.detailTextLeft}>
                  <p>weight</p>
                </div>
                <div className={classes.detailTextRight}>
                  <p>{card.weight}</p>
                </div>
              </div>
              <div className={classes.detailsInfo}>
                <div className={classes.detailTextLeft}>
                  <p>Total Moves</p>
                </div>
                <div className={classes.detailTextRight}>
                  <p>{card.moves}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonList;

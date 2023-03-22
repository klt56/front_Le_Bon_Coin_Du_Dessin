import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import { db } from "./Data";

const Tinder = () => {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const [favorites, setFavorites] = useState([]);

  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  const updateLocalStorage = (newFavorites) => {
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const swiped = (direction, nameToDelete, index) => {
    console.log(`Swiped ${nameToDelete} (${index}), direction: ${direction}`);
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    if (direction === "right") {
      const newFavorites = [...favorites];
      newFavorites[index] = { ...db[currentIndex], swiped: "right" };
      console.log("Adding to favorites:", newFavorites[index]);
      setFavorites(newFavorites);
      updateLocalStorage(newFavorites); // Mettre à jour le localStorage
    }
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);

    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <section className="tinder-card">
      <div>
        <div className="cardContainer">
          {db.map((artwork, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={artwork.name}
              onSwipe={(dir) => swiped(dir, artwork.name, index)}
              onCardLeftScreen={() => outOfFrame(artwork.name, index)}
            >
              <div
                style={{ backgroundImage: "url(" + artwork.url + ")" }}
                className="card"
              >
                <h3>{artwork.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>

        <div className="buttons">
          <button
            style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
            onClick={() => swipe("left")}
          >
            Pas intéréssé
          </button>
          <button
            style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
            onClick={() => goBack()}
          >
            Revenir en arriere
          </button>
          <button
            style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
            onClick={() => swipe("right")}
          >
            intéréssé
          </button>
        </div>
        {lastDirection ? (
          <h2 key={lastDirection} className="infoText">
            You swiped {lastDirection}
          </h2>
        ) : (
          <h2 className="infoText">Faite glissé ou appuyer sur les boutons</h2>
        )}
       
      </div>
    </section>
  );
};

export default Tinder;

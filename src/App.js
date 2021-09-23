import { useState } from "react";
import "./styles.css";
export default function App() {
  var seriesDB = {
    Action: [
      {
        name: "Life of Pi",
        rating: "⭐ ⭐ ⭐"
      },
      {
        name: "The Three Musketeers",
        rating: "⭐ ⭐ ⭐ ⭐"
      },
      {
        name: "The Call of the Wild",
        rating: "⭐ ⭐ ⭐ ⭐"
      }
    ],
    Classic: [
      {
        name: "To Kill a Mockingbird",
        rating: "⭐ ⭐ ⭐ ⭐"
      },
      {
        name: "Little Women",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐"
      },
      {
        name: "Beloved",
        rating: "⭐ ⭐ ⭐ ⭐"
      }
    ],
    Comic: [
      {
        name: "Watchmen",
        rating: "⭐ ⭐ ⭐"
      },
      {
        name: "The Walking Dead: Compendium One",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐"
      },
      {
        name: "The Boy, the Mole, the Fox and the Horse",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐"
      }
    ]
  };

  var Data = Object.keys(seriesDB);
  const [lists, setLists] = useState("Action");
  function clickHandler(data) {
    setLists(data);
  }
  return (
    <>
      {" "}
      <div style={{ textAlign: "center" }}>
        <h1>📚goodbooks</h1>{" "}
        <div>Checkout my favorite books. Select a genre to get started</div>
      </div>
      <div className="body">
        {" "}
        <div className="type">
          {Data.map((data, ind) => {
            return (
              <button
                className="bookType"
                key={ind}
                onClick={() => clickHandler(data)}
              >
                {" "}
                {data}
              </button>
            );
          })}
        </div>
        <div>
          {seriesDB[lists].map((list, ind) => {
            return (
              <div key={ind} className="list">
                <div className="flex">
                  <div>{list.name}</div>
                  <div>{"-"}</div>
                  <div>{list.rating}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

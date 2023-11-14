import "./App.css";
import Stars from "./Stars";

function App() {
  const defaultRating = localStorage.getItem("starRating");

  return (
    <div>
      <Stars iconSize={25} defaultRating={defaultRating} />
      <Stars iconSize={21} icon="❤" color="red" defaultRating={defaultRating} />
      <Stars
        iconSize={15}
        icon="😍"
        color="red"
        defaultRating={defaultRating}
      />
      <Stars
        iconSize={17}
        icon="🌷"
        color="red"
        defaultRating={defaultRating}
      />
    </div>
  );
}

export default App;

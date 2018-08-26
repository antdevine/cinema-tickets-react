import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieInformation from './MovieInformation';
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

// This example shows how to render two different screens
// (or the same screen in a different context) at the same url,
// depending on how you got there.
//
// Click the colors and see them full screen, then "visit the
// AllFilms" and click on the colors. Note the URL and the component
// are the same as before but now we see them inside a modal
// on top of the old screen.

class ModalSwitch extends React.Component {
  // We can pass a location to <Switch/> that will tell it to
  // ignore the router's current location and use the location
  // prop instead.
  //
  // We can also use "location state" to tell the app the user
  // wants to go to `/img/2` in a modal, rather than as the
  // main page, keeping the AllFilms visible behind it.
  //
  // Normally, `/img/2` wouldn't match the AllFilms at `/`.
  // So, to get both screens to render, we can save the old
  // location and pass it to Switch, so it will think the location
  // is still `/` even though its `/img/2`.
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />
          <Route path="/AllFilms" component={AllFilms} />
          <Route path="/films/:id" component={FilmsView} />
        </Switch>
        {isModal ? <Route path="/films/:id" component={Modal} /> : null}
      </div>
    );
  }
}


const FILMS = [
  { id: 0, "title": "It", "director": "Andy Muschietti", "duration": "135", "genre": "Horror", "releaseDate": "08/09/17", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTE0NWEyNDYtYWI5MC00MWY0LTg1NDctZjAwMjkyMWJiNzk1XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SY1000_CR0,0,674,1000_AL_.jpg", "aboutMovie": "A group of bullied kids band together when a shapeshifting demon, taking the appearance of a clown, begins hunting children.", "trailer": "https://www.youtube.com/watch?v=FnCdOQsX5kc" },
  { id: 1, "title": "Blade runner 2049", "director": "Denis Villeneuve", "duration": "235", "genre": "Sci-Fi", "releaseDate": "06/10/17", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", "aboutMovie": "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.", "trailer": "https://www.youtube.com/watch?v=gCcx85zbxz4" },
  { id: 2, "title": "Jigsaw", "director": "Michael Spierig", "duration": "185", "genre": "Horror", "releaseDate": "27/10/17", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5MDY1Njk3NV5BMl5BanBnXkFtZTgwMzQ4MjQ4MjI@._V1_UX182_CR0,0,182,268_AL_.jpg", "aboutMovie": "Bodies are turning up around the city, each having met a uniquely gruesome demise. As the investigation proceeds, evidence points to one suspect: John Kramer, the man known as Jigsaw, who has been dead for ten years.", "trailer": "https://www.youtube.com/watch?v=vPP6aIw1vgY" }
];

const LATESTFILMS = [
  { id: 0, "title": "It", "director": "Andy Muschietti", "duration": "135", "genre": "Horror", "releaseDate": "08/09/17", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTE0NWEyNDYtYWI5MC00MWY0LTg1NDctZjAwMjkyMWJiNzk1XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SY1000_CR0,0,674,1000_AL_.jpg", "aboutMovie": "A group of bullied kids band together when a shapeshifting demon, taking the appearance of a clown, begins hunting children.", "trailer": "https://www.youtube.com/watch?v=FnCdOQsX5kc" },
  { id: 1, "title": "Blade runner 2049", "director": "Denis Villeneuve", "duration": "235", "genre": "Sci-Fi", "releaseDate": "06/10/17", "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", "aboutMovie": "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.", "trailer": "https://www.youtube.com/watch?v=gCcx85zbxz4" }
];


const Home = () => (
  <div>
    <Link to="/AllFilms">All films</Link>
    <h2>Latest Films</h2>
    <ul>
      {LATESTFILMS.map(i => (
        <Link
          key={i.id}
          to={{
            pathname: `/films/${i.id}`,
            // this is the trick!
            state: { modal: false }
          }}
        >
          <li><img src={i.poster} />
          <p>{i.title}</p>
          <button>READ MORE</button></li>          
        </Link>
      ))}
    </ul>
  </div>
);

const AllFilms = () => (
  <div>
    {FILMS.map(i => (
      <Link
        key={i.id}
        to={{
          pathname: `/films/${i.id}`,
          // this is the trick!
          state: { modal: false }
        }}
      >
        <div key={i.id}>
          <h1>{i.title}</h1>
          <img src={i.poster} alt={i.title} />
          <button>READ MORE</button>
        </div>
      </Link>
    ))}
  </div>
);

const FilmsView = ({ match }) => {
  const films = FILMS[parseInt(match.params.id, 10)];
  if (!films) {
    return <div>Film not found</div>;
  }

  return (
    <div key={films.id}>
      <h1>{films.title}</h1>
      <img src={films.poster} alt={films.title} />
      <Player playsInline poster={films.poster} src={films.trailer} />
      <p>{films.director}</p>
      <p>{films.dureation}</p>
      <p>{films.genre}</p>
      <p>{films.releaseDate}</p>
      <p>{films.aboutMovie}</p>
    </div>
  );
};

const Modal = ({ match, history }) => {
  const films = FILMS[parseInt(match.params.id, 10)];
  if (!films) {
    return null;
  }
  const back = e => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>{films.title}</h1>
        <img src={films.poster} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);

export default App;

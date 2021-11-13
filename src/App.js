import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import { Movie } from "./movieslist";
import Input from '@mui/material/Input';
import { Switch, Route, Link ,useParams} from "react-router-dom";

//const marvel = ;

function App() {
  const [movies, setMovies] = useState([
    {
      movie: "Antman",
      rating: 7,
      poster:
        "https://www.denofgeek.com/wp-content/uploads/2019/04/ant-man-1-main.jpg?resize=768%2C432",
      summary:
        "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym.",
        trailer:"https://www.youtube.com/embed/pWdKf3MneyI"
    },
    {
      movie: "Ironman",
      rating: 9,
      poster:
        "https://www.cnet.com/a/img/bZaqv6tPvT44-cop4ZL2gG3j5wE=/940x0/2020/01/17/7da55a03-ac5b-4ec1-b59b-6b3c2414e68b/egdt5idw4aittju.jpg",
      summary:
        "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee",
        trailer:"https://www.youtube.com/embed/8ugaeA-nMTc"
    },
    {
      movie: "BlackPanther",
      rating: 8,
      poster:
        "https://image.cnbcfm.com/api/v1/image/102129219-544fe3109623b.jpg?v=1497046818&w=1600&h=900",
      summary:
        "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name.",
        trailer:"https://www.youtube.com/embed/xjDjIWPwcPU"
    },
  ]);

  const [movie, moviestate] = useState("");
  const [rating, ratingstate] = useState("");
  const [poster, posterstate] = useState("");
  const [summary, summarystate] = useState("");
  const addMovie = () => {
    const Obj = {
      movie: movie,
      rating: rating,
      poster: poster,
      summary: summary,
    };

    setMovies([...movies, Obj]);
  };
  return (
    // <Addcolor/>

    <div className="App">
      <div className="app-list">
      <ul>
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/Movies">Movies Page</a>
        </li>
        <li>
          {/* Change the url bar but dont refresh */}
          <Link to="/Color">Colors Page</Link>
        </li>
        <li>
          {/* Change the url bar but dont refresh */}
          <Link to="/AddMovie">Add Movie</Link>
        </li>
      
        </ul>
        </div>

        <Switch>
          <Route exact path="/">
           <h1>Welcome to Home Page</h1>
          </Route>
          <Route path="/AddMovie">
          <h2>Add Movies Here</h2>
      <label>Moviename &nbsp;</label>
      <Input
        name="moviename"
        type="text"
        className="textBox"
        onChange={(x) => {
          moviestate(x.target.value);
        }}
      ></Input>
      <br></br>
      <label>Rating</label>
      <Input
        name="rating"
        type="text"
        className="textBox"
        onChange={(x) => {
          ratingstate(x.target.value);
        }}
      ></Input>
      <br></br>
      <label>Poster</label>
      <Input
        name="Poster"
        type="text"
        className="textBox"
        onChange={(x) => {
          posterstate(x.target.value);
        }}
      ></Input>
      <br></br>
      <label>Summary</label>
      <Input
        name="Summary"
        type="text"
        className="textBox"
        onChange={(x) => {
          summarystate(x.target.value);
        }}
      ></Input>
      <br></br>
      <Button id="" variant="contained" onClick={addMovie}>
        AddMovie
      </Button>
          </Route>
          <Route path="/Movies">        

      <section className="movie-list">
        {movies.map(({ movie, rating, poster, summary },index) => (
          <Movie
        
           index={index}
            movie={movie}
            rating={rating}
            poster={poster}
            summary={summary}
          />
        ))}
      </section>
      </Route>

          <Route path="/movies/:id">
          <MovieDetails movies={movies}/>
          </Route>

          <Route path="/Color">
          <Addcolor/>
          </Route>
          <Route exact path="**"> 
           <NotFound />

          </Route>
          
        </Switch>
        
     
    </div>

    // <Counter/>
    //<div></div>
  );
}

/**function Counter(){
  const [dislike,setdislike] = useState(0);
  const [like,setlike] = useState(0);
  return(
    <div className="btn">
      <button  onClick={()=>setdislike(dislike+1)}>👎 dislike{dislike}</button>
      <button  onClick={()=>setlike(like+1)}>👍 like{like}</button>
    </div>
  );
}
**/
/*function Movie({ movie, rating, poster, summary }) {
  return (
    <div className="movie-container">
     
      <img className="movieposter" src={poster} heigth="200" width="200" alt="Movie Poster" />
      <div className ="movie-specs">
      <h2 className="movie">{movie}</h2>
      <h2>⭐ Rating:{rating}</h2>
      </div>
      <h2 className="summary">{summary}</h2>
      <div>
      <Counter />
    </div>
    </div>
  );
}
*/

function Addcolor(){
  const [color,setColor] = useState("");
  const styles = {backgroundColor:color};
 const [colors,setColors] = useState(["pink","orange","crimson"]);
return(
  <div>
    <input style={styles} placeholder="Enter a Color" onChange={(event)=>setColor(event.target.value)} >
      </input> 
      
      <button onClick={()=>setColors([...colors,color])}>Add Color</button>
      {colors.map((clr)=> < ColorBox clr={clr}/>)}
  </div>
);

}

function ColorBox({clr}){
  const styles= {backgroundColor:clr,height:"50px",width:"50px"};
  return <div style ={styles}></div> ;
}

function NotFound(){
   const styles =  {width:"100%"};
  return(
    <img style={styles} src="https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg" alt="Page Not Found"></img>
  );
}

function MovieDetails({movies}){
  const {id} = useParams();
  const movie = movies[id];
  return ( 
      <div>
    <iframe width="669" height="361" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-container">

      <div className ="movie-specs"> 
      
      <h2>⭐ Rating:{movie.rating}</h2>
      <h2 class="summary">{movie.summary}</h2>
      </div>
      </div>
      </div>
    );
}

export default App;

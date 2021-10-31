import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

const marvel = [
  {
    movie: "Antman",
    rating: 7,
    poster:
      "https://www.denofgeek.com/wp-content/uploads/2019/04/ant-man-1-main.jpg?resize=768%2C432",
    summary:
      "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym."
  },
  {
    movie: "Ironman",
    rating: 9,
    poster:
      "https://www.cnet.com/a/img/bZaqv6tPvT44-cop4ZL2gG3j5wE=/940x0/2020/01/17/7da55a03-ac5b-4ec1-b59b-6b3c2414e68b/egdt5idw4aittju.jpg",
    summary:
      "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee"
  },
  {
    movie: "Black Panther",
    rating: 8,
    poster:
      "https://image.cnbcfm.com/api/v1/image/102129219-544fe3109623b.jpg?v=1497046818&w=1600&h=900",
    summary:
      "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name."
  }
];

function App() {
  return (

    <div className="App">
          <section className="movie-list">
      {marvel.map(({movie,rating,poster,summary}) => (
        <Movie
          movie={movie}
          rating={rating}
          poster={poster}
          summary={summary}/>
        
      ))
     
 
      }
      
                 
          </section>
    </div>

   // <Counter/>
        //<div></div>
  );
}

function Counter(){
  const [dislike,setdislike] = useState(0);
  const [like,setlike] = useState(0);
  return(
    <div className="btn">
      <button  onClick={()=>setdislike(dislike+1)}>👎 dislike{dislike}</button>
      <button  onClick={()=>setlike(like+1)}>👍 like{like}</button>
    </div>
  );
}

function Movie({ movie, rating, poster, summary }) {
  return (
    <div class="movie-container">
     
      <img className="movieposter" src={poster} heigth="200" width="200" alt="Movie Poster" />
      <div className ="movie-specs">
      <h2 className="movie">{movie}</h2>
      <h2>⭐ Rating:{rating}</h2>
      </div>
  
      <h2 class="summary">{summary}</h2>
      <div>
      <Counter />
    </div>
    </div>
    
  );
}




export default App;

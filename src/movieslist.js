import { useState } from "react";
export {Movie};

function Movie({ movie, rating, poster, summary }) {
 // const [show,setShow] = useState(true);
 // const styles = {};
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

  
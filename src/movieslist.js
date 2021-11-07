import { useState } from "react";
import Button from '@mui/material/Button';
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
        <Button variant="outlined"  onClick={()=>setdislike(dislike+1)}>👎 dislike{dislike}</Button>
        <Button  variant="outlined" onClick={()=>setlike(like+1)}>👍 like{like}</Button>
      </div>
    );
  }

  
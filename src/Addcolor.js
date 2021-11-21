import React, { useState } from "react";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { ColorBox } from "./App";

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
export function Addcolor() {
  const [color, setColor] = useState("");
  const history = useHistory();
  const styles = { backgroundColor: color };
  const [colors, setColors] = useState(["pink", "orange", "crimson"]);
  return (
    <div>
      <input style={styles} placeholder="Enter a Color" onChange={(event) => setColor(event.target.value)}>
      </input>

      <button onClick={() => setColors([...colors, color])}>Add Color</button>
      {colors.map((clr) => <ColorBox clr={clr} />)}
      <Button id="" variant="contained" onClick={() => { history.goBack(); }}>
        Back
      </Button>
    </div>

  );

}

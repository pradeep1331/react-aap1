import React from "react";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

export function MovieDetails({ movies }) {

  
  
  const { id } = useParams();
  //const movie = movies[id];
  const history = useHistory();
  const [movie,setMovies] = useState([]);

  useEffect(()=>{
    fetch("https://6199446f9022ea0017a7adfb.mockapi.io/movies/"+id,{method:"GET"})
    .then(data => data.json())
    .then(mv => setMovies(mv));
    },[]);

  return (
    <div>
      <iframe width="669" height="361" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-container1">

        <div className="movie-specs1">

          <h2>⭐ Rating:{movie.rating}</h2><br></br>
          <h2 class="summary">{movie.summary}</h2>
        </div>
      </div>

      <Button variant="contained" onClick={() => { history.goBack(); }}>
        Back
      </Button>
    </div>
  );
}

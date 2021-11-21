import React, { useState } from "react";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


export function AddMovie({ movies, setMovies }) {
  const [movie, moviestate] = useState("");
  const [rating, ratingstate] = useState("");
  const [poster, posterstate] = useState("");
  const [summary, summarystate] = useState("");
  const [trailer,setTrailer] = useState("");

  
  const addMovie = () => {
    const Obj = {
      movie: movie,
      rating: rating,
      poster: poster,
      summary: summary,
      trailer:trailer
    };
    //setMovies([...movies, Obj]);

    fetch("https://6199446f9022ea0017a7adfb.mockapi.io/movies",{method:"POST",body:JSON.stringify(Obj),
  headers:{"Content-type":"application/json"}})
    }



  return (
    <div>
      <h2>Add Movies Here</h2>
      <label>Moviename &nbsp;</label>
      <Input name="moviename" type="text" className="textBox" onChange={(x) => {moviestate(x.target.value);}}></Input>
      <br></br>
      <label>Rating</label>
      <Input name="rating" type="text" className="textBox" onChange={(x) => {ratingstate(x.target.value);}}></Input>
      <br></br>
      <label>Poster</label>
      <Input name="Poster" type="text" className="textBox" onChange={(x) => {posterstate(x.target.value); }}></Input>
      <br></br>
      <label>Summary</label>
      <Input name="Summary" type="text" className="textBox" onChange={(x) => {summarystate(x.target.value); }}></Input>
      <br></br>
      <label>Trailer</label>
      <Input name="trailer" type="text" className="textBox" onChange={(x) => {setTrailer(x.target.value); }}></Input>

      <br></br>
      <Button variant="contained" onClick={addMovie}>AddMovie</Button>
    </div>

  );

}

import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useHistory,useParams } from "react-router-dom";


export function EditMovie({ movies, setMovies }) {
  const history = useHistory();
  const { id } = useParams();
  
  const [moviedetail,setMoviedetail] = useState([]);

  const getMoviedetail=()=>{
    fetch("https://6199446f9022ea0017a7adfb.mockapi.io/movies/"+id,{method:"GET"})
    .then(data => data.json())
    .then(mv => setMoviedetail(mv));
     
    } ;
    
    useEffect(getMoviedetail,[]);


  const [movie, moviestate] = useState(moviedetail.movie);
  const [rating, ratingstate] = useState(moviedetail.rating);
  const [poster, posterstate] = useState(moviedetail.poster);
  const [summary, summarystate] = useState(moviedetail.summary);
  const [trailer,setTrailer] = useState(moviedetail.trailer);

  
  
   const editMovie = () => {
    const updatedMovie = {
      movie: movie,
      rating: rating,
      poster: poster,
      summary: summary,
      trailer:trailer
    };
 
    fetch("https://6199446f9022ea0017a7adfb.mockapi.io/movies/"+id,{method:"PUT",body:JSON.stringify(updatedMovie),
    headers:{"Content-type":"application/json"}})
    
    history.push("/Movies");

  };


  return (
   
        <div>
        <h2>Edit Movies Here</h2>
        <label>Movie Name &nbsp;</label>
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
        <Button variant="contained" color="success" onClick={editMovie}>Save</Button>
      </div>
  
    );

}

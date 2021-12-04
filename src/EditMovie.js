import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useHistory,useParams } from "react-router-dom";


export function EditMovie() {
 
  const { id } = useParams();


  
  const [moviedetail,setMoviedetail] = useState([]);

  const getMoviedetail=()=>{
    fetch("https://6199446f9022ea0017a7adfb.mockapi.io/movies/"+id,{method:"GET"})
    .then(data => data.json())
    .then(mv => {setMoviedetail(mv)});
    } ;
    
    useEffect(getMoviedetail,[]);
 


    return moviedetail ? <UpdateMovie moviedetail={moviedetail} /> : "";
 
  }

  function UpdateMovie({moviedetail}){
  const history = useHistory();


  const id = moviedetail.id;
  const [movie, setMovie] = useState(moviedetail.movie);
  const [rating, setRating] = useState(moviedetail.rating);
  const [poster, setPoster] = useState(moviedetail.poster);
  const [summary, setSummary] = useState(moviedetail.summary);
  const [trailer,setTrailer] = useState(moviedetail.trailer);

  
   const editMovie = () => {
    const updatedMovie = {
      id,
       movie,
       rating,
       poster,
       summary,
      trailer
    }

    fetch("https://6199446f9022ea0017a7adfb.mockapi.io/movies/"+id,{method:"PUT",body:JSON.stringify(updatedMovie),
    headers:{"Content-type":"application/json"},
  })
     .then(() => history.push("/Movies"));
  }

  

  return (

    <div>
    <h2>Edit Movies Here</h2>
    <label>Movie Name &nbsp;</label>
    <Input name="moviename" type="text" className="textBox" value={movie} onChange={(x) => {setMovie(x.target.value);}}></Input>
    <br></br>
    <label>Rating</label>
    <Input name="rating" type="text" className="textBox" value={rating} onChange={(x) => {setRating(x.target.value);}}></Input>
    <br></br>
    <label>Poster</label>
    <Input name="Poster" type="text" className="textBox" value={poster} onChange={(x) => {setPoster(x.target.value); }}></Input>
    <br></br>
    <label>Summary</label>
    <Input name="Summary" type="text" className="textBox" value={summary} onChange={(x) => {setSummary(x.target.value); }}></Input>
    <br></br>
    <label>Trailer</label>
    <Input name="trailer" type="text" className="textBox" value={trailer} onChange={(x) => {setTrailer(x.target.value); }}></Input>

    <br></br>
    <Button variant="contained" color="success" onClick={editMovie}>Save</Button>
  </div>

  );

  
}
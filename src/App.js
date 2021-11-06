import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

import { Movie } from "./movieslist";

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

  const [movie,moviestate] = useState("");
  const [rating,ratingstate] = useState("");
  const [poster,posterstate] = useState("");
  const [summary,summarystate] = useState("");

  return (
     // <Addcolor/>
   <div className="App">
         
                   <h2>Add Movies Here</h2>
                   <label>Moviename &nbsp;</label>
                   <input name="moviename" type="text" className="textBox" onChange={(x)=>{moviestate(x.target.value)}} ></input><br></br>
                   <label>Rating</label>
                   <input name="rating" type="text" className="textBox" onChange={(x)=>{ratingstate(x.target.value)}}></input><br></br>
                   <label>Poster</label>
                   <input name="Poster" type="text" className="textBox" onChange={(x)=>{posterstate(x.target.value)}}></input><br></br>
                   <label>Summary</label>
                   <input name="Summary" type="text" className="textBox" onChange={(x)=>{summarystate(x.target.value)}} ></input><br></br>
                   <button id="" onClick={()=>{
                                          let Obj= {
                                         movie : movie,
                                         rating : rating,
                                         poster : poster,          
                                         summary : summary
                                          }

                                        marvel.push(Obj);                                   
                                       
                   }}>AddMovie</button>
                   
                 <br></br>

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
*/

/*function Addcolor(){
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

*/

/*function ColorBox({clr}){
  const styles= {backgroundColor:clr,height:"50px",width:"50px"};
  return <div style ={styles}></div> ;
}
*/
export default App;

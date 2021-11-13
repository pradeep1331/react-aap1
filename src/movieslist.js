import { useState } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';  
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import {Link,Redirect,Route,Switch} from "react-router-dom";
export {Movie};


function Movie({ movie, rating, poster, summary,index }) {
 // const [show,setShow] = useState(true);
 // const styles = {};
  
    const [show,setShow] = useState(true);
    const history = useHistory();
    const styles = {display: show ? " ":"none" }
    return (
      <Card class="movie-container">
       
        <img className="movieposter" src={poster} heigth="200" width="200" alt="Movie Poster" />
        <div className ="movie-specs">
     
        <h2 className="movie">{movie}<IconButton color="secondary" onClick={()=>setShow(!show)} style={{marginBottom:"10px"}}>
          {show ?<ExpandLessIcon/>:<ExpandMoreIcon/>}
        
        </IconButton> 
        <IconButton color="primary" onClick={()=>{history.push(`/movies/${index}`)}}>
          <VideoLibraryIcon/>
          </IconButton> 
          <IconButton >
          <DeleteIcon/>
          </IconButton> 
          <IconButton >
          <EditIcon />
          </IconButton> 
        </h2>
      
        <h2>⭐ Rating:{rating}</h2>
    
        </div>
    
        {/* <Button onClick={()=>setShow(!show)} style={{marginBottom:"10px"}} variant="outlined">{show ?"Hide":"show"} Description</Button>*/}
        <CardContent>
        <h2 style={styles} class="summary">{summary}</h2>
        </CardContent>
        <div>
        <Counter />
      
      </div>
      </Card>
    );
  }


  function Counter(){
    const [dislike,setdislike] = useState(0);
    const [like,setlike] = useState(0);
    return(
      <div className="btn">
        <IconButton aria-label="likes"  color="primary" onClick={()=>setlike(like+1)}>
        <Badge badgeContent={like} color="primary">
        👍 
    </Badge>
      </IconButton>
      <IconButton aria-label="dislikes"  color="secondary" onClick={()=>setdislike(like+1)}>
      <Badge badgeContent={dislike} color="error">
      👎  
    </Badge>
      </IconButton>
       </div>
    );
  }

  
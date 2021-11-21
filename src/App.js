import "./App.css";
import React, { useState ,createContext, useEffect} from "react";
import { Movie } from "./movieslist";
import { Switch, Route, Link} from "react-router-dom";
import { Addcolor } from "./Addcolor";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import { MovieDetails } from "./MovieDetails";
import DeleteIcon from '@mui/icons-material/Delete';
import { NotFound } from "./NotFound";
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {

  const [movies, setMovies] = useState([
    {
      id :100,
      movie: "Antman",
      rating: 7,
      poster:
        "https://www.denofgeek.com/wp-content/uploads/2019/04/ant-man-1-main.jpg?resize=768%2C432",
      summary:
        "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym.",
        trailer:"https://www.youtube.com/embed/pWdKf3MneyI"
    },
    {
      id:200,
      movie: "Ironman",
      rating: 9,
      poster:
        "https://www.cnet.com/a/img/bZaqv6tPvT44-cop4ZL2gG3j5wE=/940x0/2020/01/17/7da55a03-ac5b-4ec1-b59b-6b3c2414e68b/egdt5idw4aittju.jpg",
      summary:
        "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee",
        trailer:"https://www.youtube.com/embed/8ugaeA-nMTc"
    },
    {
      id:300,
      movie: "BlackPanther",
      rating: 8,
      poster:
        "https://image.cnbcfm.com/api/v1/image/102129219-544fe3109623b.jpg?v=1497046818&w=1600&h=900",
      summary:
        "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name.",
        trailer:"https://www.youtube.com/embed/xjDjIWPwcPU"
    },
  ]);

   const history = useHistory();
     
   const [mode,setMode]=useState("dark");;
    
   const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const getMovies=()=>{
    fetch("https://6199446f9022ea0017a7adfb.mockapi.io/movies",{method:"GET"})
    .then(data => data.json())
    .then(mvs => setMovies(mvs));
    } ;

  useEffect(getMovies,[]);
  
  return (
    // <Addcolor/>
    <ThemeProvider theme={theme}>
       <Paper elevation={3}>
    <div className="App">

          

        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
           <Button color="inherit" onClick={()=>history.push("/")} >
            HOME
          </Button>
          <Button color="inherit" onClick={()=>history.push("/movies")} >
          Movies Page
          </Button>
          <Button color="inherit" onClick={()=>history.push("/color")}>
          {/* Change the url bar but dont refresh */}
        Colors Page
          </Button>
          <Button color="inherit" onClick={()=>history.push("/addMovie")}>
          {/* Change the url bar but dont refresh */}
        Add Movie
          </Button>
          <Button color="inherit" onClick={()=>{setMode(mode==="light"?"dark":"light")}} >

          <IconButton color="inherit">
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
           
            {mode==="light"?"dark":"light"} mode
          </Button>
        </Toolbar>
      </AppBar>
    </Box>

          <Switch>
          
            <Route exact path="/">
            <h1>Welcome to react Movie App!!</h1>
            </Route>
            <Route path="/movies/edit/:id">

            <EditMovie movies={movies} setMovies={setMovies} />
            </Route> 
            <Route path="/addMovie">
              <AddMovie movies={movies} setMovies={setMovies} />
            </Route>   
                   
            <Route path="/movies/:id">
            <MovieDetails movies={movies} setMovies={setMovies} />
            </Route>     
            <Route path="/movies">       
        <section className="movie-list">
          {movies.map(({id, movie, rating, poster, summary },index) => (
            <Movie
              id={id}
              movie={movie}
              rating={rating}
              poster={poster}
              summary={summary}
              deleteButton={ <IconButton color="error" onClick={()=>{
                const removeMovieIndex = id;
                   //create a copy of movies and remove the element form it
                   fetch("https://6199446f9022ea0017a7adfb.mockapi.io/movies/"+removeMovieIndex,{method:"DELETE"});
                   getMovies();
                 
              }} >
                <DeleteIcon />
                </IconButton> }

              editButton={ <IconButton color="secondary" onClick={()=>{
                history.push("/movies/edit/"+id);  
                      }} >
  <EditIcon />
  </IconButton> }

            />
          ))}
          
        </section>
        </Route>
            <Route path="/Color">
            <Addcolor/>
            </Route>
            <Route exact path="**"> 
            <NotFound />
            </Route>
          </Switch>
        
     
    </div>

    </Paper>
      </ThemeProvider>
    // <Counter/>
    //<div></div>


   
  );
}

export function ColorBox({clr}){
  const styles= {backgroundColor:clr,height:"50px",width:"50px"};
  return <div style ={styles}></div> ;
}

export default App;


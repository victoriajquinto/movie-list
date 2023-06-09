import React from 'react';
import { useState } from 'react';

const MovieList = ({ movies, searchText, newMovies, wasWatched, setWasWatched }) => {
  //map movie list array, pass title to MovieFormat
  // <MovieFormat movie = {movie} key = {i}/>
  let list;

  if(newMovies.length !== 0) {
    list = newMovies.map((movie, i) => <MovieFormat movie = {movie}  toggleStatus={toggleStatus} key = {i}/>)
  } else {
    list = movies
      .filter((movie)=>{return movie.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1})
      .map((movie, i) => <MovieFormat movie = {movie} wasWatched={wasWatched} setWasWatched={setWasWatched} key = {i} />)
  }

  if(!list.length) {
    list = 'No matches found, sorry!'
  }
  return (<>{list}</>)
}

const MovieFormat = ({movie, wasWatched, setWasWatched}) => {
  // const [movieStatus, setMovieStatus] = useState['']
  let statusDisplay = movie.status
  if(movie.status === true) {
    statusDisplay = 'watched'
  } else {
    statusDisplay = 'unwatched'
  }
  let handleStatus = function(event) {
    let currentStatus = event.target.innerText;

    if(currentStatus === 'watched') {
      alert('movie watched');

    } else {
      alert('movie unwatched');

    }
  }
  return (
  <>
    <div>
      <span>{movie.title}</span>
      <button onClick={handleStatus}>{statusDisplay}</button>
    </div>
  </>
  )
}

const NewMovies = ({ addNewMovies }) => {
  const [title, setTitle] = useState('');
  let handleSubmit = function(event) {
    event.preventDefault();
    // console.log('event: ', event)
    // alert(`submit!`);
    addNewMovies(title);
    setTitle('');
  };
  return (
    <>
      <form name="newMoviesComponent" onSubmit = {handleSubmit}>
        <input type="text" name="suggestion" id="addText" defaultValue = {title} placeholder="Add movie title here" onChange={(event) => {setTitle(event.target.value)}}></input>
        <input type="submit" value="Add!"></input>
      </form>
    </>
  )
}
const SearchBar = ({searchText, setSearchText}) => ( //{ event } ??
  <>
    <form name="searchComponent">
      <input type="search" name="movie" id="searchText" defaultValue={searchText} placeholder="Search..." onChange={(event) => setSearchText(event.target.value)}></input>
      <input type="submit" value="Go!" ></input>
    </form>
  </>
)

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [newMovies, setNewMovies] = useState([]);
  const [wasWatched, setWasWatched] = useState();
  const [movieList, setMovieList] = useState(movies)
  var movies = [
    {title: 'Mean Girls', status: false},
    {title: 'Hackers', status: false},
    {title: 'The Grey', status: false},
    {title: 'Sunshine', status: false},
    {title: 'Ex Machina' ,status: false},
  ];


  const addNewMovies = function(newTitle) {
    setNewMovies([...newMovies, {title: newTitle, status: false}]);
  };
  const toggleStatus = function(movie){

  }


  return (
  <div>
    <NewMovies addNewMovies={addNewMovies}/>
    <SearchBar searchText={searchText} setSearchText={setSearchText} newMovies={newMovies} setNewMovies={setNewMovies}/>
    <MovieList movies={movies} searchText={searchText} newMovies={newMovies} wasWatched={wasWatched} setWasWatched={setWasWatched} movieList={movieList} setMovieList={setMovieList}/>
  </div>
  )
}



export default App;
import React from 'react';
import { useState } from 'react';

const MovieList = ({ movies, searchText, newMovies }) => {
  //map movie list array, pass title to MovieFormat
  // <MovieFormat movie = {movie} key = {i}/>
  let list;

  if(newMovies.length !== 0) {
    list = newMovies.map((movie, i) => <MovieFormat movie = {movie} key = {i}/>)
  } else {
    list = movies
      .filter((movie)=>{return movie.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1})
      .map((movie, i) => <MovieFormat movie = {movie} key = {i}/>)
  }


  if(!list.length) {
    list = 'No matches found, sorry!'
  }
  return (<>{list}</>)
}

const MovieFormat = ({movie: {title}}) => (
  <div>{title}</div>
)

const SearchBar = ({searchText, setSearchText}) => ( //{ event } ??
  <>
    <form name="searchComponent" onSubmit={(event) => { event.preventDefault(); return (setSearchText(event.target.value))}}>
      <input type="search" name="movie" id="searchText" defaultValue={searchText} placeholder="Search..." ></input>
      <input type="submit" value="Go!" ></input>
    </form>
  </>
)

const NewMovies = ({newMovies, setNewMovies, addNewMovies, movies}) => {

  return (
    <>
      <form name="newMoviesComponent">
        <input type="text" name="suggestion" id="addText" defaultValue={newMovies} placeholder="Add movie title here" onChange={(event) => setNewMovies(event.target.value)}></input>
        <input type="submit" value="Add!" ></input>
      </form>
    </>
  )
}

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [newMovies, setNewMovies] = useState([]);
  var movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  return (
  <div>
    <NewMovies newMovies={newMovies} setNewMovies={setNewMovies} movies={movies}/>
    <SearchBar searchText={searchText} setSearchText={setSearchText} newMovies={newMovies} setNewMovies={setNewMovies}/>
    <MovieList movies={movies} searchText={searchText} newMovies={newMovies}/>
  </div>
  )
}



export default App;
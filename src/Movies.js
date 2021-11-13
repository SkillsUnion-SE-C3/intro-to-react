import movies from './movieList'

function Movies() {
  function logMovie(name) {
    console.log(name)
  }

  return (
    <div>{movies.map((movie, index) => {
      return <h2 key={index} onClick={() => logMovie(movie.name)}>{movie.name}</h2>
    })}</div>
  )
}

export default Movies
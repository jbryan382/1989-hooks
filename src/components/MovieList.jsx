import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MovieList = () => {
  let apiKey = '247738650e64acaaf86dc7de0021f7d6'

  const [MovieResp, setMovieResp] = useState([])
  const [searchTerm, setsearchTerm] = useState('1989')

  const loadMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=${searchTerm}&sort_by=popularity.desc&api_key=${apiKey}`
      )
      .then(resp => {
        console.log(resp.data.results)
        setMovieResp(resp.data.results)
      })
  }
  useEffect(() => {
    loadMovies()
  }, [])

  useEffect(() => {
    loadMovies()
  }, [searchTerm])
  return (
    <div>
      <section className="Title_section">
        <h1>Movie List for {searchTerm}</h1>
        <input
          placeholder="Enter your selected year"
          onChange={e => {
            setsearchTerm(e.target.value)
          }}
        />
      </section>
      {MovieResp.length === 0 && <h5>Loading...</h5>}
      {searchTerm.length === 4 && (
        <div className="movie_list_section">
          <ul>
            {MovieResp.map((movie, i) => {
              return (
                <>
                  <li>
                    <p key={i}>{movie.title}</p>
                  </li>
                </>
              )
            })}
          </ul>
        </div>
      )}
      {searchTerm.length < 4 && <h5>Please finish Query</h5>}
    </div>
  )
}

export default MovieList

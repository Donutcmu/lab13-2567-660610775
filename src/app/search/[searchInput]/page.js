"use client";
import { movieDB } from "@lib/movieDB";
import MovieRow from "@components/MovieRow";
import {movieIdPageParams} from "@lib/types"

export default function SearchResultPage({params}:movieIdPageParams) {
  const searchInput = String(params.id);
  
  //tip1 : before filtering movie, replace all "%20" with " " (space) in the input
  // const processedSearchInput = ...
  const processedSearchInput = searchInput.replaceAll("%20"," ");
  /*
  tip2 : Use "includes" string method to check substring
  Example : "ABC".includes("AB") -> return true

  tip3 : To implement case insensitive searching, use "toLocaleLowerCase" string method
  to convert movie title and searchInput to lower case 
  const filteredMovies = movieDB.filter((movie) =>
    you code here...
  );
  */
 const filteredMovies = movieDB.filter((movie)=>
    movie.title.toLocaleLowerCase().includes(processedSearchInput.toLocaleLowerCase())
)
const selectedMovie = movieDB.find((movie)=>movie.id===id)
    if(!selectedMovie){
        return <p className='text-center'>Movie is not found</p>
    }

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {processedSearchInput} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">Found {filteredMovies.length} result(s)</p>
      {/* Use  "filteredMovies" variable to map-loop rendering MovieRow component */}
      <div>
        {filteredMovies.map((movie,i)=>(
                <MovieRow
                key = {movie.id}
                id = {movie.id}
                title = {movie.title}
                number={i+1}
                rating = {movie.rating}
                
                />

              ))}

      </div>
      
    </div>
  );
}

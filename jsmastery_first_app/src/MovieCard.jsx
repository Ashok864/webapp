import React from "react";

const MovieCard = ({ movie }) => {
    return(  // inside cls= movie paste
        <div className='movie'>
            <div>
                {/* movie1 var la oru objct copy pani set pannitom upper */}
                <p>{movie.Year}</p>       
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>
    )
}
export default MovieCard;
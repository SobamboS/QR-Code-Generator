// import { Injectable } from '@nestjs/common';
// import { Movie } from './movie.model'; // Define your Movie model

// @Injectable()
// export class MovieService {
//   private readonly movies: Movie[]; // Load your movie data here

//   constructor() {
//     // Initialize your movie data (you can fetch it from an external source or a database)
//     this.movies = [...]; // Your array of movies
//   }

//   // Function to get 10 random movies
//   getRandomMovies(): Movie[] {
//     const randomMovies: Movie[] = [];
//     const totalMovies = this.movies.length;

//     if (totalMovies < 10) {
//       // If you have fewer than 10 movies, return all of them
//       return this.movies;
//     }

//     // Generate an array of unique random indexes
//     const randomIndexes = [];
//     while (randomIndexes.length < 10) {
//       const randomIndex = Math.floor(Math.random() * totalMovies);
//       if (!randomIndexes.includes(randomIndex)) {
//         randomIndexes.push(randomIndex);
//       }
//     }

//     // Get the movies at the random indexes
//     for (const index of randomIndexes) {
//       randomMovies.push(this.movies[index]);
//     }

//     return randomMovies;
//   }
// }

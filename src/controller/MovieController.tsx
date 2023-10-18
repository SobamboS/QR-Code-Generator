// MovieController.ts
import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('link-to-random-movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getMovies() {
    const randomMovies = await this.movieService.fetchMovies();
    return randomMovies;
  }
}

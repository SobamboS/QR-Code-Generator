import { Injectable} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MovieService {
  constructor(private httpService: HttpService) {}

  // Function to fetch and return movies from the data URL
  fetchMovies(): Observable<AxiosResponse> {
    const dataUrl = 'https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/movies.json';
    
    // Make an HTTP GET request to fetch the JSON data
    return this.httpService.get(dataUrl);
  }
}



// To read a JSON file from a URL using typescript

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {
  urlBase = `https://api.themoviedb.org/3/`;
  key = '323112ea2281b9eb70f319f4df422c6b';
  generateUrl = (_type) => this.urlBase + `movie/${_type}?api_key=` + this.key;

  constructor(private http: HttpClient){
  }

  getMovies(type){

    return this.http.get(this.generateUrl(type))
  }
}

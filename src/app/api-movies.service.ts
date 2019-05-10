import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {
  urlBase = `https://api.themoviedb.org/3/`;
  key = '323112ea2281b9eb70f319f4df422c6b';
  generateUrl = (_type) => this.urlBase + `movie/${_type}?api_key=` + this.key;
  // generateSimilar = (type) => this.urlBase + `movie/${id}?api_id=` + this.id;

  constructor(private http: HttpClient){
  }
// metodo en el servicio que me pide la informacion general de todas las peliculas
  getMovies(type){
    return this.http.get(this.generateUrl(type))
  }
// metodo en el servicio que pide las peliculas
  getMovie(id: string) {
    return this.http.get(this.generateUrl(id));
  }
//metodo en el servicio que pide las peliculas relacionadas
  getRelatedMovie(id: string) {
    return this.http.get(this.generateUrl(id + '/similar'));
  }
}

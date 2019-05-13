import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {
  urlBase = `https://api.themoviedb.org/3/`;
  key = '323112ea2281b9eb70f319f4df422c6b';
  generateUrl = (type: string, page = 1 ) => `${this.urlBase}movie/${type}?api_key=${this.key}&page=${page}`;


  constructor(private http: HttpClient){
  }
// metodo en el servicio que me pide la informacion general de todas las peliculas
  getMovies(type:string, page?: number){
    console.log(page);

    return this.http.get(this.generateUrl(type, page))
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

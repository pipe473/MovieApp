import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  type: string;
  typeSubscription: any;
  movies: object[];

  // movie: object[];
  validTypes = ['top_rated', 'popular', 'upcoming'];

  constructor(
    private route: ActivatedRoute,
    private api: ApiMoviesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.typeSubscription = this.route.params.subscribe(params => {
      this.type = params.type;
      if (this.validTypes.includes(params.type)) {
        this.api.getMovies(this.type).subscribe((res: any)=> {
         this.movies= res.results;
         console.log(res);
        });

      } else {
        this.router.navigate(['/movies/popular']);
      }
    })
  }

  ngOnDestroy() {
    this.typeSubscription.unsubscribe();
  }
}

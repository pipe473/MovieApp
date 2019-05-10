import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMoviesService } from '../api-movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

movie : object[];
id: string;
typeSubscription: any;
related: object[];


  constructor(

    private route: ActivatedRoute,
    private api: ApiMoviesService )
  { }

  ngOnInit() {
    this.typeSubscription = this.route.params.subscribe(params => {
      this.id = params.id;

        this.api.getMovies(this.id).subscribe((res: any)=> {
         this.movie= res;

         console.log(res);

        });

        this.api.getRelatedMovie(this.id).subscribe((res: any)=> {
          this.related= res.results;

          console.log(res);
         });
    })
  }
  ngOndestroy() {
    this.typeSubscription.unsubscribe();
  }
}




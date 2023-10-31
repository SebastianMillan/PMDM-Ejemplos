import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-popular-list-component',
  templateUrl: './movie-popular-list-component.component.html',
  styleUrls: ['./movie-popular-list-component.component.css']
})
export class MoviePopularListComponentComponent implements OnInit{
  popularMovieList: Movie[] = [];
  movieName = '';
  movieOverview = '';
  movieImg = '';
  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void {
    this.getAllMovies();
  }

  onAgentlicked(uuid: string, modal: any) {
    this.movieService.getAgentById(uuid).subscribe(agent => {
      this.agenName = agent.displayName;
      this.agentDesc = agent.description;
      this.agentIcon = agent.displayIcon;
      this.agentRole = agent.role.displayName;
      this.modalService.open(modal, {
        size:'lg'
      });
    })
  }

  getAllMovies() {
    this.movieService.getPopularMovies().subscribe(resp => {
      this.popularMovieList = resp.results;
    })
  }
}

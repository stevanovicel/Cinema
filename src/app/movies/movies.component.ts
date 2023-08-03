import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Movies, MoviesService } from './movies.service';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetalisComponentComponent } from '../movie-detalis-component/movie-detalis-component.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit{

  moviesSource: Movies[] = [];
  filteredMovies: Movies[] = [];
   searchValue: string = '';
  selectedGenre: string = '';

  constructor(
    private moviesService: MoviesService,
    private dialog: MatDialog
  ) {
    this.moviesSource = this.moviesService.getMovies();
    this.filteredMovies = this.moviesSource;
  }

  filterMovies(): void {
    const filterValue = this.searchValue.trim().toLowerCase();
    this.filteredMovies = this.moviesSource.filter(movie =>
      (this.selectedGenre === '' || movie.genre.toLowerCase() === this.selectedGenre.toLowerCase()) &&
      (movie.genre.toLowerCase().includes(filterValue) || movie.name.toLowerCase().includes(filterValue))
    );
  }
  
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.moviesSource = this.moviesService.getMovies();
    this.filteredMovies = this.moviesSource;
  }

  openMovieDetailsDialog(movie: Movies): void {
    const dialogRef = this.dialog.open(MovieDetalisComponentComponent, {
      width: 'auto',
      panelClass: 'custom-dialog',
      data: movie
    });

    dialogRef.afterClosed().subscribe(result => {
      // Ovde možete obraditi povratne informacije iz dijaloga, ako je potrebno
      console.log('Dijalog zatvoren.');
    });
  }

 
}

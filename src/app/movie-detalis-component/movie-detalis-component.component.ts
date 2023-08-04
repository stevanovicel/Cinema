import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movies, MoviesService } from '../movies/movies.service';
import { UserService } from '../auth/user.service';
import { ReservationService } from '../reservations/reservation.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-detalis-component',
  templateUrl: './movie-detalis-component.component.html',
  styleUrls: ['./movie-detalis-component.component.css']
})
export class MovieDetalisComponentComponent {
  totalPrice: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public movie: Movies,
    private dialogRef: MatDialogRef<MovieDetalisComponentComponent>,
    private reservationService: ReservationService,
    private moviesService: MoviesService,
    private snackBar: MatSnackBar
  ) { }

closeDialog(): void {
  this.dialogRef.close();
}

buyTickets(): void {
  this.reservationService.addReservation(this.movie);
  this.openSnackBar();
}

addAmount(movies: Movies) {
  movies.amount++;
  this.updateTotalPrice();
}

removeAmount(movies: Movies) {
  movies.amount--;
  this.updateTotalPrice();
}

updateTotalPrice() {
  this.totalPrice = this.movie.price * this.movie.amount;
}

  openSnackBar() {
    const config: MatSnackBarConfig = {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    };

    this.snackBar.open('Tickets reserved!', 'OK', config);
  }
}

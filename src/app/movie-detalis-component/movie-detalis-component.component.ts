import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movies } from '../movies/movies.service';
import { UserService } from '../auth/user.service';
import { ReservationService } from '../reservations/reservation.service';

@Component({
  selector: 'app-movie-detalis-component',
  templateUrl: './movie-detalis-component.component.html',
  styleUrls: ['./movie-detalis-component.component.css']
})
export class MovieDetalisComponentComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public movie: Movies,
    private dialogRef: MatDialogRef<MovieDetalisComponentComponent>,
    private reservationService: ReservationService
  ) { }

closeDialog(): void {
  this.dialogRef.close();
}

buyTickets(): void {
  this.reservationService.addReservation(this.movie);
}
}

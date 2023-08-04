import { Injectable } from '@angular/core';
import { Movies } from '../movies/movies.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Movies[] = [];

  constructor() { }

  addReservation(movie: Movies) {
    this.reservations.push(movie);
  }

  getReservations() {
    return this.reservations;
  }

  clearReservations() {
    this.reservations = [];
  }

  // removeReservation(movie: Movies) {
  //   const index = this.reservations.indexOf(movie);
  //   if (index !== -1) {
  //     this.reservations.splice(index, 1);
  //   }
  // }

}

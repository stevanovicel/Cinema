import { Injectable } from '@angular/core';
import { Movies } from '../movies/movies.service';


export class ReservationService {
  private reservations: Array<Movies> = [];


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

  removeFromCartList(movies: Movies) {
    for(var i = 0; i < this.reservations.length; i++) {
        if (this.reservations[i] == movies) {
            this.reservations.splice(i, 1);
        }
    }
}

}

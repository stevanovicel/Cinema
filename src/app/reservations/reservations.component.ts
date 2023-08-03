import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies/movies.service';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit{
  reservations: Movies[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  clearReservations(): void {
    this.reservationService.clearReservations();
    this.reservations = [];
  }
}

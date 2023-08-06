import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies/movies.service';
import { ReservationService } from './reservation.service';
import { MatTableDataSource } from '@angular/material/table';
import { RemoveComponent } from './remove/remove.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit{
  
  reservations: Movies[] = [];
  totalPrice: number = 0;
 dataSource: MatTableDataSource<Movies> | null = null;

  constructor(private reservationService: ReservationService,
    private dialog: MatDialog) { }
  

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
    this.calculateTotalPrice();
    this.dataSource = new MatTableDataSource(this.reservations);
    this.dataSource.data = this.reservationService.getReservations();
  }

  clearReservations(): void {
    this.reservationService.clearReservations();
    this.reservations = [];
  }
  
  calculateTotalPrice() {
    this.totalPrice = this.reservations.reduce((total, movie) => total + movie.price * movie.amount, 0);
  }

  updateTotalPrice() {
    this.calculateTotalPrice();
  }

  addAmount(movies: Movies) {
    movies.amount++;
    this.updateTotalPrice();
  }
  
  removeAmount(movies: Movies) {
    movies.amount--;
    this.updateTotalPrice();
  }
  
  // removeReservation(movie: Movies) {
  //   const index = this.reservations.indexOf(movie);
  //   if (index !== -1) {
  //     this.reservations.splice(index, 1);
  //     if (this.dataSource) {
  //       this.dataSource.data = this.reservations; 
  //     }
  //     this.calculateTotalPrice();
  //   }
  // }
  
 removeReservation(movies: Movies) {
  const dialogRef = this.dialog.open(RemoveComponent, {
    data: {
      name: movies.name
    }
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      this.reservationService.removeFromCartList(movies);
      this.reservations = this.reservationService.getReservations();
      this.dataSource = new MatTableDataSource(this.reservations);
      this.dataSource._updateChangeSubscription(); // Osvežavanje tabele
      this.calculateTotalPrice();
    }
  });
}

}

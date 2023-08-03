import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './auth/user.service';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReservationService } from './reservations/reservation.service';
import { MoviesService } from './movies/movies.service';
import { MovieDetalisComponentComponent } from './movie-detalis-component/movie-detalis-component.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ReservationsComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    MovieDetalisComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatSelectModule
  ],
  providers: [UserService, ReservationService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from "@angular/core";


export interface Movies {
    id: number;
    photo: string;
    name: string;
    genre: string;
    release_date: string;
    description: string;
    duration: string;
    time: string;
    price: number;
    amount: number;
}
@Injectable()
export class MoviesService {

    

    private movies: Array<Movies> = [
        {
            id: 1,
            photo: 'assets/img/titanic.jpg',
            name: 'Titanic',
            genre: 'Romantic',
            release_date: '1997-02-01 21:00',
            description: 'nebitno',
            duration: '127min',
            time: '26.may',
            price: 15,
            amount: 1
        },
        {
            id: 2,
            photo: 'assets/img/xmen.jpg',
            name: 'X-MEN',
            genre: 'Sci F',
            release_date: '1997-02-01 21:00',
            description: 'nebitno',
            duration: '127min',
            time: '26.may',
            price: 15,
            amount: 1
        },
        {
            id: 3,
            photo: 'assets/img/avengers.jpg',
            name: 'Avengers: Endgame',
            genre: 'Action',
            release_date: '2019-04-26 18:00',
            description: 'nebitno',
            duration: '181min',
            time: '15.aug',
            price: 15,
            amount: 1
          },
          {
            id: 4,
            photo: 'assets/img/harry_potter.jpg',
            name: 'Harry Potter',
            genre: 'Fantasy',
            release_date: '2001-11-16 19:30',
            description: 'nebitno',
            duration: '152min',
            time: '02.jul',
            price: 15,
            amount: 1
          },
          {
            id: 5,
            photo: 'assets/img/jurassic_park.jpg',
            name: 'Jurassic Park',
            genre: 'Adventure',
            release_date: '1993-06-11 20:15',
            description: 'nebitno',
            duration: '127min',
            time: '10.jun',
            price: 15,
            amount: 1
          },
          {
            id: 6,
            photo: 'assets/img/inception.jpg',
            name: 'Inception',
            genre: 'Sci Fi',
            release_date: '2010-07-16 21:30',
            description: 'nebitno',
            duration: '148min',
            time: '28.apr',
            price: 15,
            amount: 1
          },
          {
            id: 7,
            photo: 'assets/img/interstellar.jpg',
            name: 'Interstellar',
            genre: 'Sci Fi',
            release_date: '2014-11-07 20:45',
            description: 'nebitno',
            duration: '169min',
            time: '12.nov',
            price: 15,
            amount: 1
          },
          {
            id: 8,
            photo: 'assets/img/the_lion_king.jpg',
            name: 'The Lion King',
            genre: 'Animation',
            release_date: '1994-06-24 17:00',
            description: 'nebitno',
            duration: '88min',
            time: '04.dec',
            price: 15,
            amount: 1
          },
          {
            id: 9,
            photo: 'assets/img/the_dark_knight.jpg',
            name: 'The Dark Knight',
            genre: 'Action',
            release_date: '2008-07-18 22:15',
            description: 'nebitno',
            duration: '152min',
            time: '06.mar',
            price: 15,
            amount: 1
          },
          {
            id: 10,
            photo: 'assets/img/toy_story.jpg',
            name: 'Toy Story',
            genre: 'Animation',
            release_date: '1995-11-22 16:45',
            description: 'nebitno',
            duration: '81min',
            time: '17.oct',
            price: 15,
            amount: 1
          },
          {
            id: 11,
            photo: 'assets/img/the_shawshank_redemption.jpg',
            name: 'The Shawshank Redemption',
            genre: 'Drama',
            release_date: '1994-09-23 19:45',
            description: 'nebitno',
            duration: '142min',
            time: '20.sep',
            price: 15,
            amount: 1
          },
          {
            id: 12,
            photo: 'assets/img/gladiator.jpg',
            name: 'Gladiator',
            genre: 'Action',
            release_date: '2000-05-12 20:30',
            description: 'nebitno',
            duration: '155min',
            time: '11.jul',
            price: 15,
            amount: 1
          },
          {
            id: 13,
            photo: 'assets/img/forrest_gump.jpg',
            name: 'Forrest Gump',
            genre: 'Drama',
            release_date: '1994-07-06 18:15',
            description: 'nebitno',
            duration: '142min',
            time: '29.aug',
            price: 15,
            amount: 1
          },
          {
            id: 14,
            photo: 'assets/img/the_matrix.jpg',
            name: 'The Matrix',
            genre: 'Sci Fi',
            release_date: '1999-03-31 21:00',
            description: 'nebitno',
            duration: '136min',
            time: '17.may',
            price: 15,
            amount: 1
          },
          {
            id: 15,
            photo: 'assets/img/the_hateful_eight.jpg',
            name: 'The Hateful Eight',
            genre: 'Western',
            release_date: '2015-12-25 20:00',
            description: 'nebitno',
            duration: '187min',
            time: '08.jan',
            price: 15,
            amount: 1
          },
          {
            id: 16,
            photo: 'assets/img/inception.jpg',
            name: 'Inception',
            genre: 'Sci Fi',
            release_date: '2010-07-16 21:30',
            description: 'nebitno',
            duration: '148min',
            time: '28.apr',
            price: 15,
            amount: 1
          },
          {
            id: 17,
            photo: 'assets/img/et.jpg',
            name: 'E.T. the Extra-Terrestrial',
            genre: 'Sci Fi',
            release_date: '1982-06-11 19:30',
            description: 'nebitno',
            duration: '115min',
            time: '15.jun',
            price: 15,
            amount: 1
          },
          {
            id: 18,
            photo: 'assets/img/schindlers_list.jpg',
            name: 'Schindler\'s List',
            genre: 'Drama',
            release_date: '1993-12-15 20:15',
            description: 'nebitno',
            duration: '195min',
            time: '07.jan',
            price: 15,
            amount: 1
          },
          {
            id: 19,
            photo: 'assets/img/joker.jpg',
            name: 'Joker',
            genre: 'Drama',
            release_date: '2019-10-04 21:00',
            description: 'nebitno',
            duration: '122min',
            time: '02.nov',
            price: 15,
            amount: 1
          },
          {
            id: 20,
            photo: 'assets/img/back_to_the_future.jpg',
            name: 'Back to the Future',
            genre: 'Sci Fi',
            release_date: '1985-07-03 18:30',
            description: 'nebitno',
            duration: '116min',
            time: '30.jul',
            price: 15,
            amount: 1
          },
    ];

getMovies() {
    return this.movies;
}

getMovieName(movies: Movies): string {
    return movies.name;
}

getMovieById(id: number): Movies | undefined {
    return this.movies.find(movie => movie.id === id);
}
}
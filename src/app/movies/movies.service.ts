import { Injectable } from "@angular/core";


export interface Movies {
  id: number;
  photo: string;
  name: string;
  genre: string;
  release_date: string;
  description: string;
  duration: string;
  trailer: string;
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
      release_date: '1997',
      description: 'A timeless love story set on the ill-fated maiden voyage of the Titanic',
      duration: '127min',
      trailer: 'https://www.youtube.com/embed/I7c1etV7D7g',
      time: '26.may',
      price: 15,
      amount: 1
    },
    {
      id: 2,
      photo: 'assets/img/xmen.jpg',
      name: 'X-MEN',
      genre: 'Sci Fi',
      release_date: '1997',
      description: 'Mutants with extraordinary powers fight for the survival of humanity against other mutants led by Magneto',
      duration: '127min',
      trailer: 'https://www.youtube.com/embed/VNxwlx6etXI',
      time: '26.may',
      price: 15,
      amount: 1
    },
    {
      id: 3,
      photo: 'assets/img/avengers.jpg',
      name: 'Avengers: Endgame',
      genre: 'Action',
      release_date: '2019',
      description: 'The epic conclusion to the Avengers saga, as the surviving heroes rally to undo the devastating effects of Thanos\' snap and restore the universe.',
      duration: '181min',
      trailer: ' https://www.youtube.com/embed/TcMBFSGVi1c',
      time: '15.aug',
      price: 15,
      amount: 1
    },
    {
      id: 4,
      photo: 'assets/img/harry_potter.jpg',
      name: 'Harry Potter',
      genre: 'Fantasy',
      release_date: '2001',
      description: 'Follow the magical journey of a young wizard, Harry Potter, as he attends Hogwarts School of Witchcraft and Wizardry and battles against the dark forces of Voldemort.',
      duration: '152min',
      trailer: 'https://www.youtube.com/embed/PbdM1db3JbY',
      time: '02.jul',
      price: 15,
      amount: 1
    },
    {
      id: 5,
      photo: 'assets/img/jurassic_park.jpg',
      name: 'Jurassic Park',
      genre: 'Adventure',
      release_date: '1993',
      description: 'A groundbreaking adventure that takes audiences to a dinosaur-filled island amusement park, where chaos ensues when the prehistoric creatures escape their enclosures.',
      duration: '127min',
      trailer: ' https://www.youtube.com/embed/QWBKEmWWL38',
      time: '10.jun',
      price: 15,
      amount: 1
    },
    {
      id: 6,
      photo: 'assets/img/inception.jpg',
      name: 'Inception',
      genre: 'Sci Fi',
      release_date: '2010',
      description: ' Enter the world of dreams and subconscious manipulation as a team of skilled thieves attempts to plant an idea into the mind of a corporate heir.',
      duration: '148min',
      trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
      time: '28.apr',
      price: 15,
      amount: 1
    },
    {
      id: 7,
      photo: 'assets/img/interstellar.jpg',
      name: 'Interstellar',
      genre: 'Sci Fi',
      release_date: '2014',
      description: ' Join a group of astronauts as they embark on an interstellar journey through a wormhole to find a new habitable planet for humanity\'s survival.',
      duration: '169min',
      trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E',
      time: '12.nov',
      price: 15,
      amount: 1
    },
    {
      id: 8,
      photo: 'assets/img/the_lion_king.jpg',
      name: 'The Lion King',
      genre: 'Animation',
      release_date: '1994',
      description: ' Experience the timeless tale of Simba, a young lion prince, who must reclaim his kingdom from his treacherous uncle Scar, with the help of his friends Timon and Pumbaa.',
      duration: '88min',
      trailer: 'https://www.youtube.com/embed/4CbLXeGSDxg',
      time: '04.dec',
      price: 15,
      amount: 1
    },
    {
      id: 9,
      photo: 'assets/img/the_dark_knight.jpg',
      name: 'The Dark Knight',
      genre: 'Action',
      release_date: '2008',
      description: 'Witness the clash of the iconic superhero Batman and the chaotic villain Joker in a dark and gripping battle for Gotham City\'s soul.',
      duration: '152min',
      trailer: 'https://www.youtube.com/embed/EXeTwQWrcwY',
      time: '06.mar',
      price: 15,
      amount: 1
    },
    {
      id: 10,
      photo: 'assets/img/toy_story.jpg',
      name: 'Toy Story',
      genre: 'Animation',
      release_date: '1995',
      description: ' Discover the adventures of Woody, Buzz Lightyear, and their toy friends as they navigate the challenges of being toys in the human world.',
      duration: '81min',
      trailer: 'https://www.youtube.com/embed/v-PjgYDrg70',
      time: '17.oct',
      price: 15,
      amount: 1
    },
    {
      id: 11,
      photo: 'assets/img/the_shawshank_redemption.jpg',
      name: 'The Shawshank Redemption',
      genre: 'Drama',
      release_date: '1994',
      description: 'Follow the story of Andy Dufresne, a wrongfully convicted man, as he forms a bond with fellow inmate Red and seeks redemption within the harsh confines of Shawshank Prison.',
      duration: '142min',
      trailer: 'https://www.youtube.com/embed/6hB3S9bIaco',
      time: '20.sep',
      price: 15,
      amount: 1
    },
    {
      id: 12,
      photo: 'assets/img/gladiator.jpg',
      name: 'Gladiator',
      genre: 'Action',
      release_date: '2000',
      description: ' Enter the arena of ancient Rome, where Maximus, a betrayed general, seeks vengeance against the corrupt emperor Commodus in a grand spectacle of gladiator battles.',
      duration: '155min',
      trailer: 'https://www.youtube.com/embed/0BLZbrLogTo',
      time: '11.jul',
      price: 15,
      amount: 1
    },
    {
      id: 13,
      photo: 'assets/img/forrest_gump.jpg',
      name: 'Forrest Gump',
      genre: 'Drama',
      release_date: '1994',
      description: 'Journey through American history alongside Forrest Gump, a simple-minded but kind-hearted man, who unwittingly becomes a witness to significant historical events.',
      duration: '142min',
      trailer: 'https://www.youtube.com/embed/uPIEn0M8su0',
      time: '29.aug',
      price: 15,
      amount: 1
    },
    {
      id: 14,
      photo: 'assets/img/the_matrix.jpg',
      name: 'The Matrix',
      genre: 'Sci Fi',
      release_date: '1999',
      description: 'Plunge into a mind-bending reality where computer hacker Neo discovers the truth about his world—a simulated reality controlled by machines.',
      duration: '136min',
      trailer: 'https://www.youtube.com/embed/m8e-FF8MsqU',
      time: '17.may',
      price: 15,
      amount: 1
    },
    {
      id: 15,
      photo: 'assets/img/the_hateful_eight.jpg',
      name: 'The Hateful Eight',
      genre: 'Western',
      release_date: '2015',
      description: 'Quentin Tarantino\'s thrilling Western tale follows a group of strangers stranded in a remote cabin during a snowstorm, each harboring dark secrets and dangerous intentions.',
      duration: '187min',
      trailer: 'https://www.youtube.com/embed/nIOmotayDMY',
      time: '08.jan',
      price: 15,
      amount: 1
    },
    {
      id: 16,
      photo: 'assets/img/inception.jpg',
      name: 'Inception',
      genre: 'Sci Fi',
      release_date: '2010',
      description: 'nebitno',
      duration: '148min',
      trailer: 'https://www.youtube.com/embed/I7c1etV7D7g',
      time: '28.apr',
      price: 15,
      amount: 1
    },
    {
      id: 17,
      photo: 'assets/img/et.jpg',
      name: 'E.T. the Extra-Terrestrial',
      genre: 'Sci Fi',
      release_date: '1982',
      description: 'Join a young boy, Elliot, as he befriends a stranded alien named E.T. and tries to help him return home while evading government agents.',
      duration: '115min',
      trailer: 'https://www.youtube.com/embed/qYAETtIIClk',
      time: '15.jun',
      price: 15,
      amount: 1
    },
    {
      id: 18,
      photo: 'assets/img/schindlers_list.jpg',
      name: 'Schindler\'s List',
      genre: 'Drama',
      release_date: '1993',
      description: 'Based on true events, this powerful film tells the story of Oskar Schindler, a German businessman who saved the lives of over a thousand Jewish refugees during the Holocaust.',
      duration: '195min',
      trailer: 'https://www.youtube.com/embed/gG22XNhtnoY',
      time: '07.jan',
      price: 15,
      amount: 1
    },
    {
      id: 19,
      photo: 'assets/img/joker.jpg',
      name: 'Joker',
      genre: 'Drama',
      release_date: '2019',
      description: 'Delve into the origin of the iconic Batman villain, the Joker, as the troubled Arthur Fleck descends into madness in a gritty and intense character study.',
      duration: '122min',
      trailer: 'https://www.youtube.com/embed/zAGVQLHvwOY',
      time: '02.nov',
      price: 15,
      amount: 1
    },
    {
      id: 20,
      photo: 'assets/img/back_to_the_future.jpg',
      name: 'Back to the Future',
      genre: 'Sci Fi',
      release_date: '1985',
      description: 'Join Marty McFly and the eccentric scientist Dr. Emmett Brown on a time-traveling adventure through the past, present, and future.',
      duration: '116min',
      trailer: 'https://www.youtube.com/embed/qvsgGtivCgs',
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
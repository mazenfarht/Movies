import f1 from '../src/img/6.jpg';
import f2 from '../src/img/7.jpg';
import f3 from '../src/img/8.jpg';
import f4 from '../src/img/9.jpg';
import f5 from '../src/img/10.jpg';
import f6 from '../src/img/12.jpg';
import f7 from '../src/img/13.jpg';
import f8 from '../src/img/14.jpg';

const movies = [
  {
    title: 'Dune: Prophecy',
    id: 0,
    image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/5B8Cxz8ZZXp3w2WmmdKTXpkS24e.jpg',
    releaseDate: '2024',
    rating: '78%',
    description: 'Ten thousand years before the ascension of Paul Atreides, sisters Valya and Tula Harkonnen establish the fabled sect and female order that would become known as the Bene Gesserit to control the future of humankind.',
    userScore: '78%',
    genre: 'Sci-Fi & Fantasy, Drama, Action & Adventure',
    trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
  },
  {
    title: 'Inception',
    id: 1,
    image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    releaseDate: '2010-07-16',
    rating: '8.8/10',
    description: 'A thief who enters the dreams of others to steal secrets must plant an idea into someone\'s mind.',
    genre: 'Sci-Fi, Action, Adventure',
    trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
  },
  {
    title: 'The Dark Knight',
    id: 2,
    image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    releaseDate: '2008-07-18',
    rating: '9.0/10',
    description: 'Batman faces the Joker, a criminal mastermind who seeks to bring Gotham City to its knees.',
    genre: 'Action, Crime, Drama',
    trailerUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
  },
  {
    title: 'Interstellar',
    id: 3,
    image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    releaseDate: '2014-11-07',
    rating: '8.6/10',
    description: 'A group of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    genre: 'Sci-Fi, Drama, Adventure',
    trailerUrl: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
  },
  {
    title: 'The Shawshank Redemption',
    id: 4,
    image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
    releaseDate: '1994-09-22',
    rating: '9.3/10',
    description: 'Two imprisoned men form a deep friendship, seeking a way to escape and survive in prison.',
    genre: 'Drama, Crime',
    trailerUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
  },
  {
    title: 'The Matrix',
    id: 5,
    image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg',
    releaseDate: '1999-03-31',
    rating: '8.7/10',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    genre: 'Sci-Fi, Action',
    trailerUrl: 'https://www.youtube.com/watch?v=vKQi3bBA1y8',
  },
  {
    title: 'The Godfather',
    id: 6,
    image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    releaseDate: '1972-03-24',
    rating: '9.2/10',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    genre: 'Crime, Drama',
    trailerUrl: 'https://www.youtube.com/watch?v=sY1S34973zA',
  },
  {
    title: 'Gladiator',
    id: 7,
    image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg',
    releaseDate: '2000-05-05',
    rating: '8.5/10',
    description: 'A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family and sent him into slavery.',
    genre: 'Action, Adventure, Drama',
    trailerUrl: 'https://www.youtube.com/watch?v=ol67qo3WhJk',
  },
  {
    title: 'Forrest Gump',
    id: 8,
    image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    releaseDate: '1994-07-06',
    rating: '8.8/10',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an extraordinary memory.',
    trailerUrl: 'https://www.youtube.com/watch?v=bLvqoHBptjg',
  },
  {
    title: 'Titanic',
    id: 9,
    image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    releaseDate: '1997-12-19',
    rating: '7.8/10',
    description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    trailerUrl: 'https://www.youtube.com/watch?v=kVrqfYjkTdQ',
  },
  {
    title: 'Pulp Fiction',
    id: 10,
    image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg',
    releaseDate: '1994-10-14',
    rating: '8.9/10',
    description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    trailerUrl: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
  },
];

export default movies;

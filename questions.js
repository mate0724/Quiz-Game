function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}




let questions = [
    {
        numb: 1,
        question: "Who was the first king of Hungary?",
        answer: "István I.",
        image: "images/korona.jpg",
        
        options: [
          "Béla I.",
          "HKálmán (Coloman)",
          "István I.",
          "László I. (Ladislaus the First)"
        ]
    },
    {
        numb: 2,
        question: "When did World War I start?",
        answer: "1914",
        image: "images/worldwar.jpg",
        
        options: [
          "1916",
          "1914",
          "1917",
          "1918"
        ]
    },
    {
        numb: 3,
        question: "Who painted the Mona Lisa?",
        answer: "Leonardo da Vinci",
        image: "images/monalisa.jpg",
        
        options: [
          "Leonardo da Vinci",
          "Michelangelo",
          "Vincent van Gogh",
          "Pablo Picasso"
        ]
    },
    {
        numb: 4,
        question: "What is the Earth's largest ocean?",
        answer: "Pacific Ocean",
        image: "images/ocean.jpg",
        
        options: [
          "Indian Ocean",
          "Arctic Ocean",
          "Atlantic Ocean",
          "Pacific Ocean"
        ]
    },
    {
        numb: 5,
        question: "Who wrote the play Romeo and Juliet?",
        answer: "William Shakespeare",
        image: "images/romeoandjuliet.jpg",
        
        options: [
          "Jane Austen",
          "Mark Twainy",
          "William Shakespeare",
          "Charles Dickens"
        ]
    },
    {
        numb: 6,
        question: "What is the world's largest continent by area?",
        answer: "Asia",
        image: "images/continent.jpg",
        
        options: [
          "Asia",
          "Africa",
          "North Amerika",
          "South Amerika"
        ]
    },
    {
        numb: 7,
        question: " In which year did the American Revolutionary War begin?",
        answer: "1775",
        image: "images/arw.jpg",
        options: [
          "1789",
          "1781",
          "1776",
          "1775"
        ]
    },
    {
        numb: 8,
        question: "Which planet is the largest in the Solar System?",
        answer: "Jupiter ",
        image: "images/solarsystem.jpg",
        options: [
          "Mars",
          "Jupiter ",
          "Saturn",
          "Uranus"
        ]
    },
    {
        numb: 9,
        question: "Who was the first person on the Moon?",
        answer: "Neil Armstrong",
        image: "images/Moon.jpg" ,
        options: [
          "Buzz Aldrin",
          "Michael Collins",
          "Nobody",
          "Neil Armstrong"
        ]
    },
    {
        numb: 10,
        question: "Who wrote the novel 1984?",
        answer: "George Orwell",
        image: "images/1984.jpg",
        options: [
          "George Orwell",
          "Aldous Huxley",
          "Ray Bradbury",
          "H.G. Wells"
        ]
    },
    {
      numb: 11,
      question: "What is the chemical symbol for gold?",
      answer: "Au",
      image: "images/gold.jpg",
      options: [
        "Ag",
        "Hg",
        "Au",
        "Pt"
      ]
  },
  {
      numb: 12,
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
      image: "images/solarsystem.jpg",
      options: [
        "Venus",
        "Mars",
        "Jupiter",
        "Saturn"
      ]
  },
  {
      numb: 13,
      question: "Who painted the famous painting 'Starry Night'?",
      answer: "Vincent van Gogh",
      image: "images/starry-night.jpg",
      options: [
        "Pablo Picasso",
        "Claude Monet",
        "Vincent van Gogh",
        "Salvador Dali"
      ]
  },
  {
      numb: 14,
      question: "What is the largest mammal in the world?",
      answer: "Blue Whale",
      image: "images/animals.jpg",
      options: [
        "Elephant",
        "Blue Whale",
        "Giraffe",
        "Hippopotamus"
      ]
  },
  {
      numb: 15,
      question: "Which scientist developed the theory of relativity?",
      answer: "Albert Einstein",
      image: "images/relativity.jpg",
      options: [
        "Isaac Newton",
        "Marie Curie",
        "Albert Einstein",
        "Galileo Galilei"
      ]
  },
  {
      numb: 16,
      question: "What element does 'O' represent on the periodic table?",
      answer: "Oxygen",
      image: "images/oxigen.jpg",
      options: [
        "Osmium",
        "Oxygen",
        "Ozone",
        "Olivine"
      ]
  },
  {
      numb: 17,
      question: "Who is the author of the Harry Potter book series?",
      answer: "J.K. Rowling",
      image: "images/harry.jpg",
      options: [
        "J.R.R. Tolkien",
        "J.K. Rowling",
        "George R.R. Martin",
        "Stephen King"
      ]
  },
  {
      numb: 18,
      question: "What is the largest organ in the human body?",
      answer: "Skin",
      image: "images/body.jpg",
      options: [
        "Liver",
        "Brain",
        "Skin",
        "Heart"
      ]
  },
  {
      numb: 19,
      question: "Which gas do plants absorb from the atmosphere?",
      answer: "Carbon Dioxide",
      image: "images/fotoszintezis.jpg",
      options: [
        "Oxygen",
        "Carbon Dioxide",
        "Nitrogen",
        "Hydrogen"
      ]
  },
  {
      numb: 20,
      question: "What is the fastest land animal?",
      answer: "Cheetah",
      image: "images/animals.jpg",
      options: [
        "Lion",
        "Cheetah",
        "Giraffe",
        "Leopard"
      ]
  },
  {
    numb: 21,
    question: "What element does 'H' represent on the periodic table?",
    answer: "Hydrogen",
    image: "images/oxigen.jpg",
    options: [
      "Helium",
      "Hydrogen",
      "Hassium",
      "Hafnium"
    ]
},
{
    numb: 22,
    question: "Who painted the famous artwork 'The Persistence of Memory'?",
    answer: "Salvador Dali",
    image: "images/paining.jpg",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Salvador Dali",
      "Edvard Munch"
    ]
},
{
    numb: 23,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
    image: "images/solarsystem.jpg",
    options: [
      "Mars",
      "Jupiter",
      "Saturn",
      "Neptune"
    ]
},
{
    numb: 24,
    question: "Who is the author of 'Pride and Prejudice'?",
    answer: "Jane Austen",
    image: "images/tp.prideandprejudice.0.0.jpg",
    options: [
      "Emily Bronte",
      "Jane Austen",
      "Charles Dickens",
      "Leo Tolstoy"
    ]
},
{
    numb: 25,
    question: "What is the capital city of Australia?",
    answer: "Canberra",
    image: "images/Australia.jpg",
    options: [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Brisbane"
    ]
},
{
    numb: 26,
    question: "Which famous scientist developed the theory of general relativity?",
    answer: "Albert Einstein",
    image: "images/relativity.jpg",
    options: [
      "Isaac Newton",
      "Marie Curie",
      "Albert Einstein",
      "Galileo Galilei"
    ]
},
{
    numb: 27,
    question: "What is the smallest prime number?",
    answer: "2",
    image: "images/math.jpg",
    options: [
      "1",
      "2",
      "3",
      "5"
    ]
},
{
    numb: 28,
    question: "Who is the Greek god of the sea?",
    answer: "Poseidon",
    image: "images/gods.jpg",
    options: [
      "Zeus",
      "Hades",
      "Poseidon",
      "Apollo"
    ]
},
{
    numb: 29,
    question: "What is the largest organ in the human body?",
    answer: "Skin",
    image: "images/body.jpg",
    options: [
      "Liver",
      "Brain",
      "Skin",
      "Heart"
    ]
},
{
    numb: 30,
    question: "Which famous scientist coined the phrase 'E=mc^2'?",
    answer: "Albert Einstein",
    image: "images/physics.jpg",
    options: [
      "Isaac Newton",
      "Marie Curie",
      "Albert Einstein",
      "Niels Bohr"
    ]
},
{
  numb: 31,
  question: "What gas do plants absorb from the atmosphere and release oxygen?",
  answer: "Carbon Dioxide",
  image: "images/solarsystem.jpg",
  options: [
    "Oxygen",
    "Carbon Dioxide",
    "Nitrogen",
    "Hydrogen"
  ]
},
{
  numb: 32,
  question: "Who is the author of 'To Kill a Mockingbird'?",
  answer: "Harper Lee",
  image: "images/mockingbird.jpg",
  options: [
    "J.K. Rowling",
    "Harper Lee",
    "Mark Twain",
    "Jane Austen"
  ]
},
{
  numb: 33,
  question: "Who painted the famous mural 'Guernica'?",
  answer: "Pablo Picasso",
  image: "images/DE00050_0.jpg",
  options: [
    "Vincent van Gogh",
    "Pablo Picasso",
    "Diego Rivera",
    "Salvador Dali"
  ]
},
{
  numb: 34,
  question: "Which country won the FIFA World Cup in 2018?",
  answer: "France",
  image: "images/football.jpg",
  options: [
    "Brazil",
    "Germany",
    "France",
    "Argentina"
  ]
},
{
  numb: 35,
  question: "Who holds the record for the most goals scored in a single FIFA World Cup tournament?",
  answer: "Just Fontaine",
  image: "images/football.jpg",
  options: [
    "Pele",
    "Diego Maradona",
    "Just Fontaine",
    "Gerd Muller"
  ]
},
{
  numb: 36,
  question: "What is the capital city of Japan?",
  answer: "Tokyo",
  image: "images/japan.jpg",
  options: [
    "Beijing",
    "Seoul",
    "Tokyo",
    "Bangkok"
  ]
},
{
  numb: 37,
  question: "In which year did the Titanic sink?",
  answer: "1912",
  image: "images/titanic.jpg",
  options: [
    "1910",
    "1912",
    "1915",
    "1917"
  ]
},
{
  numb: 38,
  question: "Who directed the movie 'The Dark Knight'?",
  answer: "Christopher Nolan",
  image: "images/dark.jpg",
  options: [
    "Steven Spielberg",
    "Quentin Tarantino",
    "Christopher Nolan",
    "Martin Scorsese"
  ]
},
{
  numb: 39,
  question: "What is the largest bird in the world?",
  answer: "Ostrich",
  image: "images/birds.jpg",
  options: [
    "Eagle",
    "Ostrich",
    "Albatross",
    "Condor"
  ]
},
{
  numb: 40,
  question: "Which film won the Academy Award for Best Picture in 2020?",
  answer: "Parasite",
  image: "images/oscar.jpg",
  options: [
    "1917",
    "Parasite",
    "Once Upon a Time in Hollywood",
    "Joker"
  ]
},
{
  numb: 41,
  question: "Who discovered penicillin?",
  answer: "Alexander Fleming",
  image: "images/peniccillin.jpg",
  options: [
    "Marie Curie",
    "Alexander Fleming",
    "Louis Pasteur",
    "Antonie van Leeuwenhoek"
  ]
},
{
  numb: 42,
  question: "What is the largest island in the world?",
  answer: "Greenland",
  image: "images/continent.jpg",
  options: [
    "Australia",
    "Greenland",
    "Borneo",
    "Madagascar"
  ]
},
{
  numb: 43,
  question: "Who painted the ceiling of the Sistine Chapel?",
  answer: "Michelangelo",
  image: "images/chapel.jpg",
  options: [
    "Leonardo da Vinci",
    "Raphael",
    "Michelangelo",
    "Titian"
  ]
},
{
  numb: 44,
  question: "Who played the character Tony Stark in the Marvel Cinematic Universe?",
  answer: "Robert Downey Jr.",
  image: "images/marvle.jpg",
  options: [
    "Chris Evans",
    "Mark Ruffalo",
    "Robert Downey Jr.",
    "Chris Hemsworth"
  ]
},
{
  numb: 45,
  question: "What is the chemical symbol for gold?",
  answer: "Au",
  image: "images/gold.jpg",
  options: [
    "Ag",
    "Hg",
    "Au",
    "Pt"
  ]
},
{
  numb: 46,
  question: "Which band released the album 'The Dark Side of the Moon'?",
  answer: "Pink Floyd",
  image: "images/side.jpg",
  options: [
    "The Beatles",
    "Pink Floyd",
    "Led Zeppelin",
    "Queen"
  ]
},
{
  numb: 47,
  question: "What is the capital city of Brazil?",
  answer: "Brasília",
  image: "images/brazil.jpg",
  options: [
    "São Paulo",
    "Rio de Janeiro",
    "Brasília",
    "Salvador"
  ]
},
{
  numb: 48,
  question: "Who is the Greek god of the sun?",
  answer: "Apollo",
  image: "images/gods.jpg",
  options: [
    "Zeus",
    "Apollo",
    "Hades",
    "Athena"
  ]
},
{
  numb: 49,
  question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
  answer: "Venus",
  image: "images/solarsystem.jpg",
  options: [
    "Mars",
    "Venus",
    "Mercury",
    "Jupiter"
  ]
},
{
  numb: 50,
  question: "Who is the author of 'The Great Gatsby'?",
  answer: "F. Scott Fitzgerald",
  image: "images/gatsby.jpg",
  options: [
    "Ernest Hemingway",
    "F. Scott Fitzgerald",
    "John Steinbeck",
    "Jane Austen"
  ]
}

];


questions = shuffleArray(questions);


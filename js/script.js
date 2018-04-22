// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote(), false);

//Array that stores quotes in object literals
const quotes = [
  {
    quote: "Who controls the past controls the future. Who controls the present controls the past.",
    source: "George Orwell",
    citation: "1984",
    year: "1949",
    tags: "Politics"
  },
  {
    quote: "Only I can change my life. No one can do it for me.",
    source: "Carol Burnett",
    tags: "Personal"
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    source: "Charles R. Swindoll",
    tags: "Motivational"
  },
  {
    quote: "Always do your best. What you plant now, you will harvest later.",
    source: "Og Mandino",
    tags: "Motivational"
  },
  {
    quote: "It always seems impossible until it's done.",
    source: "Nelson Mandela",
    tags: "Life Tips"
  }
]

//Get ID from HTML
let myQuote = document.getElementById("quote");
let mySource = document.getElementById("source");
let myCitation = document.getElementById("citation");
let myYear = document.getElementById("year");
let myTag = document.getElementById("tag");
const myButton = document.getElementById("loadQuote");

//Picks random quote from quotes array and returns object
function getRandomQuote() {
  //Collects random number
  let randomNumber = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomNumber];
  return quote;
}

//Function that changes quotes and sources
function printQuote (randomQuote) {
  myQuote.innerHTML = randomQuote.quote;
  //If statement determines if there is a year or citation then prints accordingly
  //This only works if there is both a citation and a year, I will need to add an if else statement if that changes.
  if (randomQuote.year !== undefined && randomQuote.citation !== undefined) {
    mySource.innerHTML = randomQuote.source + ",<i> " + randomQuote.citation + "</i>, " + randomQuote.year;
  } else {
    mySource.innerHTML = randomQuote.source;
  }
  myTag.innerHTML = randomQuote.tags;
}

//Changes quotes on click, runs functions
myButton.addEventListener('click', () => {

  //Stores quotes object inside of randomQuote variable
  const randomQuote = getRandomQuote();

  //Calls printQuote function with the returned object from getRandomQuote
  printQuote(randomQuote);
});

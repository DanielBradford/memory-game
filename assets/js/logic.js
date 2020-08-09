const slice =
  "<img data-id='slice' src='./assets/images/straw.jpg' alt='slice cake'>";
const egg =
  "<img data-id='egg' src='./assets/images/straw.jpg' alt='egg cake'>";
const straw =
  "<img data-id='straw' src='./assets/images/straw.jpg' alt='straw cake'>";
const blue =
  "<img data-id='blue' src='./assets/images/straw.jpg' alt='blue cake'>";
const bread =
  "<img data-id='bread' src='./assets/images/straw.jpg' alt='bread cake'>";
const macc =
  "<img data-id='macc' src='./assets/images/straw.jpg' alt='macc cake'>";

const card1 = document.getElementById("c1");
const card2 = document.getElementById("c2");
const card3 = document.getElementById("c3");
const card4 = document.getElementById("c4");
const card5 = document.getElementById("c5");
const card6 = document.getElementById("c6");
const card7 = document.getElementById("c7");
const card8 = document.getElementById("c8");
const card9 = document.getElementById("c9");
const card10 = document.getElementById("c10");
const card11 = document.getElementById("c11");
const card12 = document.getElementById("c12");

placeList = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
];

// $(document).ready(function () {
//   console.log("ready!");
//   newGame();
// });

// const newGame = () => {
cardList = ["slice", "egg", "straw", "blue", "bread", "macc"];

var clickCount = 0;
let clickList = [];
let answerList = [];

const bling = new Audio("assets/audio/bling.mp3");
const wrong = new Audio("assets/audio/wrong.mp3");

$("img").click(function () {
  clickCount += 1;
  $(this).css("pointerEvents", "none");
  let clicked = $(this).attr("data-id");
  console.log(clicked);
  clickList.push(clicked);
  $(this).css("opacity", "1");
  console.log($(this).attr("id"));
  //   $(this).css("pointerEvents", "none");
  setTimeout(function () {
    if (clickCount == 2) {
      console.log(clickList);
      var first = clickList[0];
      var second = clickList[1];
      if (first === second) {
        bling.play();
        console.log("correct");
        clickList = [];
        clickCount = 0;

        var x = cardList.indexOf(first);
        console.log(x);
        var spliced = toString(cardList.splice(x, 1));
        answerList.push(spliced);
        console.log(cardList);
        if (cardList.length == 0) {
          alert("GAME COMPLETE. ALL CARDS MATCHED!");
          $(".card img").css("opacity", "0");
          clickList = [];
          clickCount = 0;
          cardList = ["slice", "egg", "straw", "blue", "bread", "macc"];
          $(".card img").css("pointerEvents", "auto");
        } else {
          return false;
        }
      } else {
        $(".card img").css("pointerEvents", "auto");
        wrong.play();
        console.log("Wrong");
        console.log(cardList);
        $(".card > img").css("opacity", "0");
        clickList = [];
        clickCount = 0;
        cardList = ["slice", "egg", "straw", "blue", "bread", "macc"];
      }
    }
    if (clickCount > 2) {
      console.log("Too many choices");
      $(".card > img").css("opacity", "0");
      clickList = [];
      clickCount = 0;
      cardList = ["slice", "egg", "straw", "blue", "bread", "macc"];
    }
  }, 1000);
});

//------if first pick equals second-   correct and remove

//------if first pick != second reset--------

$("#reset").click(function () {
  location.reload();
});
//

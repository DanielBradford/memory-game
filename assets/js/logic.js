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

cardList = [slice, egg, straw, blue, bread, macc];

var clickCount = 0;
let clickList = [];
$("img").click(function () {
  clickCount += 1;
  let clicked = $(this).attr("data-id");
  console.log(clicked);
  clickList.push(clicked);
  $(this).css("opacity", "1");
  //   $(this).css("pointerEvents", "none");
  setTimeout(function () {
    if (clickCount == 2) {
      console.log(clickList);
      if (clickList[0] === clickList[1]) {
        alert("correct");
        clickList = [];
        clickCount = 0;
      } else {
        $("img").css("opacity", "0");
        clickList = [];
        clickCount = 0;
      }
    }
  }, 1000);
  //   $("body").css("pointerEvents", "auto");
});

//------if first pick equals second-   correct and remove

//------if first pick != second reset--------

$("#reset").click(function () {
  $("img").css("opacity", "0");
});

if (clickCount == 2) {
}

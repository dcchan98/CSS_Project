myRectangles = document.querySelectorAll(".coloured-rectangle");
console.log(myRectangles);

rectanglesHex = ['#FBECB5','#ABE9EB','#9AE9C9','#8CB8F6','#9E9DF3'];
for (var i =0;i< myRectangles.length;i++){
  var rectangle = myRectangles[i];
  var hex = rectanglesHex[i];
  rectangle.style.backgroundColor = hex;
}
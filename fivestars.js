function positions(pWidth, pHeight,i,j){
  let side = Math.min(pWidth, pHeight),
  str = "m" + ((pWidth/ 2)+(i*side)) + "," + ((pHeight - side)/2+(j*side)),
  ax = 0.15, 
  bx = (1 - 2 * ax)/2, 
  cx = 0.5, 
  ay = 0.3, by = 0.25, 
  cy = (1 - ay - by), 
  dy = 0.3;
  str += " l" + (ax * side) + "," + (ay * side)
  + " h" + (bx * side)
  + " l-" + (2*ax * side) + "," + (by * side)
  + " l" + (2*ax * side) + "," + (cy * side)
  + " l-" + (cx * side) + ",-" + (dy * side)
  + " l-" + (cx * side) + "," + (dy * side)
  + " l" + (2*ax * side) + ",-" + (cy * side)
  + " l-" + (2*ax * side) + ",-" + (by * side)
  + " h" + (bx * side)
  + " z"; 
  return str;
}
function star(pElement, width, height, styles,direction){
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", height);
  svg.setAttribute("width", width);
  b=function(){
    for(var i=0;i<5;i++)
    {
      j=0;
    star = document.createElementNS("http://www.w3.org/2000/svg", "path"),
      str = '';
      if(direction=="column")
      {
        star.setAttribute("d", positions((width/5), height,i,j));
      }
      else if(direction=="row"){
        star.setAttribute("d",positions(width,(height/5),j,i))
      }
      for(let a in styles){
          str += a + ':' + styles[a] + ';';
      }
      star.setAttribute("style",str);
      svg.appendChild(star);

    };

  pElement.appendChild(svg);
}();
}
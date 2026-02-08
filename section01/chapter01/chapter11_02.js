// 함수
let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200);
let area3 = getArea(120, 100);
console.log(area3);

// 호이스팅이란 끌어올리다 라는 뜻
function getArea(width, height) {
  let area = width * height;
  return area;
}
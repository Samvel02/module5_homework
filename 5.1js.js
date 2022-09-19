let num = +prompt("Введите число ниже");
if(typeof num === "number" && !Number.isNaN(num)) {
  if ( num %2 === 0) {
    alert("Число чётное.");
  }  else {
   alert("Число нечётное."); } 
}
else  {
  alert ("Упс, кажется, вы ошиблись!");
}
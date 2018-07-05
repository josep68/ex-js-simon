var array_pc = [];
var array_user = [];
for (var i = 0; i < 5; i++) {
  array_pc.push(getRandomInt(0,100));
}
alert(array_pc);
var time = 30;
var interval  = setInterval(contdown,1000);
function contdown(){
  if (time == 0){
    clearTimeout(interval);
    for (var i = 0; i < 5; i++) {
      var newUserNumber = (parseInt(prompt("Inserisci un numero che hai visto precedentemente: ")));
          if (array_user.includes(newUserNumber))
            alert("Numero già inserito. Riprova");
              array_user.push(newUserNumber);
                                 }
var result = [];
for (var i = 0; i < array_user.length; i++) {
  if (array_pc.includes(array_user[i])) {
    result.push(array_user[i]);
                                        }
                                            }
if (result.length > 0) {
  alert("Hai individuato " + result.length + " numeri/o e sono i seguenti: " + result);
                       } else {
  alert("Non hai individuato nessun numero");
                              }
               }
time--;
                   }
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
                                }

// function isContains(arr, element) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return true;
//         }
//     }
//     return false;

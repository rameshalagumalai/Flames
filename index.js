const form = document.getElementById('form');
const input1 = document.getElementById('name1');
const input2 = document.getElementById('name2');
const names = document.getElementById('names');
const resultView = document.getElementById('result');

form.addEventListener('submit', e => {
    e.preventDefault();
    const nm1 = input1.value;
    const nm2 = input2.value;
    var name1 = "", name2 = "";
    const narr1 = nm1.toLocaleLowerCase().split(" ");
    const narr2 = nm2.toLocaleLowerCase().split(" ");
    narr1.forEach(n => {
      name1 += n;
    });
    narr2.forEach(n =>{
      name2 += n;
    });
    var count = name1.length + name2.length;
  var count1 = 6;
  for (var i = 0; i < name1.length; i++) {
      const char = name1[i];
      for (var j = 0; j < name2.length; j++) {
        if(name2[j] !== ":"){
          if (char === name2[j]) {
            name2 = name2.replace(name2[j], ":");
            count -= 2;
            break;
          }
        }
      }
  }
  var flames = ["F", "L", "A", "M", "E", "S"];
  i = -1;
  while (count1 > 1) {
    for (j = 0; j < count; j++) {
      i++;
      if (i === count1) {
        i = 0;
      }
    }
    flames[i] = ":";
    flames = flames.filter(flame => flame !== ":");
    count1--;
    i--;
  }
  names.innerHTML = nm1 + " and " + nm2;
  switch (flames[0]) {
    case "F":
      setResult("🤝Friends🤝");
      break;
    case "L":
      setResult("❤️Love❤️");
      break;
    case "A":
      setResult("😇Affection😇");
      break;
    case "M":
      setResult("💍Marriage💍");
      break;
    case "E":
      setResult("⚡Enemy⚡");
      break;
    case "S":
      setResult("🤫Secret Keeper🤫");
      break;
    default:
      alert("Invalid");  
  }
});

function setResult(result){
    resultView.innerHTML = result;
}
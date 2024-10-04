const input = document.getElementById("numOfWord");
const container = document.querySelector(".mainTitle");

const generateWord = (n) => {
  let text = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; i++) {
    const random = (Math.random() * (letters.length - 1)).toFixed(0);

    text += letters[random];
  }
  return text;

};

let numOfWord;

const generatePara = () => {

  numOfWord = Number(input.value);

  if (0<numOfWord) {
    
  const para = document.createElement("p");
  let data="";

  for (let i = 0; i< numOfWord; ++i) {
    const randomNumber=((Math.random()*15).toFixed(0));
    data+=generateWord(randomNumber);
    data+=" ";
  }
 
  para.innerText = data;
  para.setAttribute("class", "paras");
  container.append(para);
  }

 //Below is the syntax to clear the input field after entering "Generate"
 input.value=''
  

};

//1random color genrtaing function


const getColor = () => {
  //2 we want to generate the hexadecimal no. for random colors
  //3 we genrate a random number
  const randomnumber = Math.floor(Math.random() * 16777215);

  //4 using random no. we convert into string and conactinate with # that produce the random color
  const randomCode = "#" + randomnumber.toString(16);

  //5 BY calling bg color we connect by dom through the randomcode
  document.body.style.backgroundColor = randomCode;

  //changing the code in screen
  document.getElementById("color-code").innerText = randomCode;

  //by clicking copy the color code
  navigator.clipboard.writeText(randomCode);
};



//Event Call By clicking
document.getElementById("btn").addEventListener("click", getColor);

//initial call
getColor();

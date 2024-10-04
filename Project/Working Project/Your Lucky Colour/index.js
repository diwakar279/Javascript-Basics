const zodiac = document.getElementById("zodiac");

const body = document.body;

const changeBackground = () => {
  switch (zodiac.value) {
    case "aries":
      body.style.backgroundColor = "red";
      break;

    case "tarus":
      body.style.backgroundColor = "yellow";
      break;
    case "gemini":
      body.style.backgroundColor = "violet";
      break;
    case "cancer":
      body.style.backgroundColor = "purple";
      break;
    case "leo":
      body.style.backgroundColor = "green";
      break;
    case "virgo":
      body.style.backgroundColor = "orange";
      break;
    case "libra":
      body.style.backgroundColor = "pink";
      break;
    case "scorpio":
      body.style.backgroundColor = "blue";
      break;
    case "sagittarius":
      body.style.backgroundColor = "#5f2aa5";
      break;
    case "auqarius":
      body.style.backgroundColor = "hsl(318, 81%, 30%)";
      break;
    case "capricorn":
      body.style.backgroundColor = "hwb(64 6% 46%)";
      break;
    case "pisces":
      body.style.backgroundColor = "hwb(32 15% 17%)";
      break;
  }
};

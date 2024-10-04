const url = "www.fume.com";

const main = () => {
  fetch(url)
    .then(message)
    .catch(() => {})
    .finally(console.log("all is alright"));
};

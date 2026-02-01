const URL1 = "https://swapi.tech/api/people/1";
const baseUrl = "https://swapi.tech/api/people/";

axios
  .get(URL1)
  .then((response) => {
    console.log(`1 : ${response.data.result.properties.name}`);
  })
  .catch((err) => {
    console.log(err);
  });

const getName = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}${id}`);
    console.log(`${id} : ${response.data.result.properties.name}`);
  } catch (err) {
    console.log(err);
  }
};

getName(2);
getName(7);
getName(10);

// -----------------------------------------------------
const makeJokeButton = document.querySelector("#joke-maker");
const jokesList = document.querySelector("#jokes");
const NO_JOKES_MSG = 'No jokes, sorry!';
const jokeUrl = "https://icanhazdadjoke.com";
const config = {
  headers: {
    Accept: "application/json",
  },
};

const getDadJokes = async () => {
  try {
    const response = await axios.get(jokeUrl, config);
    return response.data.joke;
  } catch (err) {
    console.log(err);
    return NO_JOKES_MSG;
  }
};

const addNewJoke = async () => {
  const newJoke = await getDadJokes();
  const newLi = document.createElement("LI");
  newLi.append(newJoke);
  jokesList.append(newLi);
};

makeJokeButton.addEventListener("click", addNewJoke);

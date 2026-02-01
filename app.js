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

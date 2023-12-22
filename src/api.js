const call = async (url) => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (error) {
    throw Error("Can't fetch API");
  }
};

module.exports = { call };

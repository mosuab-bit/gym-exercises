export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '0e8cff4559msh387d1f1b725e0acp1ca29bjsnf7ce57f86d3a',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '0e8cff4559msh387d1f1b725e0acp1ca29bjsnf7ce57f86d3a',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

var newReleases = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  }
];
//! Filter
var has5Rating = function (movie) {
  return movie.rating == 5.0;
};
var highRating = newReleases.filter(has5Rating);
// console.log(highRating);

//! Reduce
var list = [
  { id: 'a', state: 'NJ', city: 'Hoboken', population: 150 },
  { id: 'a', state: 'NJ', city: 'Trenton', population: 200 },
  { id: 'b', state: 'NY', city: 'New York', population: 500 },
  { id: 'c', state: 'MI', city: 'Detroit', population: 200 },
  { id: 'c', state: 'MI', city: 'Flint', population: 100 }
];
var newList = list.reduce((acc, current) => {
  // const needUpdate = current in acc;
  acc[current.id] = {
    count: current.id in acc ? acc[current.id].count += 1 : 1,
    city: current.id in acc ? [...acc[current.id].city, current.city] : [current.city],
    population: current.id in acc ? acc[current.id].population += current.population : current.population
  }
  return acc;

}, {});
// console.log(newList);

function reducer(list) {
  let obj = {};
  for (var item of list) {
    if (!obj[item.id]) {
      obj[item.id] = { state: item.state, city: [item.city], population: item.population }
    } else {
      obj[item.id].state = item.state;
      obj[item.id].city = [...obj[item.id].city, item.city];
      obj[item.id].population += item.population;
    }
  }
  return obj;
}
console.log(reducer(list));
// desired output:
// a : { state: NJ, city: [], population: 999 }


//! Map

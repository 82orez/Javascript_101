const flights = require('../repository/flightList');
const fs = require('fs');

module.exports = {
  // ? [GET] /flight
  // ? 요청 된 파라미터 departure_times, arrival_times 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  // ? 요청 된 파라미터 departure, destination 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: (req, res) => {
    const { departure_times, arrival_times, destination, departure } = req.query;
    // * TODO:

    // * filteredList 에 기존 flights 대입.
    let filteredList = flights;

    // * query 에 departure_times 가 있으면, 조건문 실행.
    if (departure_times) {
      filteredList = filteredList.filter((value) => {
        return departure_times === value.departure_times;
      });
    }
    if (arrival_times) {
      filteredList = filteredList.filter((value) => {
        return arrival_times === value.arrival_times;
      })
    }
    if (destination) {
      filteredList = filteredList.filter((value) => {
        return destination === value.destination;
      })
    }
    if (departure) {
      filteredList = filteredList.filter((value) => {
        return departure === value.departure;
      })
    }

    // return res.json(flights);
    // * 필터된 배열 return.
    return res.json(filteredList);
  },

  // ? [GET] /flight/:uuid
  // ? 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: (req, res) => {
    const { uuid } = req.params;
    // * TODO:
    // * 위와 같은 방식으로.
    let filteredList = flights;

    if (uuid) {
      filteredList = filteredList.filter((value) => {
        return uuid === value.uuid;
      });
    }
    return res.json(filteredList);
  },

  // Advanced
  // [PUT] /flight/:uuid 요청을 수행합니다.
  // 요청 된 uuid 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: (req, res) => {
    const { uuid } = req.params;
    const bodyData = req.body;
    const beUpdatedIdx = flights.findIndex(flight => flight.uuid === uuid);
    const updatedFlight = { ...flights[beUpdatedIdx], ...bodyData }; //최종적으로 업데이트된 flight
    flights.splice(beUpdatedIdx, 1, updatedFlight);

    /* 파일 수정 */
    // const jsonData = JSON.stringify(flights);
    // fs.writeFileSync(
    //   `${__dirname}/../repository/flightList.js`,
    //   `00_module.exports = ${jsonData}`
    // );

    return res.status(200).json(updatedFlight);
  }
};

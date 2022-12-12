// POST /book 에서 사용할 uuid 입니다.
const { v4: uuid } = require('uuid');
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 예약 데이터를 조회합니다.
  findAll: (req, res) => {
    return res.status(200).json(booking);
  },
  // [GET] /book/:phone 요청을 수행합니다.
  // 요청 된 phone 과 동일한 phone 예약 데이터를 조회합니다.
  findByPhone: (req, res) => {
    const {phone} = req.params;
    // * todo 없었으나 그냥 해 봤는데 그냥 통과 됨.
    let bookList = booking;

    if (phone) {
      bookList = bookList.filter((value) => {
        return phone === value.phone;
      });
    }
    return res.json(bookList);

  },
  // [GET] /book/:phone/:flight_uuid 요청을 수행합니다.
  // 요청 된 id, phone 과 동일한 uuid, phone 예약 데이터를 조회합니다.
  findByPhoneAndFlightId: (req,res) => {
    const {phone, flight_uuid} = req.params;
    // TODO:
    let bookList = booking;

    if (phone) {
      bookList = bookList.filter((value) => {
        return phone === value.phone;
      });
    }
    if (flight_uuid) {
      bookList = bookList.filter((value) => {
        return flight_uuid === value.flight_uuid;
      });
    }
    return res.json(bookList);
  },
  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: (req, res) => {
    // POST /book 에서 사용할 booking_uuid 입니다.
    const booking_uuid = uuid();
    // TODO:
    booking.push(req.body);
    return res.json();
  },

  // Optional
  // [DELETE] /book/:booking_uuid 요청을 수행합니다.
  // 요청 된 id, phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteByBookingId: (req, res) => {
    const {booking_uuid} = req.params;
    // TODO:
    booking = booking.filter(book => book.booking_uuid !== booking_uuid);
    return res.status(200).json({booking_uuid});
  }
};

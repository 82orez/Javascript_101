class Time {

  constructor(start, end) {
    this._start = start;
    this._end = end;
    this._duration = end - start;
  }

}

const time = new Time(0, 20);
console.log(time._duration);

time._start = 5;
time._duration -= 5;
console.log(time._duration);

console.log(time._start);
console.log(time._duration);

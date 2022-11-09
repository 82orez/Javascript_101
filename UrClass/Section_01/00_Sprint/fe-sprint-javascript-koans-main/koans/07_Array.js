describe('Array 에 대해서 학습합니다.', function () {
  it('Array 의 기본을 확인합니다.', function () {
    const emptyArr = [];
    expect(typeof emptyArr === 'array').to.equal(false);
    expect(emptyArr.length).to.equal(0);

    const multiTypeArr = [
      0,
      1,
      'two',
      function () {
        return 3;
      },
      { value1: 4, value2: 5 },
      [6, 7],
    ];
    expect(multiTypeArr.length).to.equal(6);
    expect(multiTypeArr[0]).to.equal(0);
    expect(multiTypeArr[2]).to.equal('two');
    expect(multiTypeArr[3]()).to.equal(3);
    expect(multiTypeArr[4].value1).to.equal(4);
    expect(multiTypeArr[4]['value2']).to.equal(5);
    expect(multiTypeArr[5][1]).to.equal(7);
  });

  it('Array 의 요소(element)를 다루는 방법을 확인합니다.', function () {
    const arr = [];
    expect(arr).to.deep.equal([]);

    arr[0] = 1;
    expect(arr).to.deep.equal([1]);

    arr[1] = 2;
    expect(arr).to.deep.equal([1, 2]);

    arr.push(3);
    expect(arr).to.deep.equal([1, 2, 3]);

    const poppedValue = arr.pop();
    expect(poppedValue).to.equal(3);
    expect(arr).to.deep.equal([1, 2]);
  });

  it('Array 메소드 slice 를 확인합니다.', function () {
    const arr = ['peanut', 'butter', 'and', 'jelly'];

    expect(arr.slice(1)).to.deep.equal(['butter', 'and', 'jelly']);
    expect(arr.slice(0, 1)).to.deep.equal(['peanut']);
    expect(arr.slice(0, 2)).to.deep.equal(['peanut', 'butter']);
    expect(arr.slice(2, 2)).to.deep.equal([]);
    expect(arr.slice(2, 20)).to.deep.equal(['and', 'jelly']);
    expect(arr.slice(3, 0)).to.deep.equal([]);
    expect(arr.slice(3, 100)).to.deep.equal(['jelly']);
    expect(arr.slice(5, 1)).to.deep.equal([]);

    // arr.slice 는 arr 의 값을 복사하여 새로운 배열을 리턴합니다.
    // 아래의 코드는 arr 전체를 복사합니다. 자주 사용되니 기억하시기 바랍니다.
    expect(arr.slice(0)).to.deep.equal(['peanut', 'butter', 'and', 'jelly']);
  });

  it('Array 를 함수의 전달인자로 전달할 경우, reference 가 전달됩니다.', function () {
    // call(pass) by value 와 call(pass) by reference 의 차이에 대해서 학습합니다.
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five'];

    // 함수의 전달인자로 arr 전달한 후 변경.
    // 같은 주소값을 가지므로 변경됨.
    function passedByReference(refArr) {
      refArr[1] = 'changed in function';
    }
    passedByReference(arr);
    expect(arr[1]).to.equal('changed in function');

    // arr 자체를 변경.
    // 같은 주소값을 가지므로 변경됨.
    const assignedArr = arr;
    assignedArr[5] = 'changed in assignedArr';
    expect(arr[5]).to.equal('changed in assignedArr');

    const copiedArr = arr.slice();
    // 다른 주소값을 가지므로 변경되지 않음.
    copiedArr[3] = 'changed in copiedArr';
    expect(arr[3]).to.equal('three');
  });

  it('Array 메소드 shift 와 unshift 를 확인합니다.', function () {
    const arr = [1, 2];

    arr.unshift(3);
    expect(arr).to.deep.equal([3, 1, 2]);

    const shiftedValue = arr.shift();
    expect(shiftedValue).to.deep.equal(3);
    expect(arr).to.deep.equal([1, 2]);
  });
});

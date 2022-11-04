// 객체를 입력받아 속성의 개수를 리턴해야 합니다.
// number 타입을 리턴해야 합니다.

function countNumberOfKeys(obj) {
    // 방법 1.
    // let count = 0;
    //
    // for (const key in obj) {
    //     count += 1;
    // }
    // return count;

    // 방법 2.
    // Object.keys() => 객체의 key 들만 따로 배열로 반환.
    return Object.keys(obj).length;
}
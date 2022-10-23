function makeLastSeenMsg(name, period) {
    if (period < 60) {
        return `${name}: ${period}분 전에 접속함`;
    } else if (Math.floor(period/60) >= 1 && Math.floor(period/60) <= 24) {
        return `${name}: ${Math.floor(period/60)}시간 전에 접속함`;
    } else {
        return `${name}: ${Math.floor(period/1440)}일 전에 접속함`;
    }
}

console.log(makeLastSeenMsg('mike', 40));
console.log(makeLastSeenMsg('mike', 121));
console.log(makeLastSeenMsg('mike', 2887));
console.log(makeLastSeenMsg('mike', 5760));
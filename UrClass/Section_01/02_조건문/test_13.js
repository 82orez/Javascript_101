function convertScoreToGradeWithPlusAndMinus(score) {
    // TODO: 여기에 코드를 작성합니다.
    let extraScore = score % 10;
    let minusOrPlus = function (extraScore) {
        if (extraScore >= 8) {
            return "+";
        } else if (extraScore <= 2) {
            return "-";
        } else {
            return "";
        }
    };


    if (score > 100 || score < 0) {
        return "INVALID SCORE";
    } else if (score === 100) {
        return "A+";
    } else if (score >= 90) {
        return "A" + minusOrPlus(extraScore);
    } else if (score >= 80) {
        return "B" + minusOrPlus(extraScore);
    } else if (score >= 70) {
        return "C" + minusOrPlus(extraScore);
    } else if (score >= 60) {
        return "D" + minusOrPlus(extraScore);
    } else {
        return "F";
    }
}

console.log(convertScoreToGradeWithPlusAndMinus(90));

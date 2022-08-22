let toyRobot = {
    productId: "123-12",
    name: "Robot",
    price : "25,000",
    madeIn : "Korea",
    quantity: 10,
    showStock: function () {
        document.querySelector('#display').innerHTML = `현재 이 제품의 재고는 ${this.quantity}
        개 남아 있습니다.`
    }
};

toyRobot.showStock();
describe("quadraticEquation", function () {
    it("Дискрименант больше нуля => два корня уравнения", function () {
        assert.equal(quadraticEquation(1, 6, 1)[0], -0.1715728752538097);
        assert.equal(quadraticEquation(1, 6, 1)[1], -5.82842712474619);
    });
    it("Дискрименант равен нулю => один корень уравнения", function () {
        assert.equal(quadraticEquation(1, 12, 36)[0], -6);
    });
    it("Дискрименант меньше нуля => нет корней уравнения", function () {
        assert.equal(quadraticEquation(1, -8, 72).length, 0);
    });
});

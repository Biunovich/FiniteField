function Finitefield(prime) {
    this.prime = prime;
    this.neg = function(x) {
        return (Math.floor(x/this.prime) + 1) * this.prime - x;
    }
    this.inv = function(a) {
        var res = {x: 1, y: 0};
        function extNOD(a, b) {
            if (b == 0)
                return a;
            extNOD(b, a%b);
            var t = res.x;
            res.x = res.y;
            res.y = t - Math.floor(a/b)*res.y;
        };
        extNOD(this.prime, a);
        if (res.y < 0)
            res.y = this.neg(-res.y);
        return res.y;
    }
    this.sum = function(a, b) {
        return (a + b)%this.prime;
    }
    this.mult = function(a, b) {
        return (a * b)%this.prime;
    }
    this.sub = function (a, b) {
        return this.sum(a, this.neg(b));
    }
    this.div = function (a, b) {
        return this.mult(a, this.inv(b));
    }
}

class Calculator_Unary
{
    Cos (Degree : number) : number
    {
        return Math.cos(Degree);
    }
    aCos (Degree : number) : number
    {
        return Math.acos(Degree);
    }
    Sin (Degree : number) : number
    {
        return Math.sin(Degree);
    }
    aSin (Degree : number) : number
    {
        return Math.asin(Degree);
    }
    Tan (Degree : number) : number
    {
        return Math.tan(Degree);
    }
    aTan (Degree : number) : number
    {
        return Math.atan(Degree);
    }
    aSec(Degree : number) : number
    {
        return 1 / Math.acos(Degree);
    }
    Sec(Degree : number) : number
    {
        return 1 / Math.cos(Degree);
    }
    Cosec (Degree : number) : number
    {
        return 1/ Math.sin(Degree);
    }
    aCosec (Degree : number) : number
    {
        return 1/ Math.asin(Degree);
    }
    Cot(Degree : number) : number
    {
        return 1/ Math.tan(Degree);
    }
    aCot(Degree : number) : number
    {
        return 1/ Math.atan(Degree);
    }
    Round(num : number) : number
    {
        return Math.round(num);
    }
    Log(num : number) : number
    {
        return Math.log(num);
    }
    factorial(num : number) : number
    {
        var ret = 1
        for (var i = num ; i ; i--)
            ret *= num
        return num;
    }
    Inverse(num : number) : number
    {
        return 1 / Math.round(num);
    }
    squareroot(num : number) : number
    {
        return Math.sqrt(num);
    }
}

let unary_operator = new Calculator_Unary()
var ret = unary_operator.Sin(60)
console.log(ret)

var ret = unary_operator.aSin(ret)
console.log(ret)

var ret = unary_operator.Cos(30)
console.log(ret)

var ret = unary_operator.aCos(ret)
console.log(ret)

var ret = unary_operator.Tan(45)
console.log(ret)

var ret = unary_operator.aTan(ret)
console.log(ret)

var ret = unary_operator.Sec(60)
console.log(ret)

var ret = unary_operator.aSec(ret)
console.log(ret)

var ret = unary_operator.Cosec(30)
console.log(ret)

var ret = unary_operator.aCosec(ret)
console.log(ret)

var ret = unary_operator.Cot(45)
console.log(ret)

var ret = unary_operator.aCot(ret)
console.log(ret)

var ret = unary_operator.Round(2.25)
console.log(ret)

var ret = unary_operator.Log(1000)
console.log(ret)

var ret = unary_operator.factorial(10)
console.log(ret)

var ret = unary_operator.squareroot(25)
console.log(ret)

var ret = unary_operator.Inverse(2)
console.log(ret)
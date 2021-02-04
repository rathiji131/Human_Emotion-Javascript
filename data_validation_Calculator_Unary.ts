class Calculator_Unary
{
   
    static Cos (Degree : number) : any
    {
        if(Degree >= -360 && Degree <= 360 && typeof Degree == "number")
        {
            return Math.cos(Degree);
        }
        else
        {
            return "invalid_input";
        }
    }
    static aCos (Degree : number) : any
    {   
        if(Degree >= -1 && Degree <= 1 && typeof Degree == "number")
        {
            return Math.acos(Degree);
        }
        else
        {
            return "invalid_input";
        }
    }
    static Sin (Degree : number) : any
    {
        if(Degree >= -360 && Degree <= 360 && typeof Degree == "number")
        {
            return Math.sin(Degree);
        }
        else
        {
            return "invalid_input";
        }
    }
    static aSin (Degree : number) : any
    {
        if(Degree >= -1 && Degree <= 1 && typeof Degree == "number")
        {
            return Math.asin(Degree);
        }
        else
        {
            return "invalid_input";
        }
    }
    static Tan (Degree : number) : any
    {
        if(Degree >= -360 && Degree <= 360 && typeof Degree == "number")
        {
            return Math.tan(Degree);
        }
        else
        {
            return "invalid_input";
        }
    }
    static aTan (Degree : number) : any
    {
        return Math.atan(Degree);
    }
    static aSec(Degree : number) : any
    {
        if(Degree >= -1 && Degree <= 1 && Degree != 0 && typeof Degree == "number")
        {
            return 1 / Math.acos(Degree);
        }
        else
        {
            return "invalid_input";
        }
        
    }
    static Sec(Degree : number) : any
    {
        if(Degree >= -360 && Degree <= 360 && typeof Degree == "number")
        {
        return 1 / Math.cos(Degree);
        }
        else
        {
            return "Invalid data";
        }
    }
    static Cosec (Degree : number) : any
    {
        if(Degree >= -360 && Degree <= 360 && typeof Degree == "number")
        {
        return 1/ Math.sin(Degree);
        }
        else
        {
            return "Invalid data";
        }
    }
    static aCosec (Degree : number) : number
    {
        return 1/ Math.asin(Degree);
    }
    static Cot(Degree : number) : number
    {
        return 1/ Math.tan(Degree);
    }
    static aCot(Degree : number) : number
    {
        return 1/ Math.atan(Degree);
    }
    static Round(num : number) : any
    {
        if(typeof num == "number")
        {
            return Math.round(num);
        }
        else
        {
            return "Invalid input";
        }
    }
    static Log(num : number) : any
    {
        if(num > 0 && typeof num == "number")
        {
        return Math.log(num);
        }
        else
        {
            return "Invalid input";
        }
    }
    static factorial(num : number) : any
    {
        if(num >= 0 && typeof num == "number")
        {
            var ret = 1
            for (var i = num ; i ; i--)
                ret *= num
            return num;
        }
        else
        {
            return "Invalid input";
        }
    }
    static Inverse(num : number) : any
    {
        if(num != 0 && typeof num == "number")
        {
        return 1 / Math.round(num);
        }
        else
        {
            return "invalid input";
        }
    }
    static squareroot(num : number) : any
    {
        if(num >= 0 && typeof num == "number")
        {
        return Math.sqrt(num);
        }
        else
        {
            return "Invalid input";
    }
}
}


var ret = Calculator_Unary.Sin(60)
console.log(ret)

var ret = Calculator_Unary.aSin(ret)
console.log(ret)

var ret = Calculator_Unary.Cos(30)
console.log(ret)

var ret = Calculator_Unary.aCos(ret)
console.log(ret)

var ret = Calculator_Unary.Tan(45)
console.log(ret)

var ret = Calculator_Unary.aTan(ret)
console.log(ret)

var reter = Calculator_Unary.Sec(60)
console.log(reter)

var ret = Calculator_Unary.aSec(reter)
console.log(ret)

var reter = Calculator_Unary.Cosec(30)
console.log(reter)

var reter : any = Calculator_Unary.aCosec(reter)
console.log(reter)

var reter : any = Calculator_Unary.Cot(45)
console.log(reter)

var reter : any = Calculator_Unary.aCot(reter)
console.log(reter)

var ret = Calculator_Unary.Round(2.25)
console.log(ret)

var ret = Calculator_Unary.Log(1000)
console.log(ret)

var ret = Calculator_Unary.factorial(10)
console.log(ret)

var ret = Calculator_Unary.squareroot(25)
console.log(ret)

var ret = Calculator_Unary.Inverse(2)
console.log(ret)
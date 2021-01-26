class Calculator
{
    
    Num1 : number;
    Num2 : number;
    
    constructor(num1 : number , num2 : number)
    {
        this.Num1  = num1
        this.Num2 = num2
    }
    sum () : number
    {
        return this.Num1+this.Num2;
    }
    sub () : number
    {
        return this.Num1-this.Num2;
    }
    mul () : number
    {
        return this.Num1*this.Num2;
    }
    div () : number
    {
        return this.Num1/this.Num2;
    }
    mod_remainder () : number
    {
        return this.Num1%this.Num2;
    }
    percentage() : number
    {
        return (this.Num1 / this.Num2) * 100;
    }
    profit_percentage() : number
    {
        return 100 * this.Num1 / (this.Num2 + this.Num1)
    }
    loss_percentage() : number
    {
        return 100 * (this.Num2-this.Num1) / (this.Num2 + this.Num1)
    }
    AND() : number
    {
        return (this.Num2 & this.Num1)
    }
    NAND() : number
    {
        return ~(this.Num2 & this.Num1)
    }
    OR() : number
    {
        return (this.Num2 | this.Num1)
    }
    NOR() : number
    {
        return ~(this.Num2 | this.Num1)
    }
    XOR() : number
    {
        return (this.Num2 ^ this.Num1)
    }
    XNOR() : number
    {
        return ~(this.Num2 ^ this.Num1)
    }
    power() : number
    {
        let ret = 1
            for(let i = 0 ; i < this.Num2 ; i++)  
            {
                ret *= this.Num1
            }
            return ret
    }
    Min(num1 : number , num2 : number) : number
    {
        return Math.min(num1,num2);
    }
    Max(num1 : number , num2 : number) : number
    {
        return Math.max(num1 , num2);
    }
}

let calci = new Calculator(5,2)
var ret = calci.sum()
console.log(ret)

var ret = calci.sub()
console.log(ret)

var ret = calci.mul()
console.log(ret)

var ret = calci.div()
console.log(ret)

var ret = calci.percentage()
console.log(ret)

var ret = calci.profit_percentage()
console.log(ret)

var ret = calci.loss_percentage()
console.log(ret)

var ret = calci.AND()
console.log(ret)

var ret = calci.NAND()
console.log(ret)

var ret = calci.OR()
console.log(ret)

var ret = calci.XOR()
console.log(ret)

var ret = calci.OR()
console.log(ret)

var ret = calci.NOR()
console.log(ret)

var ret = calci.Min(2,3)
console.log(ret)

var ret : number = calci.Max(5 ,-1)
console.log(ret)
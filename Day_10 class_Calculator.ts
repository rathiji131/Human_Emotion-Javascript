class Calculatorr
{
    
    Num1 : number;
    Num2 : number;
    
    constructor(num1 : number , num2 : number)
    {
        this.Num1  = num1
        this.Num2 = num2
    }
    sum () 
    {
        return this.Num1+this.Num2;
    }
    sub () 
    {
        return this.Num1-this.Num2;
    }
    mul () : any
    {
        return this.Num1*this.Num2;
    }
    div () : any
    {
        return this.Num1/this.Num2;
    }
    mod_remainder () : any
    {
        return this.Num1%this.Num2;
    }
    percentage() : any
    {
        return (this.Num1 / this.Num2) * 100;
    }
    profit_percentage() : any
    {
        return 100 * this.Num1 / (this.Num2 + this.Num1)
    }
    loss_percentage() : any
    {
        return 100 * (this.Num2-this.Num1) / (this.Num2 + this.Num1)
    }
    AND() : any
    {
        return (this.Num2 & this.Num1)
    }
    NAND() : any
    {
        return ~(this.Num2 & this.Num1)
    }
    OR() : any
    {
        return (this.Num2 | this.Num1)
    }
    NOR() : any
    {
        return ~(this.Num2 | this.Num1)
    }
    XOR() : any
    {
        return (this.Num2 ^ this.Num1)
    }
    XNOR() : any
    {
        return ~(this.Num2 ^ this.Num1)
    }
    power() : any
    {
        let ret = 1
            for(let i = 0 ; i < this.Num2 ; i++)  
            {
                ret *= this.Num1
            }
            return ret
    }
    Min(num1 : number , num2 : number) : any
    {
        return Math.min(num1,num2);
    }
    Max(num1 : number , num2 : number) : any
    {
        return Math.max(num1 , num2);
    }
}

let calc = new Calculatorr(5,2)
var ret : any = calc.sum()
console.log(ret)

var ret : any = calc.sub()
console.log(ret)

var ret : any= calc.mul()
console.log(ret)

var ret : any= calc.div()
console.log(ret)

var ret : any = calc.percentage()
console.log(ret)

var ret : any = calc.profit_percentage()
console.log(ret)

var ret : any= calc.loss_percentage()
console.log(ret)

var ret : any = calc.AND()
console.log(ret)

var ret : any = calc.NAND()
console.log(ret)

var ret : any = calc.OR()
console.log(ret)

var ret : any = calc.XOR()
console.log(ret)

var ret : any = calc.OR()
console.log(ret)

var ret : any = calc.NOR()
console.log(ret)

var ret : any= calc.Min(2,3)
console.log(ret)

var ret : any = calc.Max(5 ,-1)
console.log(ret)

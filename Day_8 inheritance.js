
class Generate_Bill
{
    constructor(unitsconsumed = 100,perunitprice = 10,paymentDate){
    this.unitsconsumed = unitsconsumed
    this.perunitprice = perunitprice
    this.paymentDate = paymentDate
    this.BillAmount = unitsconsumed * perunitprice
    this.Paidammount =  this.BillAmount
    }
    
    set Unitsconsumed(unitsconsumed )
    {
        this. unitsconsumed = unitsconsumed
    }
    get Unitsconsumed( )
    {
        return this. unitsconsumed 
    }
    set Perunitprice(perunitprice )
    {
        this. perunitprice = perunitprice
    }
    get Perunitprice( )
    {
        return this. perunitprice 
    }
    set PaymentDate(paymentDate )
    {
        this. paymentDate = paymentDate
    }
    get PaymentDate( )
    {
        return this. paymentDate 
    }
    
    get_BillAmount( )
    {
        return this. BillAmount 
    }
    get_Paidammount( )
    {
        return this. Paidammount 
    }
    
}

class Electricity_Bill extends Generate_Bill
{
    constructor (SelectAccount ,Billingdate ,SubDivision ,RRNo ,Name ,Address,Reading,DueDate)
    {
        super();
    this.SelectAccount = SelectAccount
    this.Billingdate = Billingdate
    this.SubDivision = SubDivision
    this.RRNo  = RRNo
    this.Name = Name
    this.Address = Address
    this.Reading = Reading
    this.DueDate = DueDate
    } 
    set selectAccount(SelectAccount )
    {
        this. SelectAccount = SelectAccount
    }
    get selectAccount( )
    {
        return this. SelectAccount 
    }
    set billingdate(Billingdate )
    {
        this. Billingdate = Billingdate
    }
    get billingdate( )
    {
        return this. Billingdate 
    }
    set subDivision(SubDivision )
    {
        this. SubDivision = SubDivision
    }
    get subDivision( )
    {
        return this. SubDivision 
    }

    set rRNo(RRNo )
    {
        this. RRNo = RRNo
    }
    get rRNo( )
    {
        return this. RRNo 
    }
    set name(Name )
    {
        this. Name = Name
    }
    get name( )
    {
        return this. Name 
    }
    set address(Address )
    {
        this. Address = Address
    }
    get address( )
    {
        return this. Address 
    }
    set reading(Reading )
    {
        this. Reading = Reading
    }
    get reading( )
    {
        return this. Reading 
    }
    set duedate(Duedate )
    {
        this. Duedate = Duedate
    }
    get duedate( )
    {
        return this. Duedate 
    }

}

let customer = new Electricity_Bill("JVT_123" , "25/12/2012","Silkboard",8725 , "Venkatesh" , "HSR Layout" , 200 , "28/12/2012")
var ret = customer.Name
console.log(ret)
customer.Name = "Mahesh"
ret = customer.Name
console.log(ret)

var ret = customer.selectAccount
console.log(ret)
customer.selectAccount = "1-121-008-00"
ret = customer.selectAccount
console.log(ret)

var ret = customer.billingdate
console.log(ret)
customer.billingdate = "31/12/2012"
ret = customer.billingdate
console.log(ret)

var ret = customer.subDivision
console.log(ret)
customer.subDivision = "marathahalli"
ret = customer.subDivision
console.log(ret)

var ret = customer.rRNo
console.log(ret)
customer.rRNo =  3213
ret = customer.rRNo
console.log(ret)

var ret = customer.address
console.log(ret)
customer.address =  "Dhobiwala , Main road 24"
ret = customer.address
console.log(ret)

var ret = customer.reading
console.log(ret)
customer.reading =  200
ret = customer.reading
console.log(ret)

var ret = customer.duedate
console.log(ret)
customer.duedate =  "02/01/2013"
ret = customer.duedate
console.log(ret)

var ret = customer.Unitsconsumed
console.log(ret)
customer.Unitsconsumed =  210
ret = customer.Unitsconsumed
console.log(ret)

var ret = customer.Perunitprice
console.log(ret)
customer.Perunitprice =  10
ret = customer.Perunitprice
console.log(ret)

var ret = customer.PaymentDate
console.log(ret)
customer.PaymentDate =  "04/01/2012"
ret = customer.PaymentDate
console.log(ret)

var ret = customer.get_Paidammount
console.log(ret)

var ret = customer.get_BillAmount
console.log(ret)

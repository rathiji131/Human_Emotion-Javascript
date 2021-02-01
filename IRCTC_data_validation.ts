class IRCTC
{
    TransactionID : number ; 
    PNRNo : number  ; 
    DateofBooking  : Date;
    TrainNo  : number ; 
    Class : string ; 
    Quota : string; 
    DateofJourney  : string;  
    From  : string ;
    To  : string ; 
    BoardingAt  : string ; 
    ReservationUpto  : string ; 
    DateOfBoarding : string;

    constructor(TrainNo  : number , Class : string , Quota : string,date : number , month : number , year : number,From  : string,
        To  : string, BoardingAt  : string , ReservationUpto  : string,ScheduledDeparture : number) 
        {
            this.TransactionID = Math.random()
            this. PNRNo = Math.random()        
            if(TrainNo > 10000 && TrainNo < 99999)
            {
                this.TrainNo = TrainNo
            }
            else
            {
                console.log("Please neter valid train number!!")
                return
            }
            this.DateofBooking  = new Date();
            
            if(Class == "3 tier" || Class == "2 tier" || Quota == "1 tier" || Quota == "sleeper")
            {
                this.Class = Class  
            }
            else
            {
                console.log("Please choose valid class")
                return
            }
            
             
            if(Quota == "General" || Quota == "Tatkal" || Quota == "premium" || Quota == "senior citizen")
            {
                this.Quota = Quota 
            }
            else
            {
                console.log("Please choose valid quota")
                return
            }
            if (date > 0 && date < 31 && month > 0 && month < 13 && year == 2021)
            {
                this.DateofJourney  = date+"/"+month+"/"+year
                this.DateOfBoarding = date+"/"+month+"/"+year
            }
            else
            {
                document.writeln("Please enter valid date!!")
                return
            }
            if ((From == "Pune" ||From == "Banglore" ||From == "Hyderabad" || From == "chennai" ||From == "Mumbai") && (To == "Pune" || To == "Banglore" || To == "Hyderabad" || To == "chennai" ||To == "Mumbai"))
            {
                this.From  = From 
                this.To  = To
            }
            else
            {
                console.log("Please enter valid station name!!")
                return
            }

            if ((BoardingAt == "Pune" ||BoardingAt == "Banglore" ||BoardingAt == "Hyderabad" || BoardingAt == "chennai" ||BoardingAt == "Mumbai") && (ReservationUpto == "Pune" || ReservationUpto == "Banglore" || ReservationUpto == "Hyderabad" || ReservationUpto == "chennai" ||ReservationUpto == "Mumbai"))
            {
                this.BoardingAt  = BoardingAt
                this.ReservationUpto  = ReservationUpto
            }
            else
            {   
                console.log("Please enter valid station name!!")
                return
            }
    }

    get_TransactionID()
    {
        return this.TransactionID
    }
    get_DateofBooking()
    {
        return this.DateofBooking
    }
    
    get_PNRNo()
    {
        return this.PNRNo
    }

    check_PNRNo(PNRNo : number)
    {
        if(PNRNo == this.PNRNo)
            console.log("Tickets confirmed!!")
        else
            console.log("Invalid PNR number!!")
    }

    get_TrainNo()
    {
        return this.TrainNo
    }
    set_TrainNo(TrainNo : number )
    {
        this.TrainNo = TrainNo
    }

    get_Class()
    {
        return this.Class
    }
    set_Class(Class : string)
    {
        if(Class == "3 tier" || Class == "2 tier" || Class == "1 tier" || Class == "sleeper")
            {
                this.Class = Class  
            }
            else
            {
                console.log("Please choose valid class")
                //return
            }
    }

    get_Quota()
    {
        return this.Quota
    }
    set_Quota(Quota : string)
    {
        if(Quota == "General" || Quota == "Tatkal" || Quota == "premium" || Quota == "senior citizen")
            {
                this.Quota = Quota 
            }
            else
            {
                console.log("Please enter valid quota")
                //return
            }
        
    }

    get_DateofJourney()
    {
        return this.DateofJourney
    }
    set_DateofJourney(DateofJourney : string)
    {
        this.DateofJourney = DateofJourney
    }

    get_From()
    {
        return this.From
    }
    set_From(From : string)
    {
        if ((From == "Pune" ||From == "Banglore" ||From == "Hyderabad" || From == "chennai" ||From == "Mumbai"))
            {
                this.From  = From 
            }
            else
            {
                console.log("Please enter valid station name!!")
               // return
            }
    }

    get_To()
    {
        return this.To
    }
    set_To(To : string)
    {
        if ((To == "Pune" || To == "Banglore" || To == "Hyderabad" || To == "chennai" ||To == "Mumbai"))
            {
                
                this.To  = To
            }
            else
            {
                console.log("Please enter valid station name!!")
                //return
            }
    }

    get_BoardingAt()
    {
        return this.BoardingAt
    }
    set_BoardingAt(BoardingAt : string)
    {
        if ((BoardingAt == "Pune" ||BoardingAt == "Banglore" ||BoardingAt == "Hyderabad" || BoardingAt == "chennai" ||BoardingAt == "Mumbai"))
            {
                this.BoardingAt  = BoardingAt 
            }
            else
            {
                console.log("Please enter valid station name!!")
               // return
            }
    }

    get_DateOfBoarding()
    {
        return this.DateOfBoarding
    }

    set_DateOfBoarding(date : number , month : number , year : number )
    {
        if (date > 0 && date < 31 && month > 0 && month < 13 && year == 2021)
            {
                this.DateOfBoarding  = date+"/"+month+"/"+year;
            }
    }
    get_ReservationUpto()
    {
        return this.ReservationUpto
    }
    set_ReservationUpto(ReservationUpto : string)
    {
        if ((ReservationUpto == "Pune" ||ReservationUpto == "Banglore" ||ReservationUpto == "Hyderabad" || ReservationUpto == "chennai" ||ReservationUpto == "Mumbai"))
            {
                this.ReservationUpto  = this.To 
            }
            else
            {
                console.log("Please enter valid station name!!")
                //return
            }
    }
}

let customer = new IRCTC(56213 ,"sleeper","Tatkal",14 ,12, 2015  , "Mumbai", "Pune" ,"Mumbai", "Pune" , 7)
//(TrainNo  : number , Class : string , Quota : string,date : number , month : number , year : number,From  : string,
//    To  : string, BoardingAt  : string , ReservationUpto  : string,ScheduledDeparture : number)


var ret = customer.get_TransactionID()
console.log(ret)

var ret = customer.get_PNRNo()
console.log(ret)
customer.check_PNRNo(ret)
ret = customer.get_PNRNo()
console.log(ret)

var ret = customer.get_TrainNo()
console.log(ret)
customer.set_TrainNo(17057)
ret = customer.get_TrainNo()
console.log(ret)

var op = customer.get_DateofBooking()
console.log(op)

var reter = customer.get_Class()
console.log(reter)
customer.set_Class("3rd AC")
reter = customer.get_Class()
console.log(reter)

var reter = customer.get_Quota()
console.log(reter)
customer.set_Quota("tatkal")
reter = customer.get_Quota()
console.log(reter)

var reter = customer.get_DateofJourney()
console.log(reter)
customer.set_DateofJourney("27/01/2021")
reter = customer.get_DateofJourney()
console.log(reter)

var reter = customer.get_From()
console.log(reter)
customer.set_From("Banglore")
reter = customer.get_From()
console.log(reter)

var reter = customer.get_To()
console.log(reter)
customer.set_To("Pune")
reter = customer.get_To()
console.log(reter)

var reter = customer.get_BoardingAt()
console.log(reter)
customer.set_BoardingAt("Yashwantpur")
reter = customer.get_BoardingAt()
console.log(reter)

var reter = customer.get_DateOfBoarding()
console.log(reter)
customer.set_DateOfBoarding(27, 1 ,2021)
reter = customer.get_DateOfBoarding()
console.log(reter)

var reter = customer.get_ReservationUpto()
console.log(reter)
customer.set_ReservationUpto("Mumbai")
reter = customer.get_ReservationUpto()
console.log(reter)
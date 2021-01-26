class IRCTC
{
    TransactionID : number ; //
    PNRNo : number  ; //
    TrainNoName  : string ; //
    DateofBooking  : string;// 
    Class : string ; //
    Quota : string //
    DateofJourney  : string; // 
    From  : string ;//
    To  : string ; //
    BoardingAt  : string ; //
    DateOfBoarding : string; //
    ReservationUpto  : string ; //
    ScheduledDeparture : string ;//

    constructor(TransactionID : number,PNRNo : number,TrainNoName  : string, DateofBooking  : string , Class : string , Quota : string,DateofJourney  : string,From  : string,
        To  : string, BoardingAt  : string, DateOfBoarding : string, ReservationUpto  : string,ScheduledDeparture : string)
    {
        this.TransactionID = TransactionID
        this.PNRNo = PNRNo  
        this.TrainNoName  = TrainNoName 
        this.DateofBooking  = DateofBooking
        this.Class = Class  
        this.Quota = Quota 
        this.DateofJourney  = DateofJourney
        this.From  = From 
        this.To  = To 
        this.BoardingAt  = BoardingAt 
        this.DateOfBoarding = DateOfBoarding
        this.ReservationUpto  = ReservationUpto 
        this.ScheduledDeparture = ScheduledDeparture 

    }

    get_TransactionID()
    {
        return this.TransactionID
    }
    set_TransactionID(TransactionID : number)
    {
        this.TransactionID = TransactionID
    }

    get_PNRNo()
    {
        return this.PNRNo
    }
    set_PNRNo(PNRNo : number)
    {
        this.PNRNo = PNRNo
    }

    get_TrainNoName()
    {
        return this.TrainNoName
    }
    set_TrainNoName(TrainNoName : string)
    {
        this.TrainNoName = TrainNoName
    }

    get_DateofBooking()
    {
        return this.DateofBooking
    }
    set_DateofBooking(DateofBooking : string)
    {
        this.DateofBooking = DateofBooking
    }

    get_Class()
    {
        return this.Class
    }
    set_Class(Class : string)
    {
        this.Class = Class
    }

    get_Quota()
    {
        return this.Quota
    }
    set_Quota(Quota : string)
    {
        this.Quota = Quota
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
        this.From = From
    }

    get_To()
    {
        return this.To
    }
    set_To(To : string)
    {
        this.To = To
    }

    get_BoardingAt()
    {
        return this.BoardingAt
    }
    set_BoardingAt(BoardingAt : string)
    {
        this.BoardingAt = BoardingAt
    }

    get_DateOfBoarding()
    {
        return this.DateOfBoarding
    }
    set_DateOfBoarding(DateOfBoarding : string)
    {
        this.DateOfBoarding = DateOfBoarding
    }

    get_ReservationUpto()
    {
        return this.ReservationUpto
    }
    set_ReservationUpto(ReservationUpto : string)
    {
        this.ReservationUpto = ReservationUpto
    }

    get_ScheduledDeparture()
    {
        return this.ScheduledDeparture
    }
    set_ScheduledDeparture(ScheduledDeparture : string)
    {
        this.ScheduledDeparture = ScheduledDeparture
    }
}

let customer = new IRCTC(100000380284535,4115023549,"56213 / TIRUPATI PASSR","14-Dec-2015" ,
"SLEEPERCLASS" , "GENERAL", "04-Jan-2016" , "KJM" , "TPTY" , "KJM" ,
 "04-Jan-2016" ,"TPTY" ,"21:00 Hrs")

var ret = customer.get_TransactionID()
console.log(ret)
customer.set_TransactionID(100000380284123)
ret = customer.get_TransactionID()
console.log(ret)

var ret = customer.get_PNRNo()
console.log(ret)
customer.set_PNRNo(4115023612)
ret = customer.get_PNRNo()
console.log(ret)

var reter = customer.get_TrainNoName()
console.log(reter)
customer.set_TrainNoName("17057 & devgiri express")
reter = customer.get_TrainNoName()
console.log(reter)

var reter = customer.get_DateofBooking()
console.log(reter)
customer.set_DateofBooking("26/01/2021")
reter = customer.get_DateofBooking()
console.log(reter)

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
customer.set_DateOfBoarding("27/01/2021")
reter = customer.get_DateOfBoarding()
console.log(reter)

var reter = customer.get_ReservationUpto()
console.log(reter)
customer.set_ReservationUpto("27/01/2021")
reter = customer.get_ReservationUpto()
console.log(reter)

var reter = customer.get_ScheduledDeparture()
console.log(reter)
customer.set_ScheduledDeparture("9:00 Am")
reter = customer.get_ScheduledDeparture()
console.log(reter)
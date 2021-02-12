//typescript code
class Cinema_Ticlet_booking
{ 
    ticket_info : any[] = [];

    constructor(theatrename : string , screen : string , name : string ,  movieCertification : string  ,moive_class : string ,priceperticket : number ,numberoftickets : number ,seatnumbers : string)
        {
                this.ticket_info.push(theatrename);
                this.ticket_info.push(screen);
                this.ticket_info.push(name);
                this.ticket_info.push(movieCertification);
                this.ticket_info.push(moive_class);
                this.ticket_info.push(priceperticket);
                this.ticket_info.push(numberoftickets);
                this.ticket_info.push(seatnumbers);
        }
        set_Theatrename(theatername : string)
        {
            this.ticket_info.push(theatername);
        }
        get_Theatrename()
        {
            return this.ticket_info.pop();
        }
        set_Screen(Screen : string)
        {
            this.ticket_info.push(Screen);
        }
        get_Screen()
        {
            return this.ticket_info.pop();
        }
        set_Name(Name : string)
        {
            this.ticket_info.push(Name);
        }
        get_Name()
        {
            return this.ticket_info.pop();
        }
        set_Certification(Certification : string)
        {
            this.ticket_info.push(Certification);
        }
        get_Certification()
        {
            return this.ticket_info.pop();
        }
        set_Class(Class : string)
        {
            this.ticket_info.push(Class);
        }
        get_Class()
        {
            return this.ticket_info.pop();
        }
        set_Priceperticket(priceperticket : number)
        {
            this.ticket_info.push(priceperticket);
        }
        get_Priceperticket()
        {
            return this.ticket_info.pop();
        }
        set_Seatnumbers(Seatnumbers : string)
        {
            this.ticket_info.push(Seatnumbers);
        }
        get_Seatnumbers()
        {
            return this.ticket_info.pop();
        }
        
        set_Numberoftickets(Numberoftickets : number)
        {
            this.ticket_info.push(Numberoftickets);
        }
        get_Numberoftickets()
        {
            return this.ticket_info.pop();
        }
        get_Totalamount()
        {
            return this.ticket_info.pop();
        }
        dsiplay()
        {
            console.log(this.ticket_info)
        }
}
let ticket = new Cinema_Ticlet_booking("PSS MULTIPLEX" , "Screen 3" , "JVT [C,CPP]", "U" , "First" , 200 , 5,"c1 c2 c3 c4 c5")
ticket.dsiplay()

var output : string = ticket.get_Theatrename()
console.log(output)
ticket.set_Theatrename("Intimetec angular")
var output : string = ticket.get_Theatrename()
console.log(output)

var output : string = ticket.get_Screen()
console.log(output)
ticket.set_Screen("screen 10")
var output : string = ticket.get_Screen()
console.log(output)

var output : string = ticket.get_Name()
console.log(output)
ticket.set_Name("Bahubali")
var output : string = ticket.get_Name()
console.log(output)

var output : string = ticket.get_Certification()
console.log(output)
ticket.set_Certification("B grade")
var output : string = ticket.get_Certification()
console.log(output)

var output : string = ticket.get_Certification()
console.log(output)
ticket.set_Certification("B grade")
var output : string = ticket.get_Certification()
console.log(output)

var opt : number = ticket.get_Priceperticket()
console.log(opt)
ticket.set_Priceperticket(500)
var opt : number = ticket.get_Priceperticket()
console.log(opt)

var output : string = ticket.get_Seatnumbers()
console.log(output)
ticket.set_Seatnumbers("B1 B2 B3 B4")
var output : string = ticket.get_Seatnumbers()
console.log(output)
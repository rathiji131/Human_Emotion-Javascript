//typescript code
class Cinema_Ticlet_booking
{ 
    Theatrename : string ;
    Screen : string ;
    Name : string ;
    Certification : string  ;
    Class : string  ;
    Priceperticket : number  ;
    Numberoftickets : number ;
    Seatnumbers : string ;
    Totalamount :number ;

    constructor(theatrename : string , screen : string , name : string ,  movieCertification : string  ,moive_class : string ,priceperticket : number ,numberoftickets : number ,seatnumbers : string)
        {
                this.Theatrename = theatrename;
                this.Screen = screen;
                this.Name = name;
                this.Certification = movieCertification;
                this.Class = moive_class;
                this.Priceperticket = priceperticket;
                this.Numberoftickets = numberoftickets;
                this.Seatnumbers = seatnumbers;
                this.Totalamount = priceperticket * numberoftickets;
        }
        set_Theatrename(theatername : string)
        {
            this.Theatrename = theatername;
        }
        get_Theatrename()
        {
            return this.Theatrename;
        }
        set_Screen(Screen : string)
        {
            this.Screen = Screen;
        }
        get_Screen()
        {
            return this.Screen;
        }
        set_Name(Name : string)
        {
            this.Name = Name;
        }
        get_Name()
        {
            return this.Name;
        }
        set_Certification(Certification : string)
        {
            this.Certification = Certification;
        }
        get_Certification()
        {
            return this.Certification;
        }
        set_Class(Class : string)
        {
            this.Class = Class;
        }
        get_Class()
        {
            return this.Class;
        }
        set_Priceperticket(priceperticket : number)
        {
            this.Priceperticket = priceperticket;
        }
        get_Priceperticket()
        {
            return this.Priceperticket;
        }
        set_Seatnumbers(Seatnumbers : string)
        {
            this.Seatnumbers = Seatnumbers;
        }
        get_Seatnumbers()
        {
            return this.Seatnumbers;
        }
        
        set_Numberoftickets(Numberoftickets : number)
        {
            this.Numberoftickets = Numberoftickets;
        }
        get_Numberoftickets()
        {
            return this.Numberoftickets;
        }
        get_Totalamount()
        {
            return this.Totalamount;
        }
}
let ticket = new Cinema_Ticlet_booking("PSS MULTIPLEX" , "Screen 3" , "JVT [C,CPP]", "U" , "First" , 200 , 5,"c1 c2 c3 c4 c5")
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

var op : number = ticket.get_Priceperticket()
console.log(op)
ticket.set_Priceperticket(500)
var op : number = ticket.get_Priceperticket()
console.log(op)

var output : string = ticket.get_Seatnumbers()
console.log(output)
ticket.set_Seatnumbers("B1 B2 B3 B4")
var output : string = ticket.get_Seatnumbers()
console.log(output)
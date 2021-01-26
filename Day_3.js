<script>

//map data structures

let arr = new Map()

//set is used to add data in map data structures
arr.set("Name" , "Madhusudan ")
arr.set("Lastname" , "Rathi")
arr.set("Middlename" , "Shankarlal")
arr.set("Age" , 22)
arr.set("Bloodgroup" , "o+ve")
arr.set("color" , "Fair")
arr.set("adress" , "Bangalure")
arr.set("Hometown" , "Pune")
arr.set("number" , 8788179421 )

//get is used to extract data from map data structures
document.writeln(arr.get("Name"))
document.writeln(arr.get("Lastname"))
document.writeln(arr.get("Middlename"))
document.writeln(arr.get("Age"))
document.writeln(arr.get("Bloodgroup"))
document.writeln(arr.get("color"))
document.writeln(arr.get("adress"))
document.writeln(arr.get("Hometown"))
document.writeln(arr.get("number"))

</script>

=======================================================================

<script>
//ways to declare class
class Darshan
{
	constructor(name , orderno , mail , number , aadhar, date,day)
    	{
    		var NameofThePilgrim = name
        	var OrderNo = orderno
		var Email = mail
        	var NoofTickets = number
        	var ProofofIDAadhaarCard  = aadhar
        	var Date = date
		var Day = day
        	var NoOfPassenger = 1
       	}
    	display()
    	{
    		document.writeln(NameofThePilgrim)
		document.writeln(OrderNo)
		document.writeln(Email)	
		document.writeln(NoofTickets)
		document.writeln(ProofofIDAadhaarCard)
		document.writeln(Date)
		document.writeln(Day)
    	}
	TicketType = "Special Entry Darshan"
	Time = "3:30 Am"
	BookingNo = "IS151110080016"
	Amountinfigures = 220	
	NameoftheSevaDarshan = "Archana"
	ReportingTime = "4:00 AM"
	PerformanceDateTime = "12012015 AM 4:30:00"
	PrivilegestotheSeva = "Two Small Laddu"
	BookedTime = "11:36:46"
	AccommodationType = "Rs 500 Tirumala"	
	Rate = "50 to 2000"
    
    getTicketType()
    {
    	document.writeln(this.TicketType)
    }
    setTicketType(tickettype)
    {
    	this.TicketType = tickettype
    }
    getTime()
    {
    	document.writeln(this.Time)
    }
    setTime(time)
    {
    	this.Time = time
    }
    getBookingNo()
    {
    	document.writeln(this.BookingNo)
    }
    setnumberOfPassenger(number)
    {
    	this.NoOfPassenger = number
    }
    getAmountinfigures()
    {
    	document.writeln(this.Amountinfigures * this.NoOfPassenger)
    }
    getBookedDateTime()
    {
    	document.writeln(this.BookedDateTime)
    }
    setBookedDateTime(bookedDateTime)
    {
    	this.BookedDateTime = bookedDateTime
    }
    getNameoftheSevaDarshan()
    {
    	document.writeln(this.NameoftheSevaDarshan)
    }
    setNameoftheSevaDarshan(nameoftheSevaDarshan)
    {
    	this.NameoftheSevaDarshan = nameoftheSevaDarshan
    }
    getReportingTime()
    {
    	document.writeln(this.ReportingTime)
    }
    setReportingTime(reportingTime)
    {
    	this.ReportingTime = reportingTime
    }
    getPerformanceDateTime()
    {
    	document.writeln(this.PerformanceDateTime)
    }
    setPerformanceDateTime(performanceDateTime)
    {
    	this.PerformanceDateTime = performanceDateTime
    }
    getPrivilegestotheSeva()
    {
    	document.writeln(this.PrivilegestotheSeva)
    }
    getBookedTime()
    {
    	document.writeln(this.BookedTime)
    }
    getAccommodationType()
    {
    	document.writeln(this.AccommodationType)
    }
    setAccommodationType(accommodationType)
    {
    	this.AccommodationType = accommodationType
    }
    getRate()
    {
    	document.writeln(this.Rate)
    }
    setRate(rate)
    {
    	this.Rate = rate
    }
}

let pass = new Darshan( "Madhu" , 12345 , "ms@gmail.com" , 9812341287 , "6543 1234 8900" , "12/12/21" , "Monday")
pass.display()

pass.getTime()
pass.setTime("4:30 PM")
pass.getTime()

pass.getTicketType()
pass.setTicketType("Regular")
pass.getTicketType()

pass.getBookingNo()

pass.getAmountinfigures()

pass.setnumberOfPassenger(5)
pass.getAmountinfigures()

pass.getBookedDateTime()
pass.setBookedDateTime("12:12:12 am")
pass.getBookedDateTime()

pass.getNameoftheSevaDarshan()
pass.setNameoftheSevaDarshan("Aarti morning")
pass.getNameoftheSevaDarshan()

pass.getReportingTime()
pass.setReportingTime("5:00 AM")
pass.getReportingTime()

pass.getPerformanceDateTime()
pass.setPerformanceDateTime("12/12/2021 AM 5:00:00")
pass.getPerformanceDateTime()

pass.getPrivilegestotheSeva()
pass.getBookedTime()

pass.getAccommodationType()
pass.setAccommodationType("Rs 1000 per room")
pass.getAccommodationType()

pass.getRate()
pass.setRate(500)
pass.getRate()
</script>

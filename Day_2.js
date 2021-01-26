<script>
//function implementation
var due = 100

function Collage()
{
	var name = "Madhusudan Rathi"
	var mobNo = "1234123412"
	var address = "Nanded"
	var Code = "NAN1234"
	var pincode = 423123 
	document.write(name , mobNo , address , due )
	document.write(Code,pincode)
}

Collage()

function duee(due , amount)
{
	due = due + amount
    	document.write(due)
}
function paid(due , amount)
{
	due = due - amount
    	document.write(due)
}

function close()
{
	due = 0
    	document.write(due)
}
function changeNumber(number)
{
	mobNo = number
    	document.write(mobNo)
}

duee(1000 , 200)
paid(1000 , 200)
changeNumber(8765432198)
close()

function Company()
{
	var name = "Ajay"
	var mobNo = "8823533123"
	var address = "Pune"
	var UID = 1331903
	var Code = "INTIMETEC01"
	var pincode = 321213 
	document.write(name , mobNo , address , UID )
	document.write(Code,pincode)
}

Company()

function changeNumber(number)
{
	mobNo = number
    	document.write(mobNo)
}

changeNumber(9405322812)

var date = 14
var month = "Jan"
var year   = 2021
var day = "Friday"
var tithi = "Poornima"

function Day()
{
	day = "Monday"
	document.write(tithi)
    	document.write(day)
}

Day()

class day_properties
{
	static day1 = "Sunday"
	constructor(tithi)
    	{	//access object memory address
    		this.tithi = tithi
    	}
    
    	display()
    	{
    		document.writeln(this.day1)
    	}
    
    	static display_tithi()
    	{
    		document.write(day_properties.tithi)
    	}
}

let state = new day_properties("008")
state.display()
=================================================================================================
//Array datastructure
details_of_day = [14,"Jan" , 2021 , "Friday" , "Poornima"]
document.writeln(details_of_day[1])

document.writeln(details_of_day[2])

document.writeln(details_of_day[3])

mother = ["mother works hard" , "She is happy" , "Caring you"]
document.writeln(mother[1])

document.writeln(mother[2])

document.writeln(mother[3])

</script>

<script>
//Object data structures
let Diabeties = {
			tabletName : "actrapid",
    			price : 300,
                	dose : 12,
                	times : 3,
                	uses : "type2"   				
                }
              
document.writeln(Diabeties.tabletName)
document.writeln(Diabeties.price)
document.writeln(Diabeties.dose)
document.writeln(Diabeties.times)
document.writeln(Diabeties.uses)

Diabeties.sideEffect = function ()
{
	document.writeln("Hypoglycemia : low blood suger")
}

Diabeties.howToUse = function ()
{
	document.writeln("according to doctor and nurse")
}

Diabeties.howItWorks = function ()
{
	document.writeln("Short Acting insulin  which starts working within 30 mins")
}

Diabeties.unsafe = function ()
{
	document.writeln("unsafe to consume alcohal with it")
}

Diabeties.caution = function ()
{
	document.writeln("your ability to drive may be afected")
    	document.writeln("shuld be used with caution with kidney patients")
    	document.writeln("shuld be used with caution with liver patients")   
}

Diabeties.caution()
Diabeties.unsafe()
Diabeties.howItWorks()
Diabeties.howToUse()
Diabeties.sideEffect()

</script>
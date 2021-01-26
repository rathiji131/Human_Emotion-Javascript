<script>
//regular class implementation
class Driver_information
{
	Lastname = "kumar"
	Firstname = "Pavan"
	Middlename = "Bijjavaram"
	Driverlicensenumber = "ka50201500006939"
	Driverslicensestate = "karnataka"
	Driverslicensecountry = "india"
	Civiliantype = "around india"
	Employeetype = "software engineer"
	Dateofbirth = "12-07-1992"
	Cityofbirth = "rajampet"
}
var info = new Driver_information()
document.writeln(info.Lastname,info.Firstname,info.Middlename,info.Driverlicensenumber)
document.writeln(info.Driverslicensestate,info.Driverslicensecountry,info.Civiliantype,info.Employeetype)
document.writeln(info.Dateofbirth,info.Cityofbirth)

//class with get and set methods inside class
let properties = 
{
	Weight:55,
	Hight:5.8,
	Eyecolour : "brown",
	Gender : "male",
	Homeaddress :  "#6/96,rajampet,kadapa.",
	Homephone : 975545445,
	Mobile : 8553577745,
	State : "andhrapradesh",
	County : "india",
    getWeight()
    {
    	document.writeln(this.Weight)
    },
    setWeight(weight)
    {
    	this.Weight = weight
    },
    getHeight()
    {
    	document.writeln(this.Hight)
    },
    setHeight(height)
    {
    	this.Hight = height
    },
    getEyecolour()
    {
    	document.writeln(this.Eyecolour)
    },
    setEyecolour(eyecolour)
    {
    	this.Eyecolour = eyecolour
    } ,   
    getGender()
    {
    	document.writeln(this.Gender)
    },
    setGender(gender)
    {
    	this.Gender = gender
    } ,   
    getHomephone()
    {
    	document.writeln(this.Homephone)
    },
    setHomephone(homephone)
    {
    	this.Homephone = homephone
    },   
    getState()
    {
    	document.writeln(this.State)
    },
    setState(state)
    {
    	this.State = state
    }   
}
properties.getWeight()
properties.setWeight(100)
properties.getWeight()

properties.getHeight()
properties.setHeight("6.1")
properties.getHeight()

properties.getEyecolour()
properties.setEyecolour("Gray")
properties.getEyecolour()

properties.getGender()
properties.setGender("Female")
properties.getGender()

properties.getHomephone()
properties.setHomephone(9876543210)
properties.getHomephone()

properties.getState()
properties.setState("Maharashtra")
properties.getState()

let Car_specification = 
{	
		Vehicletype : "light motor vehicle- car",
		Colour : "red",
		Enginenumber : "kp98gtyihh457797",
		Chassisnumber : "tc5678898335r45",
		Company : "BMW"
}
Car_specification.getColour () = function ()
{
	document.writeln(this.Colour)
}
Car_specification.setColour() = function(color)
{
	this.Colour = color
}
Car_specification.getCompany() = function()
{
	document.writeln(this.Company)
}
Car_specification.setCompany() = function(company)
{
	this.Company = company
}
Car_specification.getEnginenumber() = function()
{
	document.writeln(this.Enginenumber)
}
Car_specification.setEnginenumber() = function(enginenumber)
{
	this.Enginenumber = enginenumber
}
Car_specification.getChassisnumber() = function()
{
	document.writeln(this.Chassisnumber)
}
Car_specification.setChassisnumber() = function(chassisnumber)
{
	this.Chassisnumber = chassisnumber
}
Car_specification.getColour()
Car_specification.setColour("White")
Car_specification.getColour()

Car_specification.getCompany()
Car_specification.setCompany("TATA")
Car_specification.getCompany()

Car_specification.getEnginenumber()
Car_specification.setEnginenumber("ip9822tyihh412345")
Car_specification.getEnginenumber()

Car_specification.getChassisnumber()
Car_specification.setChassisnumber("dd56782345675r32")
Car_specification.getChassisnumber()
</script>
-------------------------------------------------------------------------------
<script>
class calculator
{
	constructor(num1 , num2)
    	{
    		this.Num1 = num1
        	this.Num2 = num2
    	}
    	sum()
    	{
    		return this.Num1+this.Num2
    	}	
    	sub()
    	{
    		return this.Num1-this.Num2
    	}
    	mul()
    	{
    		return this.Num1*this.Num2
    	}
    	div()
    	{
    		return this.Num1/this.Num2
    	}
    	mod()
   	{
    		return this.Num1%this.Num2
    	}
}
var calci = new calculator(12,10)
var ret = calci.sum()
document.writeln(ret)

var ret = calci.sub()
document.writeln(ret)

var ret = calci.mul()
document.writeln(ret)

var ret = calci.div()
document.writeln(ret)

var ret = calci.mod()
document.writeln(ret)
</script>
---------------------------------------------------------------------------------------
<script>
//data validation and class implementation
let CreatingGoogleAccount = 
{
	FirstName : "venkatesh",
	LastName : "db",
	ChooseUsername : "jvt",
	CreatPassword : "balu",
	ConfirmYourPassword : "balu",
	Birthday : "2-6-1986",
	Gender : "male",
	Mobile : 9900367097,
	Currentemailaddress : "venkatesh.db@gmail.com",
    
    getFirstName()
    {
    	document.writeln(this.FirstName)
    },
    setFirstName(firstName)
    {
    	this.FirstName = firstName
    },
    getLastName()
    {
    	document.writeln(this.LastName)
    },
    setLastName(lastName)
    {
    	this.LastName = lastName
    },
    
    getChooseUsername()
    {
    	document.writeln(this.ChooseUsername)
    },
    setLastName(chooseUsername)
    {
    	this.ChooseUsername = chooseUsername
    },
    
    getCreatPassword()
    {
    	document.writeln(this.CreatPassword)
    },
    setCreatPassword(creatPassword)
    {
    	this.CreatPassword = creatPassword
    },
    getConfirmYourPassword()
    {
    	document.writeln(this.ConfirmYourPassword)
    },
    setConfirmYourPassword(confirmYourPassword)
    {
    	this.ConfirmYourPassword = confirmYourPassword
    },
    check()
    {
    	if(this.ConfirmYourPassword == this.CreatPassword)
        {
        
        	document.writeln("Password changed successfully")
        }
        else
        {
        	document.writeln("Please reenter the passwrod")
        }
    } ,
    getBirthday()
    {
    	document.writeln(this.Birthday)
    },
    setBirthday(birthday)
    {
    	this.Birthday = birthday
    },
    
    getGender()
    {
    	document.writeln(this.Gender)
    },
    setGender(gender)
    {
    	this.Gender = gender
    } ,  
    getMobile()
    {
    	document.writeln(this.Mobile)
    },
    setMobile(mobile)
    {
    	this.Mobile = mobile
    },
    
    getCurrentemailaddress()
    {
    	document.writeln(this.Currentemailaddress)
    },
    setCurrentemailaddress(currentemailaddress)
    {
    	this.Currentemailaddress = currentemailaddress
    }
}

CreatingGoogleAccount.getFirstName()
CreatingGoogleAccount.setFirstName("Mahesh")
CreatingGoogleAccount.getFirstName()

CreatingGoogleAccount.getLastName()
CreatingGoogleAccount.setLastName("Reddy")
CreatingGoogleAccount.getLastName()

CreatingGoogleAccount.getCreatPassword()
CreatingGoogleAccount.setCreatPassword("Intime2021")
CreatingGoogleAccount.getCreatPassword()

CreatingGoogleAccount.getConfirmYourPassword()
CreatingGoogleAccount.setConfirmYourPassword("intime2021")
CreatingGoogleAccount.getConfirmYourPassword()

CreatingGoogleAccount.check()

CreatingGoogleAccount.getBirthday()
CreatingGoogleAccount.setBirthday("25-12-1995")
CreatingGoogleAccount.getBirthday()

CreatingGoogleAccount.getGender()
CreatingGoogleAccount.setGender("Female")
CreatingGoogleAccount.getGender()

CreatingGoogleAccount.getMobile()
CreatingGoogleAccount.setMobile(9876543210)
CreatingGoogleAccount.getMobile()

CreatingGoogleAccount.getCurrentemailaddress()
CreatingGoogleAccount.setCurrentemailaddress("mr@gmail.com")
CreatingGoogleAccount.getCurrentemailaddress()

</script>
----------------------------------------------------------------------------------------
<script>
//Object datastructure and printing it 
let emplyeeDetails = {
				CName : "JVT" , 
				EmailAddress : "info@jvtechnologies.co.in" ,
				PhotoIDCard : "Voter Id or Ration card .." , 
				IDCardNo : "ASUPB590F" ,
				NameP : "Mr. venkatesh" ,
				Age : 25 ,
				Gender : "Male" ,
				Email : "venkatesh.db@gmail.com" ,
				Address : "BEML Main Road" ,
				City : "Bangalore" ,
				State : "Karnataka" ,
				ZipPincode : 560075 ,
				Country : "India" ,
				MobileNo : 09900367097 ,
				PhotoID : "Passport" ,
				PhotoIDNo  : "G3839975"  
		    }
document.writeln(emplyeeDetails.CName)
document.writeln(emplyeeDetails.EmailAddress)
document.writeln(emplyeeDetails.PhotoIDCard)
document.writeln(emplyeeDetails.IDCardNo)
document.writeln(emplyeeDetails.Age)
document.writeln(emplyeeDetails.Gender)
document.writeln(emplyeeDetails.Address)
document.writeln(emplyeeDetails.City)
document.writeln(emplyeeDetails.State)
document.writeln(emplyeeDetails.ZipPincode)
document.writeln(emplyeeDetails.Country)
document.writeln(emplyeeDetails.MobileNo)
document.writeln(emplyeeDetails.PhotoID)
document.writeln(emplyeeDetails.PhotoIDNo)

</script>
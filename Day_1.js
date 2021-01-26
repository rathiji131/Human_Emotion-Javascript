<script>

function netconnreq()
{
	var AccountID  = 113723
    	var BroadBandID = 1112345
    	var IPAddress = "10.234.43.223"
}
var conreq = new netconnreq()
    
function netusage (TotalMBDownloaded , MobileDownloadSpeed)
{
	MobileuploadSpeed = 32
    	if(TotalMBDownloaded >= 100)
    	{
    		return "usage is completed"
    	}
}
netusage(21,30)

class connreq
{
	constructor()
    	{
    		this.AccountID  = 113723
    		this.BroadBandID = 1112345
    		this.IPAddress = "10.234.43.223"
    	}
    
    	netUsage(TotalMBDownloaded , MobileDownloadSpeed)
    	{
    		this.TotalMBDownloaded = TotalMBDownloaded
    	}
    	display()
    	{
    		document.writeln(this.AccountID , this.BroadBandID)
    	}
}

var req = new connreq()
var ret = netusage(100)
document.write(ret)
req.display()

</script>
-------------------------------------------------------------------------------
<script>
var a = 9;
var c ="check"
var b = [1,2]

function check(a, b, c){
  a = 7;
  b = 8;
  c  = "ckeck";
}

check(a,b,c)

document.write(a);
document.write(b);
document.write(c);
</script>
-------------------------------------------------------------------------------
<script>
var quote = "Hard work beats"
var emotion = "Caring you"
var happy   = "First job"
var thankful = "intimetec"
var parent = "Mother father"

function goodmorning()
{
	emotion = "caring u"
	document.write(quote)
    	document.write(emotion)
}

class Mothers
{
	static name = "Madhu"
	constructor(bond)
    	{	//access object memory address
    		this.james = bond
    	}
    
    	display()
    	{
    		document.writeln(this.james)
    	}
    
    	static display_name()
    	{
    		document.writeln(Mothers.name)
    	}
}

let amma = new Mothers("008")
amma.display()
goodmorning()
Mothers.display_name()

</script>
-------------------------------------------------------------------------------
<script>

var fruitprice = 200 //28 bytes allocated

class humans 
{
	emotion  = "happiness"
	constructor ()
	{
		document.write(this.emotion);
	}
}
var madhusudan  = new humans ()
document.write(madhusudan.emotion)

class ceo
{
	//data in heap memory decided by interpreter
	name = "Madhusudan Rathi"  //allocate 48 bytes
	age = 25
	salary  = 1234567
}
var madhusudan = new ceo()
document.write(madhusudan.name)

class inventor
{
	constructor(langcreator )
	{
		this.lc = langcreator 
     		document.writeln(this.lc)
	}
}
var inv = new inventor("denis") 

</script>
-------------------------------------------------------------------------------
<script>

var balance = 10000

function bank()
{
	var name = "Madhusudan Rathi"
	var mobNo = "8888888888"
	var address = "Intimetec visionsoft"
	var IFSC = "KKBK1234"
	var pincode = 431401 
	document.write(name , mobNo , address , balance )
	document.write(IFSC,pincode)
}

bank()

function deposit(amount)
{
	balance = balance + amount
    	document.write(balance)
}
function withdraw(amount)
{
	balance = balance - amount
    	document.write(balance)
}

function close()
{
	balance = 0
    	document.write(balance)
}
function changeNumber(number)
{
	mobNo = number
    	document.write(mobNo)
}

deposit(1000 , 200)
withdraw(1000 , 200)
changeNumber(1234567890)
close()
</script>
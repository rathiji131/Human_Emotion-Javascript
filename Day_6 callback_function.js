<script>
//callback function
function greeting()
{
    console.log("Good morning")
}
function morning(callback)
{
    callback()
}
morning(greeting)

//visiting card details
class visitingCardDetails
{
    
    constructor(name , mail , mobnumber , comname , designation , address)
    {
        this.Name = name
        this.mailid = mail
        this.contactno = mobnumber 
        this.companyname = comname 
        this.designation = designation 
        this.address =  address 
   }
   set_name(name , callback)
   {
       this.Name = name
       callback()
   }
   get_name()
   {
    document.writeln(this.Name)
   }

   set_mailid(mailid , callback)
   {
       this.mailid = mailid
       callback()
   }
   get_mailid()
   {
    console.log(this.mailid)
   }

   set_contactno(contactno , callback)
   {
       this.contactno = contactno
       callback()
   }
   get_contactno()
   {
    console.log(this.contactno)
   }

   set_companyname(companyname , callback)
   {
       this.companyname = companyname
       callback()
   }
   get_companyname()
   {
    console.log(this.companyname)
   }
   set_designation(designation , callback)
   {
       this.designation = designation
       callback()
   }
   get_designation()
   {
    console.log(this.designation)
   }

   set_address(address , callback)
   {
       this.address = address
       callback()
   }
   get_address()
   {
    console.log(this.address)
   }
}

let employee = new visitingCardDetails("Mahesh", "mahesh@gmail.com" , 9876543210 , "JVT" , "ASE" , "Gachibowli")
employee.set_name("Madhusudan" , employee.get)
employee.set_mailid("Madhu@intimetec.com" , employee.get_mailid)
employee.set_contactno("9876543210" , employee.get_contactno)
employee.set_designation("ASE" , employee.get_designation)
employee.set_address("Marathahalli" , employee.get_address)

</script>
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
<script>
class visitingCardDetails
{
    constructor(name , mail,mobnumber,comname,designation,address)
    {
        this.Name = name
        this.mailid = mail
        this.contactno = mobnumber 
        this.companyname = comname 
        this.designation = designation 
        this.address =  address 
   }
   set_name(name ,callback)
   {
       this.Name = name
       callback(this)
   }
   get_name(p)
   {
       document.write(p.Name)
   }
   
   set_mailid(mailid , callback)
   {
       this.mailid = mailid
       callback(this)
   }
   get_mailid(q)
   {
      document.write(q.mailid)
   }
   set_contactno(contactno , callback)
   {
       this.contactno = contactno
       callback(this)
   }
   get_contactno(r)
   {
       document.write(r.contactno)
   }
   set_companyname(companyname , callback)
   {
       this.companyname = companyname
       callback(this)
   }
   get_companyname(s)
   {
       document.write(s.companyname)
   }
   set_designation(designation , callback)
   {
       this.designation = designation
       callback(this)
   }
   get_designation(t)
   {
       document.write(t.designation)
   }
   set_address(address , callback)
   {
       this.address = address
       callback(this)
   }
   get_address(u)
   {
       document.write(u.address)
   }
}
let employee = new visitingCardDetails("Mahesh", "mahesh@gmail.com" , 9876543210 , "JVT" , "ASE" , "Gachibowli")
employee.set_name("Madhusudan",employee.get_name)
employee.set_mailid("Madhu@intimetec.com" , employee.get_mailid)
employee.set_contactno("9876543210" , employee.get_contactno)
employee.set_designation("ASE" , employee.get_designation)

</script>

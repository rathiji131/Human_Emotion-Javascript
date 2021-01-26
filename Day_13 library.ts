
class Library
{
        BookID: number; 
        Bookname: string; 
        BookAuthor: string ;
        IssueDate: string ; 
        DueDate: string 
        IDNo: string ; 
        Name: string 
        Returnon: string ;
        Fine : number; 
    constructor (BookID: number , Bookname: string ,BookAuthor: string , IssueDate: string , DueDate: string , IDNo: string , Name: string, Returnon: string , Fine : number )
    {
        this.BookID = BookID ; // 12345634
        this.Bookname = Bookname; //C Programming
        this.BookAuthor = BookAuthor ;//Dennis Ritche
        this.IssueDate = IssueDate ; //14/01/2012
        this.DueDate = DueDate //13/02/2012
        this.IDNo =  IDNo; //2008Ec027
        this.Name = Name //Saravanan
        this.Returnon = Returnon ;//25/02/2012
        this.Fine = Fine;
    }

    get_BookID()
    {
        return this.BookID
    }
    set_BookID(BookID : number)
    {
        this.BookID = BookID
    }

    get_Bookname()
    {
        return this.Bookname
    }
    set_Bookname(Bookname : string)
    {
        this.Bookname = Bookname
    }

    get_BookAuthor()
    {
        return this.BookAuthor
    }
    set_BookAuthor(BookAuthor : string)
    {
        this.BookAuthor = BookAuthor
    }

    get_IssueDate()
    {
        return this.IssueDate
    }
    set_IssueDate(IssueDate : string)
    {
        this.IssueDate = IssueDate
    }

    get_DueDate()
    {
        return this.DueDate
    }
    set_DueDate(DueDate : string)
    {
        this.DueDate = DueDate
    }

    get_IDNo()
    {
        return this.IDNo
    }
    set_IDNo(IDNo : string)
    {
        this.IDNo = IDNo
    }

    get_Name()
    {
        return this.Name
    }
    set_Name(Name : string)
    {
        this.Name = Name
    }

    get_Returnon()
    {
        return this.Returnon
    }
    set_Returnon(Returnon : string)
    {
        this.Returnon = Returnon
    }

    get_Fine()
    {
        return this.Fine
    }
    set_Fine(Fine : number)
    {
        this.Fine = Fine
    }
}

let lib_card = new Library(12345634, "C Programming" , "Dennis Ritche" ,"14/01/2012" , "13/02/2012" , "2008Ec027" , "Saravanan" , "25/02/2012" , 12 )

var ret = lib_card.get_BookID()
console.log(ret)
lib_card.set_BookID(2563245)
ret = lib_card.get_BookID()
console.log(ret)

var reter = lib_card.get_Bookname()
console.log(reter)
lib_card.set_Bookname("Let us C")
reter = lib_card.get_Bookname()
console.log(reter)

var reter = lib_card.get_BookAuthor()
console.log(reter)
lib_card.set_BookAuthor("Yeshwant kanetkar")
reter = lib_card.get_BookAuthor()
console.log(reter)

var reter = lib_card.get_IssueDate()
console.log(reter)
lib_card.set_IssueDate("12/12/2012")
reter = lib_card.get_IssueDate()
console.log(reter)

var reter = lib_card.get_DueDate()
console.log(reter)
lib_card.set_DueDate("15/10/2012")
reter = lib_card.get_DueDate()
console.log(reter)

var reter = lib_card.get_IDNo()
console.log(reter)
lib_card.set_IDNo("2013bec042")
reter = lib_card.get_IDNo()
console.log(reter)

var reter = lib_card.get_Name()
console.log(reter)
lib_card.set_Name("Ajay")
reter = lib_card.get_Name()
console.log(reter)

var reter = lib_card.get_Returnon()
console.log(reter)
lib_card.set_Returnon("12/02/2013")
reter = lib_card.get_Returnon()
console.log(reter)

var ret = lib_card.get_Fine()
console.log(ret)
lib_card.set_Fine(50)
ret = lib_card.get_Fine()
console.log(ret)

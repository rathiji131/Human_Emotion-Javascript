//typescript code
function emotion (money : number , funday : string )
{
    console.log('emotion sunday : ' + funday);
    return 0
}

var ret : number = emotion(1000 , "Frineds party");
console.log('return : ' +ret);

class TVSpecification 
{
    Model : string;
    Ledlighting : string;
    Size : number;
    Typeof240Hz : string;
    Wireless : string;
    Usb : string;
    Builtinvedioservices : string;
    Price : number;
    constructor(model : string , ledlighting : string, size : number , typeof240Hz : string , wireless : string, usb :string, builtinvedioservices : string , price : number)
    {   
        this.Model = model
        this.Ledlighting = ledlighting
        this.Size = size
        this.Typeof240Hz = typeof240Hz
        this.Wireless = wireless
        this.Usb = usb
        this.Builtinvedioservices = builtinvedioservices
        this.Price = price
    }
    set_model(tvmodel : string)
    {
        this.Model = tvmodel
    }
    get_model() : string
    {
        return this.Model
    }
    set_Ledlighting(led_lighting : string )
    {
        this.Ledlighting = led_lighting
    }
    get_Ledlighting() : string
    {
        return this.Ledlighting
    }
    set_Size(size : number )
    {
        this.Size = size
    }
    get_Size() : number
    {
        return this.Size
    }
    set_Typeof240Hz(typeof240Hz : string )
    {
        this.Typeof240Hz = typeof240Hz
    }
    get_Typeof240Hz() : string
    {
        return this.Typeof240Hz
    }
    set_Wireless(Wireless : string )
    {
        this.Typeof240Hz = Wireless
    }
    get_Wireless() : string
    {
        return this.Wireless
    }

    set_Usb(Usb : string )
    {
        this.Usb = Usb
    }
    get_Usb() : string
    {
        return this.Usb
    }

    set_Builtinvedioservices(Builtinvedioservices : string )
    {
        this.Builtinvedioservices = Builtinvedioservices
    }
    get_Builtinvedioservices() : string
    {
        return this.Builtinvedioservices
    }
    
    set_Price(price : number )
    {
        this.Price = price
    }
    get_Price() : number
    {
        return this.Price
    }


}
let details = new TVSpecification("LG55LHX" , "Backlight w/Local Dimming" , 55, "scanning Backlight (240 HZ effect)" , "yes" , "USB 2.0" ,  "youtube", 550000)
var output : string = details.get_model()
console.log(output)
details.set_model("ONIDA X!12")
var output : string = details.get_model()
console.log(output)

var output : string = details.get_Ledlighting()
console.log(output)
details.set_Ledlighting("Backlight")
var output : string = details.get_Ledlighting()
console.log(output)

var op : number = details.get_Size()
console.log(output)
details.set_Size(60)
var op : number = details.get_Size()
console.log(output)

var output : string = details.get_Typeof240Hz()
console.log(output)
details.set_Typeof240Hz("scanning Backlight (400 hz)")
var output : string = details.get_Typeof240Hz()
console.log(output)

var output : string = details.get_Wireless()
console.log(output)
details.set_Wireless("wired")
var output : string = details.get_Wireless()
console.log(output)

var output : string = details.get_Usb()
console.log(output)
details.set_Usb("USB 3.0")
var output : string = details.get_Usb()
console.log(output)

var output : string = details.get_Builtinvedioservices()
console.log(output)
details.set_Builtinvedioservices("Amazon prime")
var output : string = details.get_Builtinvedioservices()
console.log(output)

var op : number = details.get_Price()
console.log(output)
details.set_Price(25000)
var op : number = details.get_Price()
console.log(output)
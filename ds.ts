class TVSpecification 
{
    company:object;
    model_array : string[] = ["LG55LHX" , "LG65LHX" , "LG75LHX" , "LG45LHX" , "LG35LHX"];
    ledlighting_array : string[] = ["Backlight" ,"w Dimming" , "/Local Dimming"];
    Size_array : number[] = [55,65,75,45,35];
    typeof240Hz_array : string[] = ["scanning Backlight (240 HZ effect)" , "scanning Backlight (260 HZ effect)" , "scanning Backlight (220 HZ effect)"];
    wireless_array : string[] = ["yes" , "No"];
    Usb_array : string[] = ["USB 2.0", "USB 2.5" , "USB 3.0"];
    builtinvedioservices_array : string[] = ["Youtube","Amazon Prime" , "MX player"];
    price_array : number[] = [55000,65000,75000,45000,35000];
    
    
    constructor(model1 : string , ledlighting1 : string, size1 : number , typeof240Hz1 : string , wireless1 : string, usb1 :string, builtinvedioservices1 : string , price1 : number)
    {  
        this.company = {Model:model1,ledlighting:ledlighting1,Size : size1 ,Typeof240Hz : typeof240Hz1,Wireless : wireless1,Usb : usb1, Builtinvedioservices : builtinvedioservices1,Price : price1}
    }
    display()
    {
        console.log(this.company)
    }
    set_model(tvmodel : string) : any
    {
        for(var i = 0 ; i < this.model_array.length ; i++)
        {
            if(this.company[0] == this.model_array[i])
            {
                this.company[0] = tvmodel
            }
            else
            {
                console.log("Invlaid input! this tv model does not exists")
            }
        }
    }
    get_model() : string
    {
        return this.company[0]
    }
    set_Ledlighting(led_lighting : string )
    {
        for(var i = 0 ; i < this.ledlighting_array.length ; i++)
        {
            if(this.company[1] == this.ledlighting_array[i])
            {
                this.company[1] = led_lighting
            }
            else
            {
                console.log("Invlaid input! this led lighting  does not exists")
            }
        }
        
    }
    get_Ledlighting() : string
    {
        return this.company[1] 
    }
    set_Size(size : number )
    {
        for(var i = 0 ; i < this.Size_array.length ; i++)
        {
            if(this.company[2] == this.Size_array[i])
            {
                this.company[2] = size
            }
            else
            {
                console.log("Invlaid input! this led size tv  does not exists")
            }
        }   
    }
    get_Size() : number
    {
        return this.company[2]
    }
    set_Typeof240Hz(typeof240Hz : string )
    {
        
        for(var i = 0 ; i < this.typeof240Hz_array.length ; i++)
        {
            if(this.company[3] == this.typeof240Hz_array[i])
            {
                this.company[3] = typeof240Hz
            }
            else
            {
                console.log("Invlaid input! this type of frequencttv does not exists")
            }
        }
        
    }
    get_Typeof240Hz() : string
    {
        return this.company[3]
    }
    set_Wireless(Wireless : string )
    {
        for(var i = 0 ; i < this.wireless_array.length ; i++)
        {
            if(this.company[4] == this.wireless_array[i])
            {
                this.company[4] = Wireless
            }
            else
            {
                console.log("Invlaid input! TV can be only of 2 types wired or wireless")
            }
        }
        
    }
    get_Wireless() : string
    {
        return this.company[4]
    }

    set_Usb(Usb : string )
    {
        
        for(var i = 0 ; i < this.Usb_array.length ; i++)
        {
            if(this.company[5] == this.Usb_array[i])
            {
                this.company[5] = Usb
            }
            else
            {
                console.log("Invlaid input! this usb does not exists")
            }
        }
    
    }
    get_Usb() : string
    {
        return this.company[5]
    }

    set_Builtinvedioservices(Builtinvedioservices : string )
    {
        
        for(var i = 0 ; i < this.builtinvedioservices_array.length ; i++)
        {
            if(this.company[6] == this.builtinvedioservices_array[i])
            {
                this.company[6] = Builtinvedioservices
            }
            else
            {
                console.log("Invlaid input! this Builtinvedio services does not exists")
            }
        }
        
    }
    get_Builtinvedioservices() : string
    {
        return this.company[6]
    }
    
    set_Price(price : number )
    {
        
        for(var i = 0 ; i < this.price_array.length ; i++)
        {
            if(this.company[7] == this.price_array[i])
            {
                this.company[7] = price
            }
            else
            {
                console.log("Invlaid input! this prize tv does not exists")
            }
        }
    }
    get_Price() : number
    {
        return this.company[7]
    }
}
let details = new TVSpecification("LG55LHX" , "Backlight" , 55, "scanning Backlight (240 HZ effect)" , "yes" , "USB 2.0" ,  "youtube", 550000)

details.display()

var output : string = details.get_model()
console.log(output)
let ret = details.set_model("ONIDA X!12")
var output : string = details.get_model()
console.log(output)

var output : string = details.get_Ledlighting()
console.log(output)
details.set_Ledlighting("Backlight")
var output : string = details.get_Ledlighting()
console.log(output)

var op : number = details.get_Size()
console.log(op)
details.set_Size(60)
var op : number = details.get_Size()
console.log(op)

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
console.log(op)
details.set_Price(55000)
var op : number = details.get_Price()
console.log(op)
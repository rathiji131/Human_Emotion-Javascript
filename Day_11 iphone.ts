class iphone
{
    OS : string ; //
    Chipset : string ;// string //
    CPU : string ;//
    GPU : string; //
    Model : string; //
    Manufactuer: string; //
    Os : string ;//
    Processor: number; //
    RAMMemory: number; //
    Keyboard: string; //
    onboardstorage: number; //
    Flash : string ;// 
    VideoCallcamera: string; //
    VideoRecording: number ;// 
    NoiceCancelling: string; // 
    Expandablestorage: string; 
    NETWORKTechnology : string; //GSM / CDMA / HSPA / EVDO / LTE
    constructor(OS : string ,Chipset : string, CPU : string, GPU : string,Model : string,Manufactuer: string,Os : string,Processor: number,RAMMemory: number,Keyboard: string,
    onboardstorage: number,Flash : string,VideoCallcamera: string,VideoRecording: number, NoiceCancelling: string, Expandablestorage: string,NETWORKTechnology : string)
    {
        this.OS = OS
        this.Chipset =  Chipset
        this.CPU = CPU
        this.GPU = GPU
        this.Model = Model
        this.Manufactuer = Manufactuer
        this.Os = Os
        this.Processor = Processor
        this.RAMMemory = RAMMemory
        this.Keyboard = Keyboard
        this.onboardstorage =  onboardstorage
        this.Flash  = Flash
        this.VideoCallcamera = VideoCallcamera
        this.VideoRecording = VideoRecording
        this.NoiceCancelling = NoiceCancelling
        this.Expandablestorage = Expandablestorage
        this.NETWORKTechnology = NETWORKTechnology

    }
    get_OS ()
    {
        return this.OS
    }
    set_OS (os : string)
    {
         this.OS = os
    }

    get_Chipset ()
    {
        return this.Chipset
    }
    set_Chipset (Chipset : string)
    {
         this.Chipset = Chipset
    }

    get_CPU()
    {
        return this.CPU
    }
    set_CPU (CPU : string)
    {
         this.CPU = CPU
    }

    get_GPU()
    {
        return this.GPU
    }
    set_GPU (GPU : string)
    {
         this.GPU = GPU
    }

    get_Model()
    {
        return this.Model
    }
    set_Model (Model : string)
    {
         this.Model = Model
    }

    get_Manufactuer()
    {
        return this.Manufactuer
    }
    set_Manufactuer (Manufactuer : string)
    {
         this.Manufactuer = Manufactuer
    }

    get_Os()
    {
        return this.Os
    }
    set_Os (Os : string)
    {
         this.Os = Os
    }

    get_Processor()
    {
        return this.Processor
    }
    set_Processor (Processor : number)
    {
         this.Processor = Processor
    }
    
    get_RAMMemory()
    {
        return this.RAMMemory
    }
    set_RAMMemory (RAMMemory : number)
    {
         this.RAMMemory = RAMMemory
    }

    get_Keyboard()
    {
        return this.Keyboard
    }
    set_Keyboard (Keyboard : string)
    {
         this.Keyboard = Keyboard
    }

    get_onboardstorage()
    {
        return this.onboardstorage
    }
    set_onboardstorage (onboardstorage : number)
    {
         this.onboardstorage = onboardstorage
    }

    get_Flash()
    {
        return this.Flash
    }
    set_Flash (Flash : string)
    {
         this.Flash = Flash
    }
    
    get_VideoCallcamera()
    {
        return this.VideoCallcamera
    }
    set_VideoCallcamera (VideoCallcamera : string)
    {
         this.VideoCallcamera = VideoCallcamera
    }

    get_VideoRecording()
    {
        return this.VideoRecording
    }
    set_VideoRecording (VideoRecording : number)
    {
         this.VideoRecording = VideoRecording
    }

    get_NoiceCancelling()
    {
        return this.NoiceCancelling
    }
    set_NoiceCancelling (NoiceCancelling : string)
    {
         this.NoiceCancelling = NoiceCancelling
    }
    
    get_Expandablestorage()
    {
        return this.Expandablestorage
    }
    set_Expandablestorage (Expandablestorage : string)
    {
         this.Expandablestorage = Expandablestorage
    }

    get_NETWORKTechnology()
    {
        return this.NETWORKTechnology
    }
    set_NETWORKTechnology (NETWORKTechnology : string)
    {
         this.NETWORKTechnology = NETWORKTechnology
    }

}

let iphone_11 = new iphone("S 9, upgradable to iOS 9.2" , "Apple A9" , 
"Dual-core 1.84 GHz Twister" , "PowerVR GT7600 (six-core graphics)" , 
"iphone" , "Apple" , "ios 4.0" , 1 , 512,"Software", 16,"LED" ,
 "VGA" , 720 , "2 microphones" , "No" , "GSM ")

var retur = iphone_11.get_OS()
console.log(retur)
iphone_11.set_OS ( "Blackberry")
retur = iphone_11.get_OS()
console.log(retur)

var retur = iphone_11.get_NETWORKTechnology()
console.log(retur)
iphone_11.set_NETWORKTechnology ( "CDM")
retur = iphone_11.get_NETWORKTechnology()
console.log(retur)

var retur = iphone_11.get_Expandablestorage()
console.log(retur)
iphone_11.set_Expandablestorage ( "Yes")
retur = iphone_11.get_Expandablestorage()
console.log(retur)

var retur = iphone_11.get_NoiceCancelling()
console.log(retur)
iphone_11.set_NoiceCancelling ( "3 microphones")
retur = iphone_11.get_NoiceCancelling()
console.log(retur)

var ret = iphone_11.get_VideoRecording()
console.log(ret)
iphone_11.set_VideoRecording (1040)
ret = iphone_11.get_VideoRecording()
console.log(ret)

var reter = iphone_11.get_VideoCallcamera()
console.log(reter)
iphone_11.set_VideoCallcamera ("VBA")
reter = iphone_11.get_VideoCallcamera()
console.log(reter)

var reter = iphone_11.get_Flash()
console.log(reter)
iphone_11.set_Flash ("Without led")
reter = iphone_11.get_Flash()
console.log(reter)

var ret = iphone_11.get_onboardstorage()
console.log(ret)
iphone_11.set_onboardstorage (32)
ret = iphone_11.get_onboardstorage()
console.log(ret)

var reter = iphone_11.get_Keyboard()
console.log(reter)
iphone_11.set_Keyboard ("Hardware keyboard")
reter = iphone_11.get_Keyboard()
console.log(reter)

var ret = iphone_11.get_RAMMemory()
console.log(ret)
iphone_11.set_RAMMemory (6)
ret = iphone_11.get_RAMMemory()
console.log(ret)

var ret = iphone_11.get_Processor()
console.log(ret)
iphone_11.set_Processor (2)
ret = iphone_11.get_Processor()
console.log(ret)

var reter = iphone_11.get_Os()
console.log(reter)
iphone_11.set_Os ("io 5.0")
reter = iphone_11.get_Os()
console.log(reter)

var reter = iphone_11.get_Manufactuer()
console.log(reter)
iphone_11.set_Manufactuer ("Apple india")
reter = iphone_11.get_Manufactuer()
console.log(reter)

var reter = iphone_11.get_Model()
console.log(reter)
iphone_11.set_Model ("iphone 11")
reter = iphone_11.get_Model()
console.log(reter)

var reter = iphone_11.get_GPU()
console.log(reter)
iphone_11.set_GPU ("PowerVR GT9600 (eight-core graphics)")
reter = iphone_11.get_GPU()
console.log(reter)

var reter = iphone_11.get_CPU()
console.log(reter)
iphone_11.set_CPU ("Dual-core 2.00 GHz Twister")
reter = iphone_11.get_CPU()
console.log(reter)

var reter = iphone_11.get_Chipset()
console.log(reter)
iphone_11.set_Chipset ("Apple A11")
reter = iphone_11.get_Chipset()
console.log(reter)


class PLATFORM extends iphone
{
    OS : string ;//
    Chipset : string ;//
    CPU : string ;//
    GPU : string ;//

    constructor(Os : string , chipset : string , cPU : string , gPU : string)
    {
        super("S 9, upgradable to iOS 9.2" , "Apple A9" , 
        "Dual-core 1.84 GHz Twister" , "PowerVR GT7600 (six-core graphics)" , 
        "iphone" , "Apple" , "ios 4.0" , 1 , 512,"Software", 16,"LED" ,
         "VGA" , 720 , "2 microphones" , "No" , "GSM ")
        this.OS = Os
        this.Chipset = chipset
        this.CPU = cPU
        this.GPU = gPU
    }
    get_OS()
    {
        return this.OS
    }
    set_OS (OS : string)
    {
         this.OS = OS
    }

    get_chipset()
    {
        return this.Chipset
    }
    set_chipset (chipset : string)
    {
         this.Chipset = chipset
    }

    get_CPU()
    {
        return this.CPU
    }
    set_CPU (CPU : string)
    {
         this.CPU = CPU
    }
    
    get_GPU()
    {
        return this.GPU
    }
    set_GPU (GPU : string)
    {
         this.GPU = GPU
    }

}

let plateform = new PLATFORM("iOS 9, upgradable to iOS 9.2" , "Apple A9" ,"Dual-core 1.84 GHz Twister", "PowerVR GT7600 (six-core graphics)")

var reter = plateform.get_OS()
console.log(reter)
plateform.set_OS ("iOS 8, upgradable to iOS 9.0")
reter = plateform.get_OS()
console.log(reter)

var reter = plateform.get_chipset()
console.log(reter)
plateform.set_chipset ("Apple A11")
reter = plateform.get_chipset()
console.log(reter)

var reter = plateform.get_CPU()
console.log(reter)
plateform.set_CPU ("Dual-core 2.00 GHz Twister")
reter = plateform.get_CPU()
console.log(reter)

var reter = plateform.get_GPU()
console.log(reter)
plateform.set_GPU ("PowerVR GT7900 (eight-core graphics)")
reter = plateform.get_GPU()
console.log(reter)

class BATTERY extends iphone
{
    
    removableYN :  string; //
    Standby : number ;//Up to  h (3G)
    Talktime : number; //Up to 14 h (3G)
    Musicplay : number ;//Up to 50 h
    constructor(removableYN :  string , Standby : number , Talktime : number , Musicplay : number )
    {
        super("S 9, upgradable to iOS 9.2" , "Apple A9" , 
        "Dual-core 1.84 GHz Twister" , "PowerVR GT7600 (six-core graphics)" , 
        "iphone" , "Apple" , "ios 4.0" , 1 , 512,"Software", 16,"LED" ,
         "VGA" , 720 , "2 microphones" , "No" , "GSM ")
        this.removableYN =  removableYN
        this.Standby = Standby
        this.Talktime = Talktime
        this.Musicplay = Musicplay
    }
    get_removableYN()
    {
        return this.removableYN
    }
    set_removableYN (removableYN : string)
    {
         this.removableYN = removableYN
    }

    get_Standby()
    {
        return this.Standby
    }
    set_Standby (Standby : number)
    {
         this.Standby = Standby
    }

    get_Talktime()
    {
        return this.Talktime
    }
    set_Talktime (Talktime : number)
    {
         this.Talktime = Talktime
    }

    get_Musicplay()
    {
        return this.Musicplay
    }
    set_Musicplay (Musicplay : number)
    {
         this.Musicplay = Musicplay
    }

}
let standby = new BATTERY("Li-Po 1715 mAh battery (6.9 Wh)" , 240 , 14 , 50 )
var ret = standby.get_Standby()
console.log(ret)
standby.set_Standby (25)
ret = standby.get_Standby()
console.log(ret)

var ret = standby.get_Musicplay()
console.log(ret)
standby.set_Musicplay (20)
ret = standby.get_Musicplay()
console.log(ret)

var ret = standby.get_Talktime()
console.log(ret)
standby.set_Talktime (160)
ret = standby.get_Talktime()
console.log(ret)

var reter = standby.get_removableYN()
console.log(reter)
standby.set_removableYN ("Li-Po 2000 mAh battery (7.0 Wh)")
reter = standby.get_removableYN()
console.log(reter)



class BODY extends iphone
{
    Dimensions : string  ;// (5.44 x 2.64 x 0.28 in)
    Weight : number ;// g (5.04 oz)
    constructor(Dimensions : string,Weight : number)
    {   
        super("S 9, upgradable to iOS 9.2" , "Apple A9" , 
        "Dual-core 1.84 GHz Twister" , "PowerVR GT7600 (six-core graphics)" , 
        "iphone" , "Apple" , "ios 4.0" , 1 , 512,"Software", 16,"LED" ,
         "VGA" , 720 , "2 microphones" , "No" , "GSM ")
        this.Dimensions = Dimensions
        this.Weight = Weight
    }
    get_Dimensions()
    {
        return this.Dimensions
    }
    set_Dimensions (Dimensions : string)
    {
         this.Dimensions = Dimensions
    }

    get_Weight()
    {
        return this.Weight
    }
    set_Weight (Weight : number)
    {
         this.Weight = Weight
    }
}
 let figure = new BODY("138.3 x 67.1 x 7.1 mm" , 143)
var reter = figure.get_Dimensions()
console.log(reter)
figure.set_Dimensions ("138.3 x 67.1 x 7.1 mm")
reter = figure.get_Dimensions()
console.log(reter)

var ret = figure.get_Weight()
console.log(ret)
figure.set_Weight(150)
ret = figure.get_Weight()
console.log(ret)
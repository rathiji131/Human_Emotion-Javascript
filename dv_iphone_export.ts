export class iphone
{
    OS : string | undefined  ; 
    Chipset : string | undefined ;
    CPU : string | undefined ;
    GPU : string | undefined; 
    Model : string | undefined; 
    Manufactuer: string | undefined; 
    Os : string  | undefined;
    Processor: number | undefined; 
    RAMMemory: number | undefined; 
    Keyboard: string | undefined; 
    onboardstorage: number | undefined; 
    Flash : string | undefined ;
    VideoCallcamera: string | undefined; 
    VideoRecording: number | undefined;
    NoiceCancelling: string | undefined; 
    Expandablestorage: string | undefined; 
    NETWORKTechnology : string | undefined; //GSM / CDMA / HSPA / EVDO / LTE
    
    os_array:string[] = [  "Ios 9 upgradable to 9.2", "Ios 8 upgradable to 8.2" , "Ios 7 upgradable to 7.2" ]; 
    chipset_array:string[] = ["Apple A9" , "Apple A8",  "Apple A7"]; 
    cpu_array:string[] = ["Dual core 1.84 hz" , "Quad core 1.90 ",  "snap dragon"]; 
    gpu_array:string[] = ["six core graphics" , "eight core graphics" , "four core graphics"]; 
    model_array:string[] = ["iphone" , "ipad" , "macbook"]; 
    manuf_array:string[] = ["apple"];
    Os_array:string[] = ["ios 9" , "ios 8" , "ios 7"];
    proc_array:number[] = [1  , 2  , 3 ];
    ram_array:number[] = [4 , 6 , 8];
    Keyboard_array:string[] = ["software" , "Hardware"];
    onboardstorage_array:number[] = [64 ,128,256];
    Flash_array:string[] = ["1 LED" , "2 LED" , "3 LED"];
    VideoCallcamera_array:string[] = ["VGA" , "VBA"];
    VideoRecording_array:number[] = [750 , 800 , 850];
    NoiceCancelling_array:string[] = ["1 microphone" , "2 microphone" , "3 microphone"];
    Expandablestorage_array:string[] = ["yes" , "No"];
    
    constructor(OS : string ,Chipset : string, CPU : string, GPU : string,Model : string,Manufactuer: string,Os : string,
        Processor: number,RAMMemory: number,Keyboard: string,onboardstorage: number,Flash : string,VideoCallcamera: string,
        VideoRecording: number, NoiceCancelling: string, Expandablestorage: string,NETWORKTechnology : string)
    {
        for(var i = 0 ; i < this.os_array.length ; i++)
        {   
            if(this.os_array[i] == OS)
            {
                this.OS = OS
                break
            }
            else
            {
                continue
            }
        }

        for(var i = 0 ; i < this.chipset_array.length ; i++)
        {   
            if(this.os_array[i] == Chipset)
            {
                this.Chipset =  Chipset
                break
            }
            else
            {
                continue
            }
        }

        for(var i = 0 ; i < this.cpu_array.length ; i++)
        {   
            if(this.cpu_array[i] == CPU)
            {
                this.CPU = CPU
                break
            }
            else
            {
                continue
            }
        }

        for(var i = 0 ; i < this.gpu_array.length ; i++)
        {   
            if(this.gpu_array[i] == GPU)
            {
                this.GPU = GPU
                break
            }
            else
            {
                continue
            }
        }

        for(var i = 0 ; i < this.model_array.length ; i++)
        {   
            if(this.model_array[i] == Model)
            {
                this.Model = Model
                break
            }
            else
            {
                continue
            }
        }

        for(var i = 0 ; i < this.manuf_array.length ; i++)
        {   
            if(this.manuf_array[i] == Manufactuer)
            {
                this.Manufactuer = Manufactuer
                break
            }
            else
            {
                continue
            }
        }

        for(var i = 0 ; i < this.Os_array.length ; i++)
        {   
            if(this.Os_array[i] == Os)
            {
                this.Os = Os
                break
            }
            else
            {
                continue
            }
        }
        
        for(var i = 0 ; i < this.proc_array.length ; i++)
        {   
            if(this.proc_array[i] == Processor)
            {
                this.Processor = Processor
                break
            }
            else
            {
               continue
            }
        }

        for(var i = 0 ; i < this.ram_array.length ; i++)
        {   
            if(this.ram_array[i] == RAMMemory)
            {
                this.RAMMemory = RAMMemory
                break
            }
            else
            {
                continue
            }
        }
        
        for(var i = 0 ; i < this.Keyboard_array.length ; i++)
        {   
            if(this.Keyboard_array[i] == Keyboard)
            {
                this.Keyboard = Keyboard
                break
            }
            else
            {
                continue
            }
        }

        for(var i = 0 ; i < this.onboardstorage_array.length ; i++)
        {   
            if(this.onboardstorage_array[i] == onboardstorage)
            {
                this.onboardstorage =  onboardstorage
                break
            }
            else
            {
                continue
            }
        }

        for(var i = 0 ; i < this.Flash_array.length ; i++)
        {   
            if(this.Flash_array[i] == Flash)
            {
                this.Flash  = Flash
                break
            }
            else
            {
                continue
            }
        }

        for(var i = 0 ; i < this.VideoCallcamera_array.length ; i++)
        {   
            if(this.VideoCallcamera_array[i] == VideoCallcamera)
            {
                this.VideoCallcamera = VideoCallcamera
                break
            }
            else
            {
                continue
            }
        }

        for(var i = 0 ; i < this.VideoRecording_array.length ; i++)
        {   
            if(this.VideoRecording_array[i] == VideoRecording)
            {
                this.VideoRecording = VideoRecording
                break
            }
            else
            {
                continue
            }
        }
        
        for(var i = 0 ; i < this.NoiceCancelling_array.length ; i++)
        {   
            if(this.NoiceCancelling_array[i] == NoiceCancelling)
            {
                this.NoiceCancelling = NoiceCancelling
                break
            }
            else
            {
                continue
            }
        }
        
        for(var i = 0 ; i < this.Expandablestorage_array.length ; i++)
        {   
            if(this.Expandablestorage_array[i] == Expandablestorage)
            {
                this.Expandablestorage = Expandablestorage
                break
            }
            else
            {
                continue
            }
        }
    }

    get_OS ()
    {
        return this.OS
    }
    set_OS (os : string)
    {
         for(var i = 0 ; i < this.os_array.length ; i++)
        {   
            if(this.os_array[i] == os)
            {
                this.OS = os
                break
            }
            else
            {
                continue
            }
        }
    }

    get_Chipset ()
    {
        return this.Chipset
    }
    set_Chipset (Chipset : string)
    {
        for(var i = 0 ; i < this.chipset_array.length ; i++)
        {   
            if(this.os_array[i] == Chipset)
            {
                this.Chipset =  Chipset
                break
            }
            else
            {
                continue
            }
        }
    }

    get_CPU()
    {
        return this.CPU
    }
    set_CPU (CPU : string)
    {
        for(var i = 0 ; i < this.cpu_array.length ; i++)
        {   
            if(this.cpu_array[i] == CPU)
            {
                this.CPU = CPU
                break
            }
            else
            {
                continue
            }
        }
    }

    get_GPU()
    {
        return this.GPU
    }
    set_GPU (GPU : string)
    {
        for(var i = 0 ; i < this.gpu_array.length ; i++)
        {   
            if(this.gpu_array[i] == GPU)
            {
                this.GPU = GPU
                break
            }
            else
            {
                continue
            }
        }
    }

    get_Model()
    {
        return this.Model
    }
    set_Model (Model : string)
    {
        for(var i = 0 ; i < this.model_array.length ; i++)
        {   
            if(this.model_array[i] == Model)
            {
                this.Model = Model
                break
            }
            else
            {
                continue
            }
        }
    }

    get_Manufactuer()
    {
        return this.Manufactuer
    }
    set_Manufactuer (Manufactuer : string)
    {
        for(var i = 0 ; i < this.manuf_array.length ; i++)
        {   
            if(this.manuf_array[i] == Manufactuer)
            {
                this.Manufactuer = Manufactuer
                break
            }
            else
            {
                continue
            }
        }
    }

    get_Os()
    {
        return this.Os
    }
    set_Os (Os : string)
    {
        for(var i = 0 ; i < this.Os_array.length ; i++)
        {   
            if(this.Os_array[i] == Os)
            {
                this.Os = Os
                break
            }
            else
            {
                continue
            }
        }
    }

    get_Processor()
    {
        return this.Processor
    }
    set_Processor (Processor : number)
    {
         for(var i = 0 ; i < this.proc_array.length ; i++)
        {   
            if(this.proc_array[i] == Processor)
            {
                this.Processor = Processor
                break
            }
            else
            {
               continue
            }
        }
    }
    
    get_RAMMemory()
    {
        return this.RAMMemory
    }
    set_RAMMemory (RAMMemory : number)
    {
        for(var i = 0 ; i < this.ram_array.length ; i++)
        {   
            if(this.ram_array[i] == RAMMemory)
            {
                this.RAMMemory = RAMMemory
                break
            }
            else
            {
                continue
            }
        }
    }

    get_Keyboard()
    {
        return this.Keyboard
    }
    set_Keyboard (Keyboard : string)
    {
        for(var i = 0 ; i < this.Keyboard_array.length ; i++)
        {   
            if(this.Keyboard_array[i] == Keyboard)
            {
                this.Keyboard = Keyboard
                break
            }
            else
            {
                continue
            }
        }
    }

    get_onboardstorage()
    {
        return this.onboardstorage
    }
    set_onboardstorage (onboardstorage : number)
    {
        for(var i = 0 ; i < this.onboardstorage_array.length ; i++)
        {   
            if(this.onboardstorage_array[i] == onboardstorage)
            {
                this.onboardstorage =  onboardstorage
                break
            }
            else
            {
                continue
            }
        }
    }

    get_Flash()
    {
        return this.Flash
    }
    set_Flash (Flash : string)
    {
        for(var i = 0 ; i < this.Flash_array.length ; i++)
        {   
            if(this.Flash_array[i] == Flash)
            {
                this.Flash  = Flash
                break
            }
            else
            {
                continue
            }
        }
    }
    
    get_VideoCallcamera()
    {
        return this.VideoCallcamera
    }
    set_VideoCallcamera (VideoCallcamera : string)
    {
        for(var i = 0 ; i < this.VideoCallcamera_array.length ; i++)
        {   
            if(this.VideoCallcamera_array[i] == VideoCallcamera)
            {
                this.VideoCallcamera = VideoCallcamera
                break
            }
            else
            {
                continue
            }
        }
    }

    get_VideoRecording()
    {
        return this.VideoRecording
    }
    set_VideoRecording (VideoRecording : number)
    {
         for(var i = 0 ; i < this.VideoRecording_array.length ; i++)
        {   
            if(this.VideoRecording_array[i] == VideoRecording)
            {
                this.VideoRecording = VideoRecording
                break
            }
            else
            {
                continue
            }
        }
    }

    get_NoiceCancelling()
    {
        return this.NoiceCancelling
    }
    set_NoiceCancelling (NoiceCancelling : string)
    {
         
         for(var i = 0 ; i < this.NoiceCancelling_array.length ; i++)
        {   
            if(this.NoiceCancelling_array[i] == NoiceCancelling)
            {
                this.NoiceCancelling = NoiceCancelling
                break
            }
            else
            {
                continue
            }
        }
    }
    
    get_Expandablestorage()
    {
        return this.Expandablestorage
    }
    set_Expandablestorage (Expandablestorage : string)
    {
        for(var i = 0 ; i < this.Expandablestorage_array.length ; i++)
        {   
            if(this.Expandablestorage_array[i] == Expandablestorage)
            {
                this.Expandablestorage = Expandablestorage
                break
            }
            else
            {
                continue
            }
        }
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


export class PLATFORM extends iphone
{
    OS : string ;//
    Chipset : string ;//
    CPU : string ;//
    GPU : string ;//

    constructor(Os : string , chipset : string , cPU : string , gPU : string)
    {
        super("S 9, upgradable to 9.2" , "Apple A9" , 
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
        for(var i = 0 ; i < this.Os_array.length ; i++)
        {   
            if(this.Os_array[i] == OS)
            {
                this.OS = OS
                break
            }
            else
            {
                continue
            }
        }
    }

    get_chipset()
    {
        return this.Chipset
    }
    
    set_chipset (chipset : string)
    {
        for(var i = 0 ; i < this.chipset_array.length ; i++)
        {   
            if(this.os_array[i] == chipset)
            {
                this.Chipset = chipset
                break
            }
            else
            {
                continue
            }
        }
    }

    get_CPU()
    {
        return this.CPU
    }
    
   
    set_CPU (CPU : string)
    {
        for(var i = 0 ; i < this.cpu_array.length ; i++)
        {   
            if(this.cpu_array[i] == CPU)
            {
                this.CPU = CPU
                break
            }
            else
            {
                continue
            }
        }
    }
    
    get_GPU()
    {
        return this.GPU
    }
    
    set_GPU (GPU : string)
    {
        for(var i = 0 ; i < this.gpu_array.length ; i++)
        {   
            if(this.gpu_array[i] == GPU)
            {
                this.GPU = GPU
                break
            }
            else
            {
                continue
            }
        }
    }

}


export class BATTERY extends iphone
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

export class BODY extends iphone
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
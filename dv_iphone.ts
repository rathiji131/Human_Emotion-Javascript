import {iphone} from "./dv_iphone_export";

import {BATTERY} from "./dv_iphone_export";

import {BODY} from "./dv_iphone_export";

import {PLATFORM} from "./dv_iphone_export";

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



let plateform = new PLATFORM("iOS 9, upgradable to iOS 9.2" , "Apple A9" ,"Dual-core 1.84 GHz Twister", "PowerVR GT7600 (six-core graphics)")

var reter : string | undefined = plateform.get_OS()
console.log(reter)
plateform.set_OS ("iOS 8, upgradable to iOS 9.0")
reter = plateform.get_OS()
console.log(reter)

var reter : string | undefined= plateform.get_chipset()
console.log(reter)
plateform.set_chipset ("Apple A11")
reter = plateform.get_chipset()
console.log(reter)

var reter : string | undefined= plateform.get_CPU()
console.log(reter)
plateform.set_CPU ("Dual-core 2.00 GHz Twister")
reter = plateform.get_CPU()
console.log(reter)

var reter : string | undefined = plateform.get_GPU()
console.log(reter)
plateform.set_GPU ("PowerVR GT7900 (eight-core graphics)")
reter = plateform.get_GPU()
console.log(reter)


let standby = new BATTERY("Li-Po 1715 mAh battery (6.9 Wh)" , 240 , 14 , 50 )
var ret : number | undefined= standby.get_Standby()
console.log(ret)
standby.set_Standby (25)
ret = standby.get_Standby()
console.log(ret)

var ret : number | undefined= standby.get_Musicplay()
console.log(ret)
standby.set_Musicplay (20)
ret = standby.get_Musicplay()
console.log(ret)

var ret : number | undefined = standby.get_Talktime()
console.log(ret)
standby.set_Talktime (160)
ret = standby.get_Talktime()
console.log(ret)

var reter : string | undefined = standby.get_removableYN()
console.log(reter)
standby.set_removableYN ("Li-Po 2000 mAh battery (7.0 Wh)")
reter = standby.get_removableYN()
console.log(reter)




 let figure = new BODY("138.3 x 67.1 x 7.1 mm" , 143)
var reter : string | undefined = figure.get_Dimensions()
console.log(reter)
figure.set_Dimensions ("138.3 x 67.1 x 7.1 mm")
reter = figure.get_Dimensions()
console.log(reter)

var ret  : number | undefined= figure.get_Weight()
console.log(ret)
figure.set_Weight(150)
ret = figure.get_Weight()
console.log(ret)
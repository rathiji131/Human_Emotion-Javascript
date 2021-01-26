var Patient_report = ( function () {
    function Patient_report(PatientName,PatientID,Patientphone,Billno,Age,DateofBirth,Gender,Fasting,PatientAddress,RoomNo,DateoftimeCollectedblood,Enterdate,DateandTimeRespond)
    {
    this.PatientName =  PatientName
    this.PatientID = PatientID
    this.Patientphone = Patientphone
    this.Billno =Billno
    this.Age = Age
    this.DateofBirth = DateofBirth
    this.Gender  = Gender
    this.Fasting = Fasting
    this.PatientAddress = PatientAddress
    this.RoomNo =RoomNo
    this.DateoftimeCollectedblood = DateoftimeCollectedblood
    this.Enterdate = Enterdate
    this.DateandTimeRespond = DateandTimeRespond
    }
    return Patient_report;
}());

var report = new Patient_report("Sathish", 10567890890 ,  044 222738,56725,"15/05/1991" , "Male" ,"Yes" ,"7f,kaveri road, velur." , 105, "08/09/15 and 08:15","08/09/15" , "08/09/15 and 09:16"  );
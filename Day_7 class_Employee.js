//sample example on setter and getters methode
class Employee
{
    constructor(name)
    {
        this.Name = name
    }
    set employee_name(name)
    {
        this.Name = name
    }
    get employee_name()
    {
        console.log(this.Name)
    }
}
let madhu = new Employee("Rathi")
madhu.employee_name = "Ojasvi"
madhu.employee_name

class Customer_shopping_Information
{
    constructor (brand,product_code,color , size ,material, occasion,pattern,sleeve,necktype,fit,gender)
    {
        this.Brand  = brand  
        this.ProductCode  = product_code  
        this.Color  = color 
        this.Size  = size 
        this.Material = material 
        this.Occasion = occasion 
        this.Pattern = pattern 
        this.Sleeve = sleeve 
        this.NeckType = necktype 
        this.Fit  = fit 
        this.Gender = gender        
    }
    set Cloth_Brand(brand)
    {
        this.Brand = brand
    }
    get Cloth_Brand()
    {
        return this.Brand
    }

    set Cloth_ProductCode(ProductCode)
    {
        this.ProductCode = ProductCode
    }
    get Cloth_ProductCode()
    {
        return this.ProductCode
    }

    set Cloth_Color(Color)
    {
        this.Color = Color
    }
    get Cloth_Color()
    {
        return this.Color
    }
    
    set Cloth_Size(Size)
    {
        this.Size = Size
    }
    get Cloth_Size()
    {
        return this.Size
    }

    set Cloth_Material(Material)
    {
        this.Material = Material
    }
    get Cloth_Material()
    {
        return this.Material
    }

    set Cloth_Occasion(Occasion)
    {
        this.Occasion = Occasion
    }
    get Cloth_Occasion()
    {
        return this.Occasion
    }

    set Cloth_Pattern(Pattern)
    {
        this.Pattern = Pattern
    }
    get Cloth_Pattern()
    {
        return this.Pattern
    }

    set Cloth_Sleeve(Sleeve)
    {
        this.Sleeve = Sleeve
    }
    get Cloth_Sleeve()
    {
        return this.Sleeve
    }

    set Cloth_NeckType(NeckType)
    {
        this.NeckType = NeckType
    }
    get Cloth_NeckType()
    {
        return this.NeckType
    }

    set Cloth_Fit(Fit)
    {
        this.Fit = Fit
    }
    get Cloth_Fit()
    {
        return this.Fit
    }
    
    set Cloth_Gender(Gender)
    {
        this.Gender = Gender
    }
    get Cloth_Gender()
    {
        return this.Gender
    }
}

 class SHIPPINGDETAILS
 {
    constructor(EstimatedArrival,ReturnPolicy,buy)
    {
        this.EstimatedArrival = EstimatedArrival
        this.ReturnPolicy = ReturnPolicy 
        this.Buy = buy 
        this.EffectivePriceaftercashback  = buy * 0.1 
    }

    set Cloth_EstimatedArrival(EstimatedArrival)
    {
        this.EstimatedArrival = EstimatedArrival
    }
    get Cloth_EstimatedArrival()
    {
        return this.EstimatedArrival
    }
    set Cloth_ReturnPolicy(ReturnPolicy)
    {
        this.ReturnPolicy = ReturnPolicy
    }
    get Cloth_ReturnPolicy()
    {
        return this.ReturnPolicy
    }
    set Cloth_Buy(Buy)
    {
        this.Buy = Buy
    }
    get Cloth_Buy()
    {
        return this.Buy
    }    
    get Cloth_EffectivePriceaftercashback()
    {
        return this.EffectivePriceaftercashback
    }

 }

let customer_info = new Customer_shopping_Information("USPA" , "APPSCOTT-INTERNSWIT610835D77A441", " Black" , "S" , "Cotton" , "Casual" , "Solid", "Full Sleeves" , "Hooded" , "Slim", "Men" )
let shipping_info = new SHIPPINGDETAILS("23/12/31","Seller will accept returns within a 15 days from date of delivery of the item", 234, 150)

let ret_value = customer_info.Cloth_Brand
console.log(ret_value)
customer_info.Cloth_Brand = "SPYKER"
ret_value = customer_info.Cloth_Brand
console.log(ret_value)

ret_value = customer_info.Cloth_ProductCode
console.log(ret_value)
customer_info.Cloth_ProductCode = "APPSCOTT-INTERNSWIT610835D77A0000"
ret_value = customer_info.Cloth_ProductCode
console.log(ret_value)

ret_value = customer_info.Cloth_Color
console.log(ret_value)
customer_info.Cloth_Color = "WHITE"
ret_value = customer_info.Cloth_Color
console.log(ret_value)

ret_value = customer_info.Cloth_Size
console.log(ret_value)
customer_info.Cloth_Size = "XL"
ret_value = customer_info.Cloth_Size
console.log(ret_value)

ret_value = customer_info.Cloth_Material
console.log(ret_value)
customer_info.Cloth_Material = "silk"
ret_value = customer_info.Cloth_Material
console.log(ret_value)

ret_value = customer_info.Cloth_Occasion
console.log(ret_value)
customer_info.Cloth_Occasion = "Festival diwali"
ret_value = customer_info.Cloth_Occasion
console.log(ret_value)

ret_value = customer_info.Cloth_Pattern
console.log(ret_value)
customer_info.Cloth_Pattern = "Formal"
ret_value = customer_info.Cloth_Pattern
console.log(ret_value)

ret_value = customer_info.Cloth_Sleeve
console.log(ret_value)
customer_info.Cloth_Sleeve = "FULL"
ret_value = customer_info.Cloth_Sleeve
console.log(ret_value)

ret_value = customer_info.Cloth_NeckType
console.log(ret_value)
customer_info.Cloth_NeckType = "Turtle neck"
ret_value = customer_info.Cloth_NeckType
console.log(ret_value)

ret_value = customer_info.Cloth_Fit
console.log(ret_value)
customer_info.Cloth_Fit = "Slim"
ret_value = customer_info.Cloth_Fit
console.log(ret_value)

ret_value = customer_info.Cloth_Gender
console.log(ret_value)
customer_info.Cloth_Gender = "Unisex"
ret_value = customer_info.Cloth_Gender
console.log(ret_value)

ret_value = shipping_info.Cloth_EstimatedArrival
console.log(ret_value)
shipping_info.Cloth_EstimatedArrival = "30/01/2021"
ret_value = shipping_info.Cloth_EstimatedArrival
console.log(ret_value)

ret_value = shipping_info.Cloth_ReturnPolicy
console.log(ret_value)
shipping_info.Cloth_ReturnPolicy = "You can not replace once you get it"
ret_value = shipping_info.Cloth_ReturnPolicy
console.log(ret_value)

ret_value = shipping_info.Cloth_Buy
console.log(ret_value)
shipping_info.Cloth_Buy = 500
ret_value = shipping_info.Cloth_Buy
console.log(ret_value)

ret_value = shipping_info.Cloth_EffectivePriceaftercashback
console.log(ret_value)

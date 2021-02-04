class Customer_shopping_Information
{
    constructor (brand,product_code,color , size ,material, occasion,pattern,sleeve,necktype,fit,gender)
    {   
        if(typeof brand == String && (brand == "USPA" || brand == "SPYKER" || brand == "LP" || brand == "BIBA"))
        {
            this.Brand  = brand  
        }
        else
        {
            console.log("Brand name is not in string format/thisbrand name  not available")
            return
        }

        if(typeof product_code == String)
        {
            this.ProductCode  = product_code 
        }
        else
        {
            console.log("product code is not in string format")
            return
        }

        if(typeof color == String && (color == "Black" || color == "Red" || color == "Pink" || color == "Gray" ))
        {
            this.Color  = color
        }
        else
        {
            console.log("color is not in string format/color not available")
            return
        }

        if(typeof size == Number && (size == 28 || size == 30 || size == 32 || size == 34 || size == 36 || size == 38 || size == 40 ))
        {
            this.Size  = size 
        }
        else
        {
            console.log("size is not in number format/size is not availabe")
            return
        }

        if(typeof material == string && (material == "silk" || material == "cotton" || material == "linen" || material == "khadi") )
        {
            this.Material = material
        }
        else
        {
            console.log("Material is not in string format/material not availabe ")
            return
        }

        if(typeof occasion == string || occasion == "Diwali" || occasion == "Mariage" || occasion == "Birthday")
        {
            this.Occasion = occasion
        }
        else
        {
            console.log("occasion is not in string format/occasio not found")
            return
        }

        if(typeof pattern == string )
        {
            this.Pattern = pattern
        }
        else
        {
            console.log("pattern is not in string format")
            return
        }

        if(typeof gender == string && (gender == "Male" || gender == "female" || gender == "Transgender"))
        {
            this.Gender = gender
        }
        else
        {
            console.log("gender is not in string format/please enter male / female/transgender")
            return
        }
        if(typeof sleeve == string && ( sleeve == "half" || sleeve == "full" || sleeve == "sleeveless"))
        {
            this.Sleeve = sleeve
        }
        else
        {
            console.log("sleeve is not in string format / sleeve style is not available")
            return
        }
        if(typeof necktype == string && (necktype == "turtle" || necktype == "round" || necktype == "cooller"))
        {
            this.NeckType = necktype
        }
        else
        {
            console.log("necktype is not in string format/not available in this format")
            return
        }
        if(typeof fit == string &&  (fit == "slim" || fit == "regular"))
        {
            this.Fit  = fit 
        }
        else
        {
            console.log("fit is not in string format")
            return
        }
}

    set Cloth_Brand(brand)
    {
        if(typeof brand == String && (brand == "USPA" || brand == "SPYKER" || brand == "LP" || brand == "BIBA"))
        {
            this.Brand  = brand  
        }
        else
        {
            console.log("Brand name is not in string format/thisbrand name  not available")
            return
        }

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
        if(typeof color == String && (color == "Black" || color == "Red" || color == "Pink" || color == "Gray" ))
        {
            this.Color  = Color
        }
        else
        {
            console.log("color is not in string format/color not available")
            return
        }
    }
    get Cloth_Color()
    {
        return this.Color
    }
    
    set Cloth_Size(Size)
    {
        if(typeof size == Number && (size == 28 || size == 30 || size == 32 || size == 34 || size == 36 || size == 38 || size == 40 ))
        {
            this.Size  = Size 
        }
        else
        {
            console.log("size is not in number format/size is not availabe")
            return
        }
        
    }
    get Cloth_Size()
    {
        return this.Size
    }

    set Cloth_Material(Material)
    {
        if(typeof material == String && (material == "silk" || material == "cotton" || material == "linen" || material == "khadi") )
        {
            this.Material = material
        }
        else
        {
            console.log("Material is not in string format/material not availabe ")
            return
        }
        
    }
    get Cloth_Material()
    {
        return this.Material
    }

    set Cloth_Occasion(Occasion)
    {
        if(typeof Occasion == String || Occasion == "Diwali" || Occasion == "Mariage" || Occasion == "Birthday")
        {
            this.Occasion = Occasion
        }
        else
        {
            console.log("occasion is not in string format/occasio not found")
            return
        }
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
        if(typeof sleeve == String && ( sleeve == "half" || sleeve == "full" || sleeve == "sleeveless"))
        {
            this.Sleeve = sleeve
        }
        else
        {
            console.log("sleeve is not in string format / sleeve style is not available")
            return
        }
    }
    get Cloth_Sleeve()
    {
        return this.Sleeve
    }

    set Cloth_NeckType(NeckType)
    {
        if(typeof necktype == String && (necktype == "turtle" || necktype == "round" || necktype == "cooller"))
        {
            this.NeckType = necktype
        }
        else
        {
            console.log("necktype is not in string format/not available in this format")
            return
        }
    }
    get Cloth_NeckType()
    {
        return this.NeckType
    }

    set Cloth_Fit(Fit)
    {
        if(typeof fit == String &&  (fit == "slim" || fit == "regular"))
        {
            this.Fit  = Fit 
        }
        else
        {
            console.log("fit is not in string format")
            return
        }
        
    }
    get Cloth_Fit()
    {
        return this.Fit
    }
    
    set Cloth_Gender(Gender)
    {
        if(typeof gender == String && (gender == "Male" || gender == "female" || gender == "Transgender"))
        {
            this.Gender = gender
        }
        else
        {
            console.log("gender is not in string format/please enter male / female/transgender")
            return
        }
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
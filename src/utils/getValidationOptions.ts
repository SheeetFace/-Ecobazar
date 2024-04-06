

export  const getValidationOptions =(patterValue:RegExp,message:string)=>{

    return{   
        required:"This Field is Required",
        pattern: {
            value: patterValue,
            message: `Please enter a valid ${message}`
        }
    }
}
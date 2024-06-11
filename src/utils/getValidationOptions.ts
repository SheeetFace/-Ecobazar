
export  const getValidationOptions =(patterValue:RegExp,message:string,isRequired = true)=>{

    return{   
        required: isRequired ? "This Field is Required" : false,
        pattern: {
            value: patterValue,
            message: `Please enter a valid ${message}`,
        }
    }
}
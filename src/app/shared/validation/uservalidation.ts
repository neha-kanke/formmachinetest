import { AbstractControl, ValidationErrors } from "@angular/forms";



export class uservalidation{
    static nospace(controls:AbstractControl):ValidationErrors| null{
        let val=controls.value as string
        if(!val){
            return null
        }
        if(val.includes(' ')){
            return{
                spaceerr:'space is not allowed'
            }
        }else{
            return null
        }
    }

}
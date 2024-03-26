import { AbstractControl, ValidationErrors } from "@angular/forms";


export class empidvalition{
    static emidvalitor(empidcontrol:AbstractControl):ValidationErrors|null{
        let val=empidcontrol.value
        if(val){
         let regexpre = /^[A-Z]\d{3}$/
         let isvalid=regexpre.test(val)
         if(isvalid){
            return null
         }else{
            return{
                empiderr:'it should be 1 char and 3 number'
            }
         }
        }else{
            return null
        }
    }
}
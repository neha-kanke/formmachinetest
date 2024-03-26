import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './shared/const/validtion';
import { uservalidation } from './shared/validation/uservalidation';
import { empidvalition } from './shared/validation/empidvalition';
import { countryData } from './shared/const/cityarr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'formmachinetest';
  empform!:FormGroup
   genderarry:Array<string>=['female','male','other']
   countryarr=countryData
   issumit:boolean=false

  ngOnInit(): void {
    this.cretestdofrm(),
    this.currentadresvalidtor(),
    this.isaddressmatch()
    this.f['password'].valueChanges
    .subscribe(res=>{
      if(this.f['password'].valid){
        this.f['confirmpassword'].enable()
      }else{
        this.f['confirmpassword'].disable()
      }
    })

   
  
  }


  currentadresvalidtor(){
    this.f['currentadress'].valueChanges
    .subscribe(res=>{
      if(this.f['currentadress'].valid){
        this.f['confirmAddress'].enable()
      }else{
        this.f['confirmAddress'].disable()
      }
    })
   
  }


  isaddressmatch(){
    this.f['confirmAddress'].valueChanges
    .subscribe(res=>{
      if(res){
        this.f['permentadress'].patchValue(this.f['currentadress'].value)
        this.f['permentadress'].disable()
      }else{
        this.f['permentadress'].reset()
        this.f['permentadress'].enable()
      }
    })
  }

  cretestdofrm(){
    this.empform=new FormGroup({
      username:new FormControl(null,[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern(CustomRegex.username),
        uservalidation.nospace
      ]),
      email:new FormControl(null,[Validators.required,
        Validators.minLength(21),
        Validators.maxLength(30),
        Validators.pattern(CustomRegex.email)
      ]),
      gender:new FormControl('female',[Validators.required]),
      contact:new FormControl(null,[Validators.required,Validators.pattern(CustomRegex.contact)]),
      empid:new FormControl(null,[Validators.required,empidvalition.emidvalitor]),
      currentadress:new FormGroup({
        country:new FormControl(null,[Validators.required]),
        state:new FormControl(null,[Validators.required]),
        city:new FormControl(null,[Validators.required]),
        zipcode:new FormControl(null,[Validators.required]),
      }),
      permentadress:new FormGroup({
        country:new FormControl(null,[Validators.required]),
        state:new FormControl(null,[Validators.required]),
        city:new FormControl(null,[Validators.required]),
        zipcode:new FormControl(null,[Validators.required]),
      }),
      confirmAddress:new FormControl({value:null,disabled:true},[Validators.required]),
      password:new FormControl(null,[Validators.required,Validators.pattern(CustomRegex.pattern1)]),
      confirmpassword:new FormControl({value:null,disabled:true},[Validators.required]),
    })
  }

  get f(){
   return this.empform.controls
  }

  onaddemp(){
   this. issumit=true
   if(this.empform.valid && this.f['password'].value== this.f['confirmpassword'].value){
    let emp=this.empform.value
    console.log(emp);
   }
    
  }
}

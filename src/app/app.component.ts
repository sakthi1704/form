import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppFormService } from './app-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  register: any;
  constructor(private appFormService: AppFormService){

  }
  email = new FormControl('', [Validators.required, Validators.email]);
  angularForm = new FormGroup({
    name :new FormControl("",Validators.required),
    mobile :new FormControl(),
    gender :new FormControl(),
    Qualification :new FormControl()
  });
  qualifications = [
    {value: 'ug', viewValue: 'UG'},
    {value: 'pg', viewValue: 'PG'},
    {value: 'diploma', viewValue: 'Diploma'},
    {value: 'highschool', viewValue: 'High-School'},
  ];
  gender =[
    {value:'M', viewValue: 'Male'},
    {value:'F', viewValue:'Female'}
  ]
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  ngOnInit(): void{
  this.makeRequest();
}

makeRequest(): void {
    this.appFormService.getData()
    .subscribe(value=>{
     this.register=value;


     });
  }
}

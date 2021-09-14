import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})



export class AddUserComponent implements OnInit {

  newUser= new FormControl({name:''})
  // newUserForm = new FormGroup({
  //   name: new FormControl('',Validators.required),
  //   email: new FormControl('',Validators.required),
  //   phoneNumber: new FormControl('',Validators.required),
  //   address: new FormGroup({
  //     city: new FormControl('',Validators.required),
  //     street: new FormControl('',Validators.required),
  //     zip: new FormControl('',Validators.required),
  //   })
  // });

  newUserForm=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    phoneNumber:['',Validators.required],
    address:this.fb.group({
      city:['',Validators.required],
      street:['',Validators.required],
      zip:['',Validators.required],
    })
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  } 

  onSubmit(){
    console.warn(this.newUserForm.value);
    // this.newUserForm.setValue({})

  }

}

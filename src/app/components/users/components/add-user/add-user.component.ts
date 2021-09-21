import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})



export class AddUserComponent implements OnInit {

  // newUser= new FormControl({name:''})
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

  newUserForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    phoneNumber: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
    })
  })

  @Output() onFormGroupChange = new EventEmitter<any>();
  addNewUser(user: any) {
    console.log("New user data", user);
    this.onFormGroupChange.emit(user);
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.newUserForm.value);
    // this.newUserForm.setValue({})

  }
}

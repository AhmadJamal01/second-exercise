import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-landing',
  templateUrl: './users-landing.component.html',
  styleUrls: ['./users-landing.component.scss']
})
export class UsersLandingComponent implements OnInit {

  resultUsers:any;
  formState: boolean=false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
    // console.log(JSON.stringify(this.resultUsers[0]))
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe((users)=>{
      this.resultUsers=users;
      // this.resultUsers.array.forEach((user: { address: string; }) => {
      //   let Address = JSON.stringify(user.address);
      //   user.address=Address;
      //   console.log(Address);
      // });
      // console.log("qweqwe")
    })
  }

  toggleForm(){
    this.formState=!this.formState;
  }

}

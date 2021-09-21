import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-landing',
  templateUrl: './users-landing.component.html',
  styleUrls: ['./users-landing.component.scss']
})
export class UsersLandingComponent implements OnInit {

  resultUsers: any;
  formState: boolean = false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
    // console.log(JSON.stringify(this.resultUsers[0]))
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.resultUsers = users;
      // this.resultUsers.array.forEach((user: { address: string; }) => {
      //   let Address = JSON.stringify(user.address);
      //   user.address=Address;
      //   console.log(Address);
      // });
      // console.log("qweqwe")
    })
  }

  toggleForm() {
    this.formState = !this.formState;
  }

  getUser(id: number): any {
    const user = this.resultUsers.find((u: { id: number; }) => u.id === id)!;
    return user;
  }

  addUser(newUser: any) {
    console.log("This is the user data inside the parent", newUser);
     this.resultUsers.push(newUser);
  }

}

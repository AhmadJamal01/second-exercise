import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-details-bar',
  templateUrl: './details-bar.component.html',
  styleUrls: ['./details-bar.component.scss']
})
export class DetailsBarComponent implements OnInit {

  user:any ={};

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser(Number(this.route.snapshot.paramMap.get('userId')));
  }

  getUser(id:number){
    this.userService.getUser(id).subscribe((user)=>{
      this.user=user;
    })
  }
}

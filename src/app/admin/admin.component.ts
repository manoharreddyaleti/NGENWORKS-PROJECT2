import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userDetails:any=[];
  usersLength:number;
  showUserDetails:boolean=false;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userDetails=this.userService.userDetails;
    console.log(this.userDetails);
    this.usersLength=this.userDetails.length;
    console.log(this.usersLength);
  }
  onNotification(){
this.showUserDetails=!this.showUserDetails;
  }
  acceptReject(value){
      this.userDetails.pop(value,1);
      this.usersLength=this.userDetails.length;
  }
}

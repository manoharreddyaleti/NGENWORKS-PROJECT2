import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }
  userDetails:any=[];
  email:any;
  password:any;
  showAlert:boolean;
  ngOnInit() {
  }
  onClickSubmit(value){
    console.log(value);
    this.userDetails.push(value);
    this.userService.userDetails=this.userDetails;
   this.email='';
   this.password='';
   this.showAlert=true;
  }
}

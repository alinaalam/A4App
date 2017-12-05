import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //name:string = "John Doe";
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts: Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran ...');
  }

  ngOnInit() {
    console.log('ngOnInit ran ......');
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'johndoe@yopmail.com';
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = [
      'Write code',
      'Watch movies',
      'Listen to music'
    ];
    this.hello = 1; //this.hello = 'hello'; //it can be anything

    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  onClick() {
    console.log('HELLO');
    this.name = 'Jane Doe';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    //this.hobbies.push(hobby.value);
    this.hobbies.unshift(hobby.value);
    hobby.value = "";
    return false;
  }

  deleteHobby(index, hobby) {
    console.log(hobby);
    this.hobbies.splice(index, 1);
    // for(let i = 0; i<this.hobbies.length; i++) {
    //   if(this.hobbies[i] == hobby) {
    //     this.hobbies.splice(i, 1);
    //   }
    // }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit; 
  }

}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Post {
  id:number,
  title:string,
  body:string,
  userId:number
}

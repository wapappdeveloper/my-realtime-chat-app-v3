import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class InteractService {
  data: any = {
    username: "",
    email:"",
    userDetail:{
      name:'',
      birthday:'',
      gender:'',
      imagePath:'',
      email:'',
      phone:''
    },
    quickChat: false,
    loginDuplicate: false,
    chatArray: [],
    loginSuccess: false,
    validUser: false,
    onlineUsers: [],
    chatSampleArray: this.getSampleData(),
    profile_page_1:false,
    profile_page_2:false,
    profile_page_3:false,
    profile_page_4:false,
    previousPage:'',
    currentPage:'',
    navPages:[],
    userUID:'',
    loginStorageID:'chatAppLoginCredential'
  }
  

  constructor() { }

  getData() {
    return this.data;
  }

  resetData(){
    this.data.username = "",
    this.data.validUser = false;
  }

  setData(data: any) {
    console.log(data);
    for (var x in data) {
      this.data[x] = data[x];
    }
  }
  /**Communicate between componens */
  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();
  changeData(data:any) {
    this.dataSource.next(data);
  }
  /**Communicate between componens */

  getSampleData() {
    var chatSampleArray: Array<object> = [
      {
        sender: "A",
        msg: "Hi",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "dsfh;a fjahdsuifhaisdf ahsdofiusadf auhdsfipausdfhasdf aidsbfoiuyagsdfsdf",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "lahlsdf ashdfipuhasdf jhaupisdf",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "Hi",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "dsfh;a fjahdsuifhaisdf ahsdofiusadf auhdsfipausdfhasdf aidsbfoiuyagsdfsdf",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "lahlsdf ashdfipuhasdf jhaupisdf",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "Hi",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "dsfh;a fjahdsuifhaisdf ahsdofiusadf auhdsfipausdfhasdf aidsbfoiuyagsdfsdf",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "lahlsdf ashdfipuhasdf jhaupisdf",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "Hi",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "dsfh;a fjahdsuifhaisdf ahsdofiusadf auhdsfipausdfhasdf aidsbfoiuyagsdfsdf",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "lahlsdf ashdfipuhasdf jhaupisdf",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "Hi",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "dsfh;a fjahdsuifhaisdf ahsdofiusadf auhdsfipausdfhasdf aidsbfoiuyagsdfsdf",
        time: "00:00:00"
      },
      {
        sender: "A",
        msg: "lahlsdf ashdfipuhasdf jhaupisdf",
        time: "00:00:00"
      }
    ];
    return chatSampleArray;
  }
}

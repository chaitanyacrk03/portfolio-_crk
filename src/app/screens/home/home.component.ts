import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
data=[]
dataFrag=[]
  ngOnInit(): void {
   this.data= ["Angular.", "SpringBoot.", "Python.", "Java.", "JavaScript."]
   this.data.forEach((ele)=>{
    var letter=ele.split("")
    for(let i of letter){
      this.dataFrag.push(i)
    }
   })
   let val=this.dataFrag;
   
  }
}

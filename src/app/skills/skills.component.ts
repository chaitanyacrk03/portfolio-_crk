import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  length=[];
  constructor() { }

  ngOnInit(): void {
    this.addData()
  }
  addData(){
    this.length.push({img:"../../assets/images/python.png",length:90})
    this.length.push({img:"../../assets/images/angular.png",length:90})
    this.length.push({img:"../../assets/images/java.png",length:75})
    this.length.push({img:"../../assets/images/DSA.png",length:85})
    this.length.push({img:"../../assets/images/spring.png",length:85})
    
  }
}

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
    this.length.push({img:"../../assets/images/pngwing.com.png",length:80})
    this.length.push({img:"../../assets/images/pngwing.com (1).png",length:60})
    this.length.push({img:"../../assets/images/pngwing.com (1).png",length:70})
    
  }
}

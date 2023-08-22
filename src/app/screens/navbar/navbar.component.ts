import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() wheelValue;
  constructor() { }

  ngOnInit(): void {
  }
  toHome(){
    document.getElementById("Home").scrollIntoView({behavior:"smooth"})

  }
  toSkills(){
    document.getElementById("Skills").scrollIntoView({behavior:"smooth"})

  }
  toAchievements(){
    document.getElementById("Achievements").scrollIntoView({behavior:"smooth"})
  }
  toContact(){
    document.getElementById("Contact").scrollIntoView({behavior:"smooth"})
  }

}

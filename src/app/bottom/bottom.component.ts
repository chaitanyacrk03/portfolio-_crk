import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent {
  toHome(){
    document.getElementById("Home").scrollIntoView({behavior:"smooth"})
  }

}

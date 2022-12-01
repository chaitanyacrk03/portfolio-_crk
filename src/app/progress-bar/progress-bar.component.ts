import { Component, OnInit, Input, HostListener } from '@angular/core';
import { EventEmitter } from 'stream';
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  constructor() { }
  @Input() length:number[];
  pbar:any;
  incre:number=0;
  interval:any;
  width;
  flag
  ngOnInit(): void {
    this.pbar=document.querySelectorAll('.skill');
    this.width=`${0}%`;
    for(let i of this.pbar){
      i.style.width=this.width;
    }
    if (this.incre===0){
      let interval=setInterval(()=>{
        if(window.scrollY>=850){
          this.increment()
          clearInterval(interval)
        }
      },20)
    }
  }
  increment(){
    let idx=0
    for(let i of this.pbar){
      this.hover(i,this.length[idx])
      idx++
    }
  }
  hover(pbar,width){
    console.log(width)
    if (pbar.innerText!==`${0}%`){
      return
    }
    this.incre=0
    for(let i=0;i<=width;i++){
      pbar.style.width=`${i}%`
    }
    this.interval=null;
    this.interval=setInterval(()=>{
        if(this.incre<=width){
          this.incre+=1
          pbar.innerText=`${this.incre}%`    
        }
        else{
          clearInterval(this.interval);
        }  
      },300);
  }
}
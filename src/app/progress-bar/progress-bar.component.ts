import { Component, OnInit, Input, HostListener } from '@angular/core';
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
        if(window.scrollY>=750){
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
    if (pbar.innerText!==`${0}%`){
      return
    }
    this.incre=0
    for(let i=0;i<=width;i++){
      pbar.style.width=`${i}%`
      if(this.incre<width){
          this.incre+=1  
      }
    }
    this.interval=null;
    let inc=0
    this.interval=setInterval(()=>{
        if(inc<width){
          inc+=1
          pbar.innerText=`${inc}%`    
        }
        else{
          clearInterval(this.interval);
        }  
      },100);
  }
}
import { Component,OnInit ,ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

loader=true
constructor(){}
  ngOnInit(): void {
   setTimeout(()=>{
    this.loader=false
   },10000)
  }

}

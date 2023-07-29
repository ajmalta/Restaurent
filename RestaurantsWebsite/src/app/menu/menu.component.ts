import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{


  Fooditems=[{img:'../../assets/beefandporatta.jpg',name:'Poratta',price:13},
  {img:'../../assets/biriyani.jpg',name:'Briyani',price:130},
  {img:'../../assets/dhosha.jpg',name:'Dhosha',
  price:13},{img:'../../assets/chikencurry.jpg',name:'Chikken Cuury',price:13},
  {img:'../../assets/kayyappam.jpg',name:'Kayyapam',price:13},
  {img:'../../assets/pups.jpg',name:'Pups',price:13},
  {img:'../../assets/samoosa.jpg',name:'Samoosa',price:13},
  {img:'../../assets/meals.jpg',name:'Meals',price:13},
  {img:'../../assets/fishfry.jpg',name:'Fish Fry',price:13},
  {img:'../../assets/beeffry.jpg',name:'Beef Fry',price:13}]

constructor(){}
ngOnInit(): void {
  
}
}

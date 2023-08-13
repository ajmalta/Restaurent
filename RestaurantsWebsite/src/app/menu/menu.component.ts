import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  Fooditems1 = [
    { img: '../../assets/beefandporatta.jpg', name: 'Poratta', price: 13 },
    { img: '../../assets/biriyani.jpg', name: 'Briyani', price: 130 },
    {
      img: '../../assets/dhosha.jpg', name: 'Dhosha',
      price: 13
    }, 
    { img: '../../assets/chikencurry.jpg', name: 'Chikken Cuury', price: 80 },]
    Fooditems2 = [
    { img: '../../assets/kayyappam.jpg', name: 'Kayyapam', price: 13 },
    { img: '../../assets/pups.jpg', name: 'Pups', price: 20 },
    { img: '../../assets/samoosa.jpg', name: 'Samoosa', price: 13 },
    { img: '../../assets/meals.jpg', name: 'Meals', price: 50 },]
    Fooditems3 = [{ img: '../../assets/fishfry.jpg', name: 'Fish Fry', price: 30 },
    { img: '../../assets/beeffry.jpg', name: 'Beef Fry', price: 120 },
    { img: '../../assets/Burgers.jpg', name: 'Burger', price: 40 },
    //{ img: '../../assets/noodils.jpeg', name: 'Noodils', price: 25 },
    { img: '../../assets/VegThali.jpg', name: 'Veg Thali', price: 120 }]

  constructor() { }
  ngOnInit(): void {

  }
}

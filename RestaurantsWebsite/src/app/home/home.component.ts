import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'RestaurantsWebsite';

  backgroundImageIndex = 0;
  backgroundImages = ['../assets/homepage.jpg','../assets/homelunch.jpg','../assets/homedinner.jpg','../assets/homeimage.jpg'];

  constructor(private renderer: Renderer2){ }

  
  ngOnInit():void {
    setInterval(() => {
      this.changeBackgroundImage();
    }, 2500);
  
  }

 
  changeBackgroundImage() {
    this.backgroundImageIndex = (this.backgroundImageIndex + 1) % this.backgroundImages.length;
  }
}

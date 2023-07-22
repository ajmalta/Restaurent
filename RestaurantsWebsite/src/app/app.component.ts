import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestaurantsWebsite';

  backgroundImageIndex = 0;
  backgroundImages = ['../assets/homepage.jpg','../assets/homelunch.jpg','../assets/homedinner.jpg'];


  
  ngOnInit():void {
    setInterval(() => {
      this.changeBackgroundImage();
    }, 1000);
  
  }

 
  changeBackgroundImage() {
    this.backgroundImageIndex = (this.backgroundImageIndex + 1) % this.backgroundImages.length;
  }


}

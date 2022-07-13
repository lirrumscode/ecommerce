import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.page.html",
  styleUrls: ["./splash.page.scss"],
})
export class SplashPage implements OnInit {
  slideOpts: any;
  dataImagesObj: any;
  darkMode: boolean = true;

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }

  ngOnInit() {
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.slideOpts = {
      initialSlide: 1,
      speed: 400,
      zoom: false,
    };
    this.dataImagesObj = [
      {
        url: "./assets/images/bg.png",
      },
      {
        url: "./assets/images/bg23.png",
      },
    ];
  }
  cambio() {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = !this.darkMode;
    document.body.classList.toggle( 'dark' );
    
  }
}

import { Component, OnInit } from '@angular/core';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

SwiperCore.use([EffectCoverflow, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  apiData: any;
  limit: number = 50;
  customOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    navText: ['&#8249', '&#8250;'],
    items : 1,
  }

  coverflowEffect = {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    // slideShadows : true
  }

  constructor() { 
      this.apiData = [
        {
        albumId:  1,
        id: 1,
        title: "First Slide",
        url: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg",
        thumbnailUrl: "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
       }
    ]

      
    }

  ngOnInit(): void {
    AOS.init();
  }

  iconArrowRight = faArrowCircleRight;

  
}
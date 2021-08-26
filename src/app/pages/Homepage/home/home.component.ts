import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
    loop: true,
    autoplay: true,
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
    slideShadows : true
  }

  constructor() { 
      this.apiData = [
        {
        albumId:  1,
        id: 1,
        title: "First Slide",
        url: "https://3.bp.blogspot.com/-yt9kE769_18/XARByxBYXPI/AAAAAAAAB9M/92AofoXP9ZsR5-ofu71XCjGltl-uFHuwgCHMYCw/s1600/polar-lights-wallpaper-hd-desktop-wallpapers-4k-hd-wallpaper.jpg",
        thumbnailUrl: "https://3.bp.blogspot.com/-yt9kE769_18/XARByxBYXPI/AAAAAAAAB9M/92AofoXP9ZsR5-ofu71XCjGltl-uFHuwgCHMYCw/s1600/polar-lights-wallpaper-hd-desktop-wallpapers-4k-hd-wallpaper.jpg"
       },
       {
        albumId: 2,
        id: 2,
        title: "Second Slide",
        url: "https://images.unsplash.com/photo-1504280539878-538b933c05b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80",
        thumbnailUrl: "https://images.unsplash.com/photo-1504280539878-538b933c05b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"
      }
    ]

      
    }

  ngOnInit(): void {
    AOS.init();
  }


  
}
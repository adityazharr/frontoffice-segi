import { Component, OnInit } from '@angular/core';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Meta } from '@angular/platform-browser';

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
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  constructor(private meta: Meta) {

    this.meta.addTags([
      { name: 'title', content: 'Secangkir Teknologi' },
      { name: 'author', content: 'Secangkir Teknologi' },
      { name: 'keywords', content: 'secangkir teknologi, freelancer, jasa buat website, jasa video editing' },
    ])
  }

  ngOnInit(): void {
    AOS.init();
  }

  iconArrowRight = faArrowCircleRight;


}
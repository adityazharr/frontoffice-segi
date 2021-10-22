import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SupabaseService } from 'src/app/supabase.service';

export interface Products {
  id?: number,
  title?: string,
  description?: string,
  img_product?: string,
  proc_time?: string,
  price?: number,
  rev_opp?: number,
  service_id?: string,
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  products: any;
  slug: any;
  service: any;
  isProduct: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: false,
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
        items: 3
      }
    },
    nav: false,
  }

  constructor(private readonly supabase: SupabaseService, private route: ActivatedRoute) { 
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isProduct = false;
  }

  ngOnInit(): void {
    Aos.init();
    this.getProduct()
  }

  async getProduct () {
    let service = await this.supabase.getServiceBySlug(this.slug)
    let product = await this.supabase.getProduct(service.data.id)
    this.products = product.data
    this.service = service.data
    if(this.products.length > 0){
      this.isProduct = true
    }else{
      this.isProduct = false
    }
  }

  iconPhoneAlt = faPhoneAlt;
  iconHome = faHome;
  iconUser = faUser;
  iconWhatsapp = faWhatsapp;
  iconFacebook = faFacebook;
  iconTwitter = faTwitter;
  iconInstagram = faInstagram;
  iconEnvelope = faEnvelope;
}

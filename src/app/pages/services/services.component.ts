import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import * as Aos from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
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

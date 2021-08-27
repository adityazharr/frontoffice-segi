import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

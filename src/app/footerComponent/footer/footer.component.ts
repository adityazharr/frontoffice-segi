import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faMailBulk, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  iconHome = faHome;
  iconUser = faUser;
  iconWhatsapp = faWhatsapp;
  iconFacebook = faFacebook;
  iconTwitter = faTwitter;
  iconInstagram = faInstagram;
  iconEnvelope = faEnvelope;

}

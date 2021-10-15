import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    var slug = this.route.snapshot.paramMap.get('slug')
    console.log(slug)
  }

}

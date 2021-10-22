import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article.model';
import { SupabaseService } from 'src/app/supabase.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: any;

  constructor(private router: Router, private readonly supabase: SupabaseService) { }

  ngOnInit(): void {
    this.getArticle()
  }

  detailArticle(articleSlug:string) {
    this.router.navigate(['/article', articleSlug])
  }

  async getArticle() {
    let article = await this.supabase.getAllArticle();
    this.articles = article.data
    console.log(this.articles)
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from 'src/app/supabase.service';


@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  slug: any;
  article: any;

  constructor(private route: ActivatedRoute, private readonly supabase: SupabaseService) { 
    this.slug = this.route.snapshot.paramMap.get('slug')
  }

  ngOnInit() {
    this.getDetailArticle()
  }

  async getDetailArticle() {
    let detailArticle = await this.supabase.getDetailArticle(this.slug);
    var dataDetail = {
      title: detailArticle.data.title,
      created_by: detailArticle.data.created_by,
      created_at: detailArticle.data.created_at,
      gambar: detailArticle.data.gambar,
      tag: detailArticle.data.tag,
      isi: atob(detailArticle.data.isi),
    }
    this.article = dataDetail
  }

}

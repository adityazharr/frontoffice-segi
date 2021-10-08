import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[]  = [
    {
      id: 1,
      title: 'Mengenal Laravel dan Javascript lebih dekat!',
      tag: 'Laravel,PHP,Javascript',
      created_by: 'Kelvin Febrian',
      gambar: 'thumbnail.jpeg',
      slug: 'mengenal-laravel-dan-javascript',
      isi: 'Semakin besar aplikasi yang dibuat semakin sulit untuk mengorganisirnya. Ditambah banyak fungsi yang sama ditulis terus berulang-ulang dalam pembuatan website. Laravel membantu web developer untuk itu. Menulis kode yang cantik dan rapi menjadi lebih mudah. Framework ini menyediakan -eloquent- sebagai ORM untuk berinteraksi dengan database. Kamu akan melihat query-query yang sebelumnya panjang untuk ditulis akan menjadi lebih mudah dibaca, apalagi masalah relasi (hubungan antara satu table ke table lain). Fungsi-fungsi lain seperti middleware, melakukan validasi sampai sistem authentikasi semuanya disediakan oleh Laravel. Secara umum, laravel menggunakan struktur MVC (Model - View - Controller) dimana kita akan membagi kodenya menjadi 1. logika aplikasi, 2. model untuk mengatur datanya dan terakhir 3. view untuk mengurus bagian tampilan'
    },
    {
      id: 2,
      title: 'Lebih dekat dengan Augmented Reality',
      tag: 'AugmentedReality,Teknologi,Terbaru',
      created_by: 'Kelvin',
      gambar: 'augmented-reality.jpg',
      slug: 'lebih-dekat-dengan-augmented-reality',
      isi: 'Semakin besar aplikasi yang dibuat semakin sulit untuk mengorganisirnya. Ditambah banyak fungsi yang sama ditulis terus berulang-ulang dalam pembuatan website. Laravel membantu web developer untuk itu. Menulis kode yang cantik dan rapi menjadi lebih mudah. Framework ini menyediakan -eloquent- sebagai ORM untuk berinteraksi dengan database. Kamu akan melihat query-query yang sebelumnya panjang untuk ditulis akan menjadi lebih mudah dibaca, apalagi masalah relasi (hubungan antara satu table ke table lain). Fungsi-fungsi lain seperti middleware, melakukan validasi sampai sistem authentikasi semuanya disediakan oleh Laravel. Secara umum, laravel menggunakan struktur MVC (Model - View - Controller) dimana kita akan membagi kodenya menjadi 1. logika aplikasi, 2. model untuk mengatur datanya dan terakhir 3. view untuk mengurus bagian tampilan'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  detailArticle(articleSlug:string) {
    this.router.navigate(['/article', articleSlug])
  }

  getArticle(slug:string): Article | undefined {
    return this.articles.find(a => a.slug === slug);
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './headerComponent/header/header.component';
import { FooterComponent } from './footerComponent/footer/footer.component';
import { HomeComponent } from './pages/Homepage/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { FaqComponent } from './pages/faq/faq.component';
import { ServicesComponent } from './pages/services/services.component';
import { ArticleComponent } from './pages/article/article.component';
import { DetailArticleComponent } from './pages/article/detail-article.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'services/detail', component: ServicesComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'article/:slug', component: DetailArticleComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FaqComponent,
    ServicesComponent,
    ArticleComponent,
    DetailArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    SwiperModule,
    OwlModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

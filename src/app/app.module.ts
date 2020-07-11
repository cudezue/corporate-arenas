import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrainTeaserComponent } from './pages/brain-teaser/brain-teaser.component';
import { NewsletterComponent } from './component/newsletter/newsletter.component';
import { TrafficUpdateComponent } from './pages/traffic-update/traffic-update.component';
import { TrafficUpdateArticleComponent } from './pages/traffic-update-article/traffic-update-article.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogArticleComponent } from './pages/blog-article/blog-article.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    BrainTeaserComponent,
    NewsletterComponent,
    TrafficUpdateComponent,
    TrafficUpdateArticleComponent,
    BlogComponent,
    BlogArticleComponent,
    VacanciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NewsComponent } from '../news/news.component';
import { DataNews } from '../data.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterLink, FooterComponent, NewsComponent],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss'
})
export class NewsDetailComponent {
  
  protected news : DataNews[] = [
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/news1.jpg?alt=media&token=c2840835-d761-4eaf-9f83-ab9387b39f4f", title : "Drones and AI Ward Off Shark Attacks as Predators Hunt Closer to Shore", content : "Digital product design news, articles, and resources... delivered straight to your inbox...", date : "26/06/2024"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/news2.jpg?alt=media&token=678595c3-25d6-4490-8229-10eb75083ef2", title : "A Human-Centered Approach to Technology & Design", content : "User experience, usability, product design. Follow the UX Bear...", date : "26/5/2024"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/news3.jpg?alt=media&token=e11cf5b9-01ae-445d-8e7d-829d20a3b961", title : "Butterfly effects: the fusion of art, technology, design and the natural world", content : "We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet...", date : "15/04/2024"},
  ]

}

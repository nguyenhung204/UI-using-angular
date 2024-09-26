import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { DataNews } from '../data.interface';
import { NewsDetailComponent } from '../news-detail/news-detail.component';



@Component({
  selector: 'app-news',
  standalone: true,
  imports: [ CommonModule,RouterModule, RouterLink, FooterComponent, NewsDetailComponent ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent{ 
  

  protected news : DataNews[] = [
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/news1.jpg?alt=media&token=c2840835-d761-4eaf-9f83-ab9387b39f4f", title : "Drones and AI Ward Off Shark Attacks as Predators Hunt Closer to Shore", content : "Digital product design news, articles, and resources... delivered straight to your inbox...", date : "26/06/2024"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/news2.jpg?alt=media&token=678595c3-25d6-4490-8229-10eb75083ef2", title : "A Human-Centered Approach to Technology & Design", content : "User experience, usability, product design. Follow the UX Bear...", date : "26/5/2024"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/news3.jpg?alt=media&token=e11cf5b9-01ae-445d-8e7d-829d20a3b961", title : "Butterfly effects: the fusion of art, technology, design and the natural world", content : "We love useful stuff, and we love quality writing, that's why we send out an editorial email newslet...", date : "15/04/2024"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/news4.jpg?alt=media&token=1dc1823e-d98d-485f-b589-7b1676770cb6", title : "UX Writing: A Beginner’s Guide", content : "CSS-Tricks is created, written by, and maintained by Chris Coyier and a team of swell people. The si...", date : "15/08/2024"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/news5.jpg?alt=media&token=4adaa3ef-1663-4a17-8aa4-b409f1df49dd", title : "Google Begins Adopting Calm Technology Design Principles — But Has a Way to Go", content : "A collection of daily UI challenges for your inspiration...", date : "23/02/2024"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/news6.jpg?alt=media&token=c92be509-c456-4580-b913-a4115a954506", title : "Why Are Creative People Called Weird?", content : "Sidebar has been collecting the best design links of the day since October 2012. It's maintained by...", date : "22/02/2024"},
    // {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/news7.jpg?alt=media&token=8dea5e92-2942-4ab3-a16b-77c4734189ee", title : "System Information Technology", content : "System Information Technology our unlimited support services are provided via telephone, remote access, and onsite visits.", date : "14/01/2024"},
    // {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/news8.jpg?alt=media&token=eacc03da-f383-4e85-8921-6bca3e8b76aa", title : "System Banking Is Safety ", content : "Core Banking is now considered the nucleus, the center of the information system in a banking system and many other financial systems.", date : "23/01/2024"},
   
  ]
  


}

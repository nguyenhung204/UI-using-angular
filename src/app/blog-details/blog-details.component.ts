import { Component } from '@angular/core';
import { DataBlogs } from '../data.interface';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, FooterComponent, BlogComponent],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent {
  protected blogs : DataBlogs[] = [
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/blg1.jpg?alt=media&token=4cefe77d-a4d3-4f17-a732-3952a0cc2ce2", tags :"Mental"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/blg2.jpg?alt=media&token=c900f9cd-4de8-46cf-9142-d412e34c3638", tags : "Business"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/blg3.jpg?alt=media&token=71f544be-db58-4b84-8c03-4ed5e1a0ca72", tags : "Mental"},

  ]
}

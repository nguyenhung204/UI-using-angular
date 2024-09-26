import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { DataBlogs } from '../data.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterLink,FooterComponent ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  protected blogs : DataBlogs[] = [
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/blg1.jpg?alt=media&token=4cefe77d-a4d3-4f17-a732-3952a0cc2ce2", tags :"Mental"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/blg2.jpg?alt=media&token=c900f9cd-4de8-46cf-9142-d412e34c3638", tags : "Business"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/blg3.jpg?alt=media&token=71f544be-db58-4b84-8c03-4ed5e1a0ca72", tags : "Mental"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/blg4.jpg?alt=media&token=79035df4-9b7a-4c98-b7a0-1826a0136b6e", tags : "Technology"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/blg5.jpg?alt=media&token=c1c902ef-d376-4f3d-b813-00c75bacbdd7", tags : "Business"},
    {img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/blg6.jpg?alt=media&token=4eb8723b-fe8f-403e-83c8-fbe5560d4d7e", tags : "Technology"},
    
  ]
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { DataTeams } from '../data.interface';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, FooterComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit {
  constructor() {}
  

  protected teams : DataTeams[] = [
    {
      name : "Kathryn Murphy", 
      position : "CEO",
      img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/user1.jpg?alt=media&token=7dea9dd4-9e0a-448e-b45c-287eadacdca9", 
      character : "Critiques and challenges the notion of absolute truth and objective reality, emphasizing the importance of individual perspectives and social constructs.", 
      description : "The CEO plays a crucial role in providing leadership, setting the company's vision and direction, and representing the organization to stakeholders, including employees, investors, and the public. They often possess a combination of business acumen, industry expertise, and strong leadership skills, driving innovation, growth, and organizational success."},
    {
      name : "Darrell Steward", 
      position : "Vice Director", 
      img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/user2.jpg?alt=media&token=dc5ca7fc-e32c-449c-8d00-2935cc8ae97a", 
      character : "A visionary leader who inspires and motivates others to achieve their full potential, driving organizational success and growth",
      description : "The Vice Director supports the CEO in overseeing the company's operations, strategy, and performance, often focusing on specific areas such as finance, marketing, or operations. They play a key role in decision-making, planning, and execution, helping to drive the organization's success and growth."},
    {
      name : "Bessie Cooper", 
      position : "Vice Director", 
      img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/user3.jpg?alt=media&token=ccf191db-83a0-4b6b-b3c5-1b35f799a4e2",
      character : "A strategic thinker and problem-solver who drives innovation and growth, ensuring the company remains competitive and successful in a rapidly changing market.”",
      description : "The Vice Director supports the CEO in overseeing the company's operations, strategy, and performance, often focusing on specific areas such as finance, marketing, or operations. They play a key role in decision-making, planning, and execution, helping to drive the organization's success and growth."},
    {
      name : "Jerome Bell", 
      position : "Account", 
      img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/user4.jpg?alt=media&token=9c00ef99-e505-4cd7-b5b2-dca746220667",
      character : "A detail-oriented and analytical professional who ensures the company's financial health and compliance, providing strategic insights and guidance to support decision-making.",
      description : "The Accountant plays a critical role in managing the company's finances, ensuring accuracy, compliance, and financial health. They provide strategic insights and guidance to support decision-making, helping the organization achieve its financial goals and objectives."
    },
    {
      name : "Esther Howard", 
      position : "Visa Office Manger", 
      img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/user5.jpg?alt=media&token=343d0931-8254-44cf-863d-a121f60baf33",
      character : "A dedicated and organized professional who manages the company's visa office, ensuring efficient and effective operations, compliance, and customer service.",
      description : "The Visa Office Manager oversees the company's visa office, ensuring efficient and effective operations, compliance, and customer service. They play a key role in managing staff, processes, and resources, helping the organization meet its visa-related goals and objectives."
    },
    {
      name : "Cameron Williamson", 
      position : "Tour Manager", 
      img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/user6.jpg?alt=media&token=94b2385f-a127-4a93-aaa6-9f57ac1180d3",
      character : "A creative and customer-focused professional who designs and manages the company's tours, ensuring memorable and enjoyable experiences for customers.",
      description : "The Tour Manager designs and manages the company's tours, ensuring memorable and enjoyable experiences for customers. They play a key role in planning, organizing, and executing tours, providing exceptional customer service and creating lasting memories for travelers."
    },
    // {name : "John Doe", position : "Developer", img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/user7.jpg?alt=media&token=bc7d2aaa-98e5-4ca9-8512-3fda9cfb116f"},
    // {name : "Jacky Johnson", position : "UI/UX Design", img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/user8.jpg?alt=media&token=c0300a53-9d09-427a-80ec-3107eb5fc891"},
  ]
  selectedItem: any;
  ngOnInit(): void {
    this.selectedItem = this.teams[0];
  }
  selectItem(item: any) {
    this.selectedItem = item ;
  }
}

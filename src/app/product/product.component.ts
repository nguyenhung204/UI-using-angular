import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { DataProduct } from '../data.interface';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CommonModule,RouterModule, RouterLink, FooterComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent{
  
  constructor() {}
  protected data : DataProduct[] = [
    { img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/img%20(8).jpg?alt=media&token=a73d5949-ae94-4a05-8213-f1a04e1a3204", title: "COMPANY FORMATION", content: "We aim to simplify and streamline the complex legal and administrative procedures involved in company formation, helping clients navigate the requirements and ensure compliance with relevant regulations." },
    { img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/img.jpg?alt=media&token=23c6237f-0c19-443b-9dcc-7788869cb2b9", title: "GLOBAL IMMIGRATION & VISAS", content: "We assist people who want to travel, work, study, or live in another country by offering comprehensive assistance throughout the immigration and visa application process." },
    { img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/img%20(1).jpg?alt=media&token=b1b8d3da-89b1-4775-8b39-e1bfb430b2a0", title: "TRAVEL AND TICKETS", content: "We provide personalized consultations to assess clients' immigration goals, evaluate eligibility for various immigration programs, and develop a strategic immigration plan." },
    { img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/img%20(2).jpg?alt=media&token=761221d2-e402-4c62-95d7-e41a1a5d78d6", title: "US MARY RUTH & SUPPLEMENTS", content: "We provide various types of dietary supplements to individuals seeking to enhance their overall health and well-being."},
    { img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/img%20(3).jpg?alt=media&token=a85ed4fc-4d71-4a0b-9f4e-58282352fb19", title: "VIRTUAL OFFICE", content: "We offer businesses a range of professional services and support without the need for a physical office space which enhance their credibility, and maintain a presence in a specific location without the costs and commitments associated with a physical office space."},
    { img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/img%20(4).jpg?alt=media&token=4450b483-e3a8-4779-8727-01cb39336dde", title: "LAWFIRM AUDIT & TAX", content: "We conduct comprehensive financial audits of law firms to assess the accuracy and integrity of their financial statements. We also assist law firms in developing tax strategies, optimizing their tax positions."},
    { img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/img(9).jpg?alt=media&token=41530a4e-f606-49d7-9dd5-ff10d4c632b5", title: "WEB DESIGN", content: "We provide professional web design services to help businesses create an online presence that reflects their brand, engages customers, and drives conversions."},
    { img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/i.jpg?alt=media&token=ce454442-aa94-4cb7-9cea-ea6f7044b0d7", title: "COMPANY FORMATION", content: "We aim to simplify and streamline the complex legal and administrative procedures involved in company formation, helping clients navigate the requirements and ensure compliance with relevant regulations." },
    { img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/img%20(5).jpg?alt=media&token=4aa86f0b-3816-429c-afa9-e7019721c90e", title: "DOMAIN SERVICE", content: "We help users search for and register available domain names based on their preferences and the availability of the desired domain extension"},
    { img : "https://firebasestorage.googleapis.com/v0/b/web1-hk2.appspot.com/o/img%20(6).jpg?alt=media&token=5e1d3f5a-9eb8-46ba-9969-c82b430c757a", title: "LOGISTIC", content: "We offer the management and coordination of various activities related to the movement, storage, and handling of goods and resources throughout the supply chain."},
];

  
}

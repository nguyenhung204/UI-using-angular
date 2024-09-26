import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { TeamsComponent } from './teams/teams.component';
import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routeConfig: Routes = [

    {
      path: '',
      component : HomeComponent,
      title: 'Home',
    },
    {
      path: 'about',
      component: AboutUsComponent,
      title: 'About Us',
    },
    {
      path: 'products',
      component: ProductComponent,
      title: 'Our Products',
    },
    {
      path: 'news',
      component: NewsComponent,
      title: 'News',
    },
    {
      path: 'news/details',
      component: NewsDetailComponent,
      title: 'News Detail',
    },
    {
      path: 'teams',
      component : TeamsComponent,
      title: 'Our Teams',
    },
    {
      path : 'contact',
      component : ContactComponent,
      title: 'Contact Us',
    },
    {
      path : 'blogs',
      component : BlogComponent,
      title: 'Blog',
    },
    {
      path : 'blogs/details',
      component : BlogDetailsComponent,
      title: 'Blog Details',
    }
  ];
  export default routeConfig;

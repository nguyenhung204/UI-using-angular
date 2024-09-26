import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import routeConfig from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideHttpClient(),provideRouter(routeConfig), RouterModule, provideAnimationsAsync(), provideAnimationsAsync()],
}).catch((err) => console.error(err));
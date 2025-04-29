import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { ServicesComponent } from './sections/services/services.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutUsComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactUsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'JSB_FE_filteration';
}

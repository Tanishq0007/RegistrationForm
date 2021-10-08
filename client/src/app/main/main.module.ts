import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeTutorialComponent } from './home/home-tutorial/home-tutorial.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { ReachComponent } from './reach/reach.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { UsersModule } from './users/users.module'
// Material imports
import { MatCardModule } from '@angular/material/card';
import { BookingComponent } from './booking/booking.component';
import { HomeFeaturesComponent } from './home/home-features/home-features.component';


import { MainService } from './main.service';
import { HomeTeamComponent } from './home/home-team/home-team.component';
import { SupraComponent } from './supra/supra.component';
import { EfficycleComponent } from './efficycle/efficycle.component';
import { EfficarComponent } from './efficar/efficar.component';
import { InnovacionComponent } from './innovacion/innovacion.component';
import { AacarComponent } from './aacar/aacar.component';
import { UsersComponent } from './users/users.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MatIconModule, MatInputModule, MatOptionModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [HomeComponent, NavbarComponent, RegisterFormComponent, FooterComponent, HomeHeaderComponent, HomeTutorialComponent, HomeAboutComponent, FaqsComponent, PrivacyComponent, TermsComponent, AboutComponent, ReachComponent, ContactComponent, MainComponent, BookingComponent, HomeFeaturesComponent,  HomeTeamComponent, SupraComponent, EfficycleComponent, EfficarComponent, InnovacionComponent, AacarComponent, UsersComponent],
  imports: [
    CommonModule, HttpClientModule, MainRoutingModule, MatCardModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatOptionModule, MatSelectModule, MatProgressSpinnerModule, MatSnackBarModule, FormsModule, ReactiveFormsModule, NgxHmCarouselModule,UsersModule
  ],
  providers: [MainService]
})
export class MainModule { }
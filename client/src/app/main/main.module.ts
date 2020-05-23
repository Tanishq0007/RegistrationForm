import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './Home/home-main/home-main.component';
import { PrizesComponent } from './Home/prizes/prizes.component';
import { HomeAboutComponent } from './Home/home-about/home-about.component';
import { EventsComponent } from './Home/events/events.component';
import { HomeComponent } from './Home/home.component';
import { MainRoutingModule } from './main-routing.module'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatExpansionModule } from '@angular/material/expansion';
import { MainComponent } from './main.component'
import { WorkshopComponent } from './workshop/workshop.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { WorkshopsComponent } from './Home/workshops/workshops.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { UserService } from './auth/user.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeMainComponent,
    HomeAboutComponent,
    PrizesComponent,
    EventsComponent,
    HomeComponent,
    TeamComponent,
    EventsComponent,
    ContactComponent,
    MainComponent,
    WorkshopComponent,
    WorkshopsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule, FlexLayoutModule,
    MainRoutingModule,MatSnackBarModule,MatProgressBarModule, MatMenuModule,FormsModule,MatInputModule,ReactiveFormsModule,MatDatepickerModule,MatNativeDateModule, MatFormFieldModule,MatButtonModule, MatStepperModule, MatButtonToggleModule, MatCardModule, MatExpansionModule, MatToolbarModule, MatIconModule, MatTabsModule, MatSidenavModule, MatTooltipModule
  ],
  providers:[UserService]
})
export class MainModule { } 

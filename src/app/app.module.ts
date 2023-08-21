import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './screens/navbar/navbar.component';
import { HomeComponent } from './screens/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JumpingDirective } from './jumping.directive';
import { SkillsComponent } from './skills/skills.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BottomnavComponent } from './progress-bar/bottomNav/bottomnav/bottomnav.component';
import { ProjectsComponent } from './projects/projects.component';
import { CardComponent } from './projects/card/card.component';
import { BottomComponent } from './bottom/bottom.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { AchievementCardComponent } from './achievements/achievement-card/achievement-card.component';
import { ContactMeComponent } from './forms/contact-me/contact-me.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    JumpingDirective,
    SkillsComponent,
    ProgressBarComponent,
    BottomnavComponent,
    ProjectsComponent,
    CardComponent,
    BottomComponent,
    AchievementsComponent,
    AchievementCardComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

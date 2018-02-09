import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProjectsPage } from '../pages/projects/projects';
import { ProjectPage } from '../pages/project/project';
import { ActivitiesPage } from '../pages/activities/activities';
import { ActivityPage } from '../pages/activity/activity';
import { RecomendationsPage } from '../pages/recomendations/recomendations';
import { RisksPage } from '../pages/risks/risks';
import { RiskPage } from '../pages/risk/risk';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProjectsPage,
    ProjectPage,
    ActivitiesPage,
    ActivityPage,
    RecomendationsPage,
    RisksPage,
    RiskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProjectsPage,
    ProjectPage,
    ActivitiesPage,
    ActivityPage,
    RecomendationsPage,
    RisksPage,
    RiskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AdminPage } from '../pages/admin/admin';
import { ChatPage } from '../pages/chat/chat';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage} from '../pages/login/login';
import { AddeventPage} from '../pages/addevent/addevent';
import { EventsPage} from '../pages/events/events';
import { RegisterPage} from '../pages/register/register';
import{ProfilePage} from '../pages/profile/profile';
import{IonicStorageModule} from '@ionic/storage';
import{HttpClientModule, HttpClient} from '@angular/common/http';
import { ChatComponent } from '../components/chat/chat';
import { PusherProvider } from '../providers/pusher/pusher';
import { EmojiPanelComponent } from '../components/emoji-panel/emoji-panel';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    ChatPage,
    AdminPage,
    RegisterPage,
    EventsPage,
    AddeventPage,
    ProfilePage,
    ChatComponent,
    EmojiPanelComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    AddeventPage,
    EventsPage,
    AdminPage,
    RegisterPage,
    ProfilePage,
    ChatPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    PusherProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PusherProvider
  ]
})
export class AppModule {}

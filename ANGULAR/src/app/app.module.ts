import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { VoitureComponent } from './component/voiture/voiture.component';
// import { FiltreTachePipe } from './pipe/filtre-tache.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop' ;
import { SignInComponent } from './component/sign-in/sign-in.component';
import { IndexComponent } from './component/Index/index.component';
import { VoitureModifComponent } from './component/VoitureModif/voitureModif.component';
import { AProposComponent } from './component/APropos/APropose.component';
import { ContactComponent } from './component/Contact/contact.component';
import {MessageComponent } from './component/message/message.component';



@NgModule({
  declarations: [
    AppComponent,
    VoitureModifComponent,
    ContactComponent,
    AProposComponent,
    LoginComponent,
    VoitureComponent,
    // FiltreTachePipe,
    IndexComponent,
    MessageComponent,
    SignInComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
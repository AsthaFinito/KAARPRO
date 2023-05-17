import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { VoitureComponent } from './component/voiture/voiture.component';
import { IsSignedInGuard } from './is-signed-in-guard';
import { IndexComponent } from './component/Index/index.component';
import { VoitureModifComponent } from './component/VoitureModif/voitureModif.component';
import { AProposComponent } from './component/APropos/APropose.component';
import { ContactComponent } from './component/Contact/contact.component';
import { MessageComponent } from './component/message/message.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'reprogrammation',
    component: VoitureComponent,
   

  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'voitureModif',
    component:VoitureModifComponent
  },
  {
    path:'APropos',
    component:AProposComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'message',
    component:MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
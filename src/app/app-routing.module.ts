import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: "", component: UserProfileComponent},
  {path:"settings", component: SettingsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

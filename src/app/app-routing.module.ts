import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VideoPageComponent } from './video-page/video-page.component';

const routes: Routes = [
  {path: "", component: UserProfileComponent},
  {path: "profile", component: UserProfileComponent},
  {path:"settings", component: SettingsPageComponent},
  {path:"videos", component: VideoPageComponent},
  {path:"groups", component: GroupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

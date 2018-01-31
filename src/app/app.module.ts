import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoatListComponent } from './boat-list/boat-list.component';
import { BoatService } from './_services/boat.service';
import { UserService } from './_services/user.service';
import { MemberService } from './_services/member.service';
import { BoatUpdateComponent } from './boat-update/boat-update.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { BoatCheckinComponent } from './boat-checkin/boat-checkin.component';
import { BoatCheckoutDialogComponent } from './boat-checkout-dialog/boat-checkout-dialog.component';


const appRoutes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'boat-list', component: BoatListComponent },
  { path: 'boat-update/:id', component: BoatUpdateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    DashboardComponent,
    BoatListComponent,
    BoatUpdateComponent,
    BoatCheckinComponent,
    BoatCheckoutDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModuleModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [BoatService, UserService, MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }

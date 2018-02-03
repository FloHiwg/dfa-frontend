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
import { LogService } from './_services/log.service';
import { TitleService } from './_helper/title.service';
import { BoatUpdateComponent } from './boat-update/boat-update.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { BoatCheckinComponent } from './boat-checkin/boat-checkin.component';
import { BoatCheckoutDialogComponent } from './boat-checkout-dialog/boat-checkout-dialog.component';
import { BoatCheckinDialogComponent } from './boat-checkin-dialog/boat-checkin-dialog.component';
import { MemberListComponent } from './member-list/member-list.component';
import { LogListComponent } from './log-list/log-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: 'boat-list', component: BoatListComponent, data: { title: 'Bootsliste' } },
  { path: 'member-list', component: MemberListComponent, data: { title: 'Mitgliederliste' } },
  { path: 'log-list', component: LogListComponent, data: { title: 'Einträgerliste' } },
  { path: 'boat-update/:id', component: BoatUpdateComponent, data: { title: 'Boote Bearbeiten' } },
  { path: 'boat-checkout-dialog/:boatId', component: BoatCheckoutDialogComponent, data: { title: 'Fahrt Erstellen' } },
  { path: 'boat-checkin-dialog/:logId', component: BoatCheckinDialogComponent, data: { title: 'Fahrt Beenden' } },
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
    BoatCheckinDialogComponent,
    MemberListComponent,
    LogListComponent,
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
  providers: [BoatService, UserService, MemberService, LogService, TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

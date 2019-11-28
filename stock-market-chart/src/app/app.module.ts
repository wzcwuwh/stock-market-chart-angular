import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSigninComponent } from './components/user/user-signin/user-signin.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { UserSignupPwdComponent } from './components/user/user-signup/user-signup-pwd/user-signup-pwd.component';
import { UserVeriCodeComponent } from './components/user/user-signup/user-veri-code/user-veri-code.component';
import { UserResetPwdComponent } from './components/user/user-reset-pwd/user-reset-pwd.component';
import { UserForgetPwdComponent } from './components/user/user-forget-pwd/user-forget-pwd.component';
import {EncryptService} from './services/encrypt.service'
import {EmailValidationService} from './services/email-validation.service';
import { UserLandingPageComponent } from './components/user/user-landing-page/user-landing-page.component';
import { UserComparisonChartsComponent } from './components/user/user-comparison-charts/user-comparison-charts.component';
import { AdminLandingPageComponent } from './components/admin/admin-landing-page/admin-landing-page.component';
import { AdminImportExcelComponent } from './components/admin/admin-import-excel/admin-import-excel.component';
import { AdminUploadSummaryComponent } from './components/admin/admin-upload-summary/admin-upload-summary.component';
import { AdminCompanyListComponent } from './components/admin/admin-company-list/admin-company-list.component';
import { AdminCompanyCreateComponent } from './components/admin/admin-company-create/admin-company-create.component';
import { AdminStockExchangeListComponent } from './components/admin/admin-stock-exchange-list/admin-stock-exchange-list.component';
import { AdminStockExchangeCreateComponent } from './components/admin/admin-stock-exchange-create/admin-stock-exchange-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSigninComponent,
    UserSignupComponent,
    UserSignupPwdComponent,
    UserVeriCodeComponent,
    UserResetPwdComponent,
    UserForgetPwdComponent,
    UserLandingPageComponent,
    UserComparisonChartsComponent,
    AdminLandingPageComponent,
    AdminImportExcelComponent,
    AdminUploadSummaryComponent,
    AdminCompanyListComponent,
    AdminCompanyCreateComponent,
    AdminStockExchangeListComponent,
    AdminStockExchangeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EncryptService, EmailValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

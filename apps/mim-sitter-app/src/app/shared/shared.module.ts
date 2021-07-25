import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}

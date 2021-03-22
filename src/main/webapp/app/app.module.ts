import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSample20210322SharedModule } from 'app/shared/shared.module';
import { JhipsterSample20210322CoreModule } from 'app/core/core.module';
import { JhipsterSample20210322AppRoutingModule } from './app-routing.module';
import { JhipsterSample20210322HomeModule } from './home/home.module';
import { JhipsterSample20210322EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSample20210322SharedModule,
    JhipsterSample20210322CoreModule,
    JhipsterSample20210322HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSample20210322EntityModule,
    JhipsterSample20210322AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterSample20210322AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSample20210322SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipsterSample20210322SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class JhipsterSample20210322HomeModule {}

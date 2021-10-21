import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRoutes } from '@core/core.routes';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, CoreRoutes],
  bootstrap: [AppComponent],
})
export class AppModule {}

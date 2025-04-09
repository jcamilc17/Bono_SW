import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { FormComponent } from './form/form.component';
import { NavigationBar } from './navigationbar/navigationbar';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavigationbarComponent,
      ProgressbarComponent,
      FormComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

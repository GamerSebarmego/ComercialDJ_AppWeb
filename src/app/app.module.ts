import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { BarranavigationComponent } from './barranavigation/barranavigation.component';
import { FormproveedoresComponent } from './proveedores/formproveedores.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';

const routes:Routes =[
  { path:'', redirectTo:'/inicio', pathMatch:'full'},
  { path:'inicio', component:HomeadminComponent},
  { path:'proveedores', component:ProveedoresComponent},
  { path:'proveedores/form', component:FormproveedoresComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    FormproveedoresComponent,
    BarranavigationComponent,
    HomeadminComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
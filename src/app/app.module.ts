import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieComponent } from './movie/movie.component';
import { Routes , RouterModule } from '@angular/router';
import { MovieService } from './movie/movie.service';
import { MovieAppMaterialModule } from './movie-app-material.module';
const routes: Routes = [

  { path: 'movie/:movieName',  component: MovieComponent }];


@NgModule({
 declarations: [
   AppComponent,
   AppNavigationComponent,
   SearchBarComponent,
   MovieComponent
   ],
 imports: [
   BrowserModule,
   FormsModule,
   HttpModule,
   BrowserAnimationsModule,
   MdButtonModule,
   MdMenuModule,
   MdCardModule,
   MdToolbarModule,
   MdIconModule,
   MdInputModule,
   MaterialModule, MovieAppMaterialModule,
   RouterModule.forRoot(routes)
 ],
 exports: [
   BrowserAnimationsModule,
   MdButtonModule,
   MdMenuModule,
   MdCardModule,
   MdToolbarModule,
   MdIconModule,
   MdInputModule,
   RouterModule
],
 providers: [ MovieService ],
 bootstrap: [AppComponent]
})
export class AppModule { }

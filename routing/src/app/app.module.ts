import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post.component';
import { DetailsComponent } from './details.component';
import { SearchPipe } from './search.pipe';
import { CheckGuard } from './check.guard';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    DetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : '', component: PostsComponent },
      { path : 'details', component: DetailsComponent,canActivate:[CheckGuard]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

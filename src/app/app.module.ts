import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseModule } from './firebase/firebase.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './components/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { PostComponent } from './components/posts/post/post.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { AllPostsComponent } from './components/posts/all-posts/all-posts.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { CommentInfoComponent } from './components/comments/comment-info/comment-info.component';
import { CommentCreateComponent } from './components/comments/comment-create/comment-create.component';
import { FormsModule } from '@angular/forms';
import { PostCreateComponent } from './components/posts/post-create/post-create.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { AboutComponent } from './components/about/about.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { AboutCardListComponent } from './components/about-card-list/about-card-list.component';
import { AboutPersonComponent } from './components/about-person/about-person.component';
import { AuthService } from './core/services/auth.service';
import { PostService } from './core/services/post.service';
import { ToastrModule } from 'ngx-toastr';
import { CommentService } from './core/services/comment.service';
import { CommentListComponent } from './components/comments/comment-list/comment-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PostComponent,
        PostListComponent,
        AllPostsComponent,
        PostDetailComponent,
        CommentInfoComponent,
        CommentCreateComponent,
        PostCreateComponent,
        LoginComponent,
        RegisterComponent,
        AboutComponent,
        AboutCardComponent,
        AboutCardListComponent,
        AboutPersonComponent,
        CommentListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FirebaseModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        CoreModule,
        SharedModule,
        MatCarouselModule.forRoot(),
        FormsModule,
        ValidateEqualModule,
        ToastrModule.forRoot(),
    ],
    providers: [AuthService, PostService, CommentService],
    bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPersonComponent } from './components/about-person/about-person.component';
import { AboutComponent } from './components/about/about.component';
import { CommentCreateComponent } from './components/comments/comment-create/comment-create.component';
import { HomeComponent } from './components/home/home.component';
import { AllPostsComponent } from './components/posts/all-posts/all-posts.component';
import { PostCreateComponent } from './components/posts/post-create/post-create.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'about/person/:id',
        component: AboutPersonComponent,
    },
    {
        path: 'posts',
        component: AllPostsComponent,
    },
    {
        path: 'posts/create',
        component: PostCreateComponent,
    },
    {
        path: 'posts/details/:id',
        component: PostDetailComponent,
    },
    {
        path: 'comments/create/:id',
        component: CommentCreateComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

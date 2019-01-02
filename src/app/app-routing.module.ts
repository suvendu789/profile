import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './navbar/about-me/about-me.component';
import { CssProjComponent } from './projects/css-proj/css-proj.component';
import { SampleComponent } from './projects/css-proj/sample/sample.component';
import { ScssProjComponent } from './projects/scss-proj/scss-proj.component';
import { ScssSampleComponent } from './projects/scss-proj/scss-sample/scss-sample.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {
    path: 'projects/css_project',
    component: CssProjComponent,
    // children: [
    //   { path: 'sample', component: SampleComponent}
    // ]
  },
  {path: 'projects/css_project/sample', component: SampleComponent},
  {path: 'projects/sass_project', component: ScssProjComponent},
  {path: 'projects/sass_project/sample', component: ScssSampleComponent},
  {path: 'aboutme', component: AboutMeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProjectsComponent,
                                  HomeComponent,
                                  ProjectsComponent,
                                  PageNotFoundComponent,
                                  CssProjComponent,
                                  SampleComponent,
                                  AboutMeComponent
                                  ]
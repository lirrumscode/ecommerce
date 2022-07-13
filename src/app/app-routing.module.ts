import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "splash",
    pathMatch: "full",
  },
  {
    path: "splash",
    loadChildren: () =>
      import("./views/splash/splash.module").then((m) => m.SplashPageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./views/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./modules/about/about.module").then((m) => m.AboutPageModule),
  },
  {
    path: 'videos',
    loadChildren: () => import('./modules/videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'finish',
    loadChildren: () => import('./modules/recipes/finish/finish.module').then( m => m.FinishPageModule)
  },
  {
    path: 'menu/all/:id',
    loadChildren: () => import('./modules/recipes/menu/all/all.module').then( m => m.AllPageModule)
  },
  {
    path: 'wines/all',
    loadChildren: () => import('./modules/wines/all/all.module').then( m => m.AllPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

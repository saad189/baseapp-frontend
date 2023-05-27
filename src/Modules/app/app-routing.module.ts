import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MODULE_ADDRESS } from 'src/Models/module-info';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  {
    path: "", redirectTo: `/${MODULE_ADDRESS.HOME}`, pathMatch: "full"
  },
  {
    path: MODULE_ADDRESS.HOME, component: MainComponent
  },
  { path: MODULE_ADDRESS.PORTFOLIO, loadChildren: () => import('../portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: MODULE_ADDRESS.SETTINGS, loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
  { path: MODULE_ADDRESS.ABOUT_US, loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: MODULE_ADDRESS.CONTACT, loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule) },
  { path: MODULE_ADDRESS.PRODUCTS, loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },
  { path: MODULE_ADDRESS.EXPERTISE, loadChildren: () => import('../expertise/expertise.module').then(m => m.ExpertiseModule) },
  { path: "**", redirectTo: `/${MODULE_ADDRESS.HOME}` },];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

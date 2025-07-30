import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { SalesComponent } from './sales/sales.component';
import { KidsComponent } from "./kids/kids.component";
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'men',
    component: MenComponent,
    title: 'Men'
  },
    {
    path: 'kids',
    component: KidsComponent,
    title: 'Kids'
  },
    {
    path: 'sales',
    component: SalesComponent,
    title: 'Sales'
  },
   {
    path: 'women',
    component: WomenComponent,
    title: 'Women'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
];

export default routeConfig;
export const routes: Routes = [];

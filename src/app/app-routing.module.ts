import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  // otherwise redirect to homePage
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);

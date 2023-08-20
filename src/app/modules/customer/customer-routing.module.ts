import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './page/customer/customer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cliente',
    pathMatch: 'full',
    data: { title: 'Cliente' },
  },
  {
    path: '',
    children: [
      /*{
          path: 'dashboard',
          component: DashboardComponent,
          data: { title: '' },
        },
        {
          path: 'domains',
          loadChildren: () =>
            import('../domains/domains.module').then((m) => m.DomainsModule),
          data: { title: 'Domínios' },
        },
        {
          path: 'signatures',
          loadChildren: () =>
            import('../signatures/signatures.module').then(
                  (m) => m.SignaturesModule
              ),
              data: { title: 'Assinaturas' },
          }*/
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}

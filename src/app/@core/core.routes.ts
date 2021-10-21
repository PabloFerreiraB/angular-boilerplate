import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '@core/utils/router.utils';
import { NotFoundModule } from 'src/app/@shared/ui/not-found/not-found.module';
import { FooterModule } from '../@shared/ui/footer/footer.module';
import { HeaderModule } from '../@shared/ui/header/header.module';
import { LayoutModule } from '../@shared/ui/layout/layout.module';
import { NotFoundPage } from '../@shared/ui/not-found/not-found.page';


const APP_ROUTES: Routes = [
  {
    path: ROUTER_UTILS.config.base.home,
    loadChildren: async () => (await import('@pages/home/home.module')).HomeModule,
  },
  {
    path: '**',
    loadChildren: async () => (await import('src/app/@shared/ui/not-found/not-found.module')).NotFoundModule,
    component: NotFoundPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
    FooterModule,
    HeaderModule,
    LayoutModule,
    NotFoundModule,
  ],
  exports: [
    RouterModule,
    FooterModule,
    HeaderModule,
    LayoutModule,
    NotFoundModule,
  ],
})

export class CoreRoutes {}

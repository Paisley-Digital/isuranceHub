import { Route } from '@angular/router';
import { ClientBridgeFeatureProductsComponent } from './clientBridge-feature-products.component';
import { InsuranceDetailsComponent } from './insurance-details.component';

export const productsRoutes: Route[] = [
  { path: '', component: ClientBridgeFeatureProductsComponent },
  { path: 'details', component: InsuranceDetailsComponent },
];

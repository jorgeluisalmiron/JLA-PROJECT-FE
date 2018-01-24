import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormCustomerComponent } from './form-customer/form-customer.component';
import { FormSupplierComponent } from './form-supplier/form-supplier.component';
import { FormInventoryTransactionComponent } from './form-inventory-transaction/form-inventory-transaction.component';
import { FormListInventoryTransactionsComponent } from './form-list-inventory-transactions/form-list-inventory-transactions.component';
import { AppletProductComponent } from './product/applet-product/applet-product.component';


const routes: Routes = [
  { path: 'products', component: AppletProductComponent },
  { path: 'customers', component: FormCustomerComponent },
  { path: 'suppliers', component: FormSupplierComponent },
  { path: 'inventoryTransactions', component: FormInventoryTransactionComponent },
  { path: 'listOfInventoryTransactions', component: FormListInventoryTransactionsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

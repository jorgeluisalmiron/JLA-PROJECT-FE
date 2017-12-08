import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FormCustomerComponent } from './form-customer/form-customer.component';
import { FormSupplierComponent } from './form-supplier/form-supplier.component';
import { FormInventoryTransactionComponent } from './form-inventory-transaction/form-inventory-transaction.component';
import { FormListInventoryTransactionsComponent } from './form-list-inventory-transactions/form-list-inventory-transactions.component';


const appRoutes: Routes = [
  { path: 'products', component: FormProductComponent },
  { path: 'customers', component: FormCustomerComponent },
  { path: 'suppliers', component: FormSupplierComponent },
  { path: 'inventoryTransactions', component: FormInventoryTransactionComponent },
  { path: 'listOfInventoryTransactions', component: FormListInventoryTransactionsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }

];
@NgModule({
  declarations: [
    AppComponent,
    FormProductComponent,
    FormCustomerComponent,
    FormSupplierComponent,
    FormInventoryTransactionComponent,
    FormListInventoryTransactionsComponent],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

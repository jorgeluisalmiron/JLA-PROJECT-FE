import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormCustomerComponent } from './form-customer/form-customer.component';
import { FormSupplierComponent } from './form-supplier/form-supplier.component';
import { FormInventoryTransactionComponent } from './form-inventory-transaction/form-inventory-transaction.component';
import { FormListInventoryTransactionsComponent } from './form-list-inventory-transactions/form-list-inventory-transactions.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { MessageService } from './services/message.service';
import { ProductService } from './services/product.service';
import { AppletProductComponent } from './product/applet-product/applet-product.component';




@NgModule({
  declarations: [
    AppComponent,
    FormCustomerComponent,
    FormSupplierComponent,
    FormInventoryTransactionComponent,
    FormListInventoryTransactionsComponent,
    MessagesComponent,
    AppletProductComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [MessageService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

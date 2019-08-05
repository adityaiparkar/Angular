import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { BatchdetailComponent } from './batchdetail/batchdetail.component';
import { ABCService } from './abc.service';

@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    BatchdetailComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [ABCService],
  bootstrap: [AppComponent]
})
export class AppModule { }

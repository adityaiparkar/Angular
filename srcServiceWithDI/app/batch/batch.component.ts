import { Component, OnInit } from '@angular/core';
import { ABCService } from '../abc.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  public arr=[];
  constructor(private abcservice:ABCService) { }

  ngOnInit() {
    this.arr=this.abcservice.getbatchdetail();
  }

}

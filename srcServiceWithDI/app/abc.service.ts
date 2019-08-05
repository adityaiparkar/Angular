import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ABCService {

  constructor() 
  { 

  }

  getbatchdetail()
  {
      return [{"Name":"PPA","Fees":"5000"},
      {"Name":"Angular","Fees":"7000"},
      {"Name":"LB","Fees":"4000"}];
  }
}

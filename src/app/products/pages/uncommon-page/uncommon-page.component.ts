import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'shared-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export class UncommonPageComponent {

  //i18nSelect Pipe
  public gender: 'male' | 'female' = 'male';
  public i18nSelectEstMap = {
    'male': 'Estimado',
    'female': 'Estimada',
  }
  public i18nSelectInvitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }
  public changeGenderFlag: boolean = false;

  changeGender(): void {
    if( this.changeGenderFlag ){
      this.gender = 'female';
      this.changeGenderFlag = false;
    }else{
      this.gender = 'male',
      this.changeGenderFlag = true;
    }
  }

  //i18nPlural Pipe
  public clients: string[] = [ 'Maria', 'Pedro', 'Fernando', 'Ricardo', 'Will', 'Gabriel' ]
  public clientsMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente',
    'other': 'Tenemos # clientes',
  }

  deleteClient(): void{
    this.clients.shift();
  }

  //keyValue Pipe
  public person = {
    name: 'Ricardo',
    age: 25,
    address: 'Quito, Ecuador',
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log(value) ));

  public promiseValue: Promise<string> = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      resolve(' Have data in the promise');
    }, 3500 );

  })


}

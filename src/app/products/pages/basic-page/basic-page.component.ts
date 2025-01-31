import { Component } from '@angular/core';

@Component({
  selector: 'shared-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

  public nameLower: string = 'ricardo';
  public nameUpper: string = 'Ricardo';
  public nameTitle: string = 'rIcArDo rOmO';

  public customDate: Date = new Date();

}

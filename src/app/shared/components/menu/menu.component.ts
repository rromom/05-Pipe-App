import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit{
  public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-desktop',
                items: [
                  {
                    label: 'Texts & Dates',
                    icon: 'pi pi-align-left',
                    routerLink: '/'
                  },
                  {
                    label: 'Numbers',
                    icon: 'pi pi-dollar',
                    routerLink: 'numbers'
                  },
                  {
                    label: 'Uncommon',
                    icon: 'pi pi-globe',
                    routerLink: 'uncommon'
                  }
                ]
            },{
              label:' Custom Pipes ',
              icon: 'pi pi-cog',
              items: [
                {
                  label: 'Other elements',
                  icon: 'pi pi-cog'
                }
              ]
            }
          ]
    }

}

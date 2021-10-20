import { AfterViewChecked, AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SubSystem } from '../../../Entities/Core/SubSystem/subSystem';
import { SubSystemService } from '../../../Entities/Core/SubSystem/subSystem.service';
import { INavData } from '@coreui/angular';
import { MenuService } from '../../../Entities/Core/Menu/menu.service';
import { MenuItemService } from '../../../Entities/Core/MenuItem/menuItem.service';
import { Menu } from '../../../Entities/Core/Menu/menu';
import { MenuItem } from '../../../Entities/Core/MenuItem/menuItem';
//import { SubSystemService } from '../../../Entities/Core/'

@Component({
  selector: 'sub-system',
  templateUrl: './sub-system.component.html',
  styleUrls: ['./sub-system.component.scss']
})
export class SubSystemComponent implements OnInit {

  constructor(private subSystemService: SubSystemService, private menuService: MenuService, private menuItemService: MenuItemService) { }

  ngAfterViewChecked(): void {
  }

  ngAfterViewInit(): void {

  }

  async ngOnInit() {
    await this.ReloadMenu();
  }

  @Output('UpdateMenu')
  updateMenu: EventEmitter<INavData[]> = new EventEmitter<INavData[]>();

  menu: INavData[] = [];


  subSystemList: SubSystem[] = [];

  menuList: Menu[] = [];

  menuItemList: MenuItem[] = [];

  private _selectedSubSystem: SubSystem = new SubSystem();

  public get SelectedSubSystem(): SubSystem {
    return this._selectedSubSystem;
  }

  public set SelectedSubSystem(value: SubSystem) {
    if (!this._selectedSubSystem || value.id == this._selectedSubSystem?.id)
      return;
    this._selectedSubSystem = value;
    this.renderMenu();
  }

  onSelect(id: number) {
    this.SelectedSubSystem = this.subSystemList.find(item => item.id == id);
  }

  async renderMenu() {

    this.menu = [];

    let childrenNavItems: INavData[] = [];

    let list = this.menuList.filter(item => item.subSystem.id == this._selectedSubSystem.id).sort((i, j) => i.priority - j.priority);

    await list.forEach(menu => {

      let menuItemList: MenuItem[] = this.menuItemList.filter(item => item.menu.id == menu.id).sort((i, j) => i.priority - j.priority);
      childrenNavItems = [];

      menuItemList.forEach(item => {

        childrenNavItems.push({
          name: item.title,
          url: item.url,
          icon: item.icon.length == 0 ? 'icon-speedometer' : item.icon,
        });
      });

      this.menu.push({
        name: menu.title,
        children: childrenNavItems
      });

    });

    this.updateMenu.emit(this.menu);
  }

  async ReloadMenu() {
    await this.subSystemService.RetrieveAll()
      .then(list => {
        this.subSystemList = list.filter(item => item.isActive).sort((i, j) => {
          return i.priority - j.priority;
        });
      });
    await this.menuService.RetrieveAll()
      .then(list => {
        this.menuList = list;
      });
    await this.menuItemService.RetrieveAll()
      .then(list => {
        this.menuItemList = list;
      });
    this.SelectedSubSystem = this.subSystemList[0];
    this.renderMenu();
  }

}

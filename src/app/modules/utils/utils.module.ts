import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { MenuComponent } from "src/app/components/menu/menu.component";
@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [CommonModule, IonicModule],
})
export class UtilsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        NavigationComponent,
        SidenavListComponent,
        FooterComponent,
    ],
    imports: [CommonModule, RouterModule, MaterialModule, FlexLayoutModule],
    exports: [HeaderComponent, SidenavListComponent, FooterComponent],
})
export class SharedModule {}

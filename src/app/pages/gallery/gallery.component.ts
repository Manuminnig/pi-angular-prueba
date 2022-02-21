import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageGalleryFormComponent } from 'src/app/common/image-gallery-form/image-gallery-form.component';
import { ImagePopUpComponent } from 'src/app/common/image-pop-up/image-pop-up.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    gallery: string[] = [];
    folder: string = "../../../assets/gallery/img";
    extension: string = ".jpg";
    quantity: number = 49;

    constructor(private matDialog: MatDialog,
        private authSvc: AuthService) { }

    ngOnInit(): void {
        this.searchPics();
    }

    searchPics() {
        for (let i = 0; i < this.quantity; i++) {
            let num: number = i+1;
            let path: string = this.folder + num + this.extension;
            console.log(path)
            this.gallery.push(path);
        }
    }

    openSingleShow(img: string) {
        this.matDialog.open(ImagePopUpComponent, {
            data: {
                image: img,
                poll: false,
            }
        })
    }

    openForm(): void {
        this.matDialog.open(ImageGalleryFormComponent);
    }

    isLogged(): boolean {
        return this.authSvc.getIsLogged();
    }
}

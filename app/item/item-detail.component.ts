import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private nav: Router 
    ) { }

    ngOnInit(): void {
        let id = +this.route.snapshot.params["id"];
        id = id ? id : 1;
        this.item = this.itemService.getItem(id);
    }

    openDetails(): void {
        console.log("openDetails clicked");
        //this.routerExtensions.navigate(['/item', 1]);  // This doesn't work
        this.nav.navigate(['/item', 5]); // This doesn't work
        // this.nav.navigate(['/']); // This works
    }
}

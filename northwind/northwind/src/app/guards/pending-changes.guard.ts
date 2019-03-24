import { Observable } from "rxjs/Observable"
import { CanDeactivate } from "@angular/router"

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate>{
    canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
        if (component.canDeactivate()) {
            return true;
        } else {
           return confirm('You have unsaved changes. Are you sure?')

        }
    }
}
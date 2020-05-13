import { AbstractControl } from '@angular/forms';
import { Logic } from 'src/app/Models/app.logic';


export class CustomValidator{

    static isWithSpecialChars(ctrl:AbstractControl):any{
        if(ctrl.value)
        {
            let regex = new RegExp(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g);
            if(regex.test(ctrl.value))
                return null;
            return {isWithSpecialChars:true};
         }
         return null;
    }

    static isNotUnique(ctrl:AbstractControl):any{
        let logic = new Logic();
        if(logic.GetMovies().find((movie, index)=> movie.Id == ctrl.value) != null)
            return{isNotUnique:true};
        return null;
    }

    static isNotFirstCharCapital(ctrl:AbstractControl):any{
        if(ctrl.value)
        {
            let regex = new RegExp(/^[A-Z]+[a-z0-9_-]*$/);
            if(regex.test(ctrl.value))
                return null;
            return {isNotFirstCharCapital:true};
        }
        return null;
    }
}
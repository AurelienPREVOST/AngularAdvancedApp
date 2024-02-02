import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'fullname'
})

export class FullNamePipe implements PipeTransform {
    transform(person: { lastName: string, firstName: string }, locale: 'en' | 'fr' = 'fr'): string {
        // Retourne le résultat souhaité avec le lastName en majuscules et le firstName tel quel
        return locale === 'fr' ? 
        `${person.lastName.toUpperCase()} ${person.firstName}`:
        `${person.firstName} ${person.lastName} `
    }
}
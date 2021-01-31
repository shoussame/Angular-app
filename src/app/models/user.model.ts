export class User {
    nom:string;
    prenom:string;
    email:string;
    mdp:string;
    fonction: string;
    constructor(obj?: any) {
        Object.assign(this, obj);
     }
}

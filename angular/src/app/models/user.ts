export class User {

    constructor(name = '', cc = 0, mail = '', password = '', confirmPassword = '', addres = '') {
        this.name = name;
        this.cc = cc;
        this.mail = mail;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.addres = addres;
    }
    name: string;
    cc : number;
    mail : string;
    password : string;
    confirmPassword : string;
    addres : string;    

}
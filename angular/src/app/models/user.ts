export class User {

    constructor(name = '', cc = '', mail = '', password = '', confirmPassword = '', addres = '') {
        this.name = name;
        this.cc = cc;
        this.mail = mail;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.addres = addres;
    }
    name: string;
    cc : string;
    mail : string;
    password : string;
    confirmPassword : string;
    addres : string;    

}
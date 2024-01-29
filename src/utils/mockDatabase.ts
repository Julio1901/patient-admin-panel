
interface Login {
    userName: string,
    password: string
}



export class MockDatabase {

    users: Login[]
    
    constructor() {
        this.users = [
            {
                userName: 'julio',
                password: 'julio'
            }
        ];
    }

    findUser(login: Login) : boolean {
        const foundUser = this.users.find(user => user.userName === login.userName && user.password === login.password);

        if (foundUser) {
            return true; 
        } else {
            return false; 
        }
    }


}
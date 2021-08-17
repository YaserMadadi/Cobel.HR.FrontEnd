export class AccessToken {
    constructor(
        public id: number,
        public samAccount: string,
        public displayName: string,
        public person_Id: number,
        public employee_Id: number,
        public token: string,
        public expireTime: Date,
        public status: number) {
    }

}
import { User } from './user';

export class Student {
    constructor(
        public id:              number,
        public user_id:         string,
        public egetsu_rating:   number,
        public status:          string,
        public career_id:       number,
        public user:            User
    ){}
}
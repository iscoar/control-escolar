export class User {
    constructor(
        public id:                  number,
        public name:                string,
        public last_name:           string,
        public second_last_name:    string,
        public role:                string,
        public gender:              string,
        public birthday:            string,
        public nationality:         string,
        public curp:                string,
        public insurance:           string,
        public enrollment:          string,
        public password:            string,
        public admission_date:      string,
    ){}
}
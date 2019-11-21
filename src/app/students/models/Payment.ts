export class Payment {
    constructor(
        public name:            string,
        public expires_date:    string,
        public payment_type:    string,
        public surcharge:       number,
        public discount:        number,
        public grant:           number,
        public total:           number,
    ){}
}
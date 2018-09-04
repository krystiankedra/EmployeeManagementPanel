export interface User {
  _id?: {$oid: string };
    firstname: string;
    lastname: string;
    age: string;
    office: string;
    postalCode: string;
    city: string;
    country: string;
    pesel: string;
    password: string;
}

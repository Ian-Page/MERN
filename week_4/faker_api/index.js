const {faker}  = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

console.log (faker.datatype.uuid());
console.log (faker.phone.phoneNumber());

const generateUserObj = () => ({
    _id: faker.datatype.uuid(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});
console.log (generateUserObj());

const generateCompanyObj = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
    street: faker.address.streetAddress(),
    city:  faker.address.cityName(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country()
    },
});
console.log (generateCompanyObj());

app.get("/api/users/new", (req, res) => {
    const newUser = generateUserObj();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = generateCompanyObject();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = generateUserObj();
    const newCompany = generateCompanyObject();
    const responseObject = {
    user: newUser,
    company: newCompany,
    };
    res.json(responseObject);
});
app.listen(port, ()=> console.log(`express server is running on ${port}`));
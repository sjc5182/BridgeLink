export default `
    type Company {
        companyname: User!
    }

    type Mutation {
        createCompany(companyname: String!):Boolean!

    }
    `;
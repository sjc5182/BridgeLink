export default {
    Mutation: {
        createCompany: async (parent, args, { models, user }) => {
            try {
                await models.Company.create({...arg, companyname: user.id});
                return true;
            }catch(err){
                console.log(err);
                return false;
            }
        },
    },
};
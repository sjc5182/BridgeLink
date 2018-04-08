export default {
    Mutation: {
        createCompany: async (parent, args, { models, user }) => {
            try {
                await models.Company.create({...args, owner: user.id});
                return true;
            }catch(err){
                console.log(err);
                return false;
            }
        },
    },
};
import UserSchema from "../user/UserSchema.js"

//register
export const createUser = (userObj)=> {
    return UserSchema(userObj).save()
}

// login
export const getSingleUser = (filter)=> {
    return UserSchema.findOne(filter)
}
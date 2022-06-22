import * as yup from "yup"
const serealizedRentSchema = yup.object().shape({
    rentId: yup.string().uuid().required(),
    start_date: yup.date().default(Date.now.prototype).required(),
    end_date: yup.date().default(Date.now.prototype).required(),
    ownerConfirmation:yup.boolean(),
    completed: yup.boolean().default(false).required(),
    user: yup.object().shape({
        userId: yup.string().uuid().required(),
        name: yup.string().required(),
        email: yup.string().email().required(),
        license: yup.boolean().required(),
        licenseCategory: yup.string().required(),
    })
})

export {serealizedRentSchema}
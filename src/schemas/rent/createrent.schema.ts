import * as yup from "yup"

const createRentSchema = yup.object().shape({
    start_date: yup.date().default(Date.now.prototype).optional(),
    end_date: yup.date().default(Date.now.prototype).optional(),
    ownerConfirmation:yup.boolean().default(false),
    completed: yup.boolean().default(false).optional(),
    userUserId: yup.string().required()
})

const serealizedRentSchema = yup.object().shape({
    rentId: yup.string().uuid().required(),
    start_date: yup.date().default(Date.now.prototype).required(),
    end_date: yup.date().default(Date.now.prototype).required(),
    ownerConfirmation:yup.boolean(),
    completed: yup.boolean().default(false).required(),
})

export  {createRentSchema, serealizedRentSchema}
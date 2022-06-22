import * as yup from "yup"

const createRentSchema = yup.object().shape({
    start_date: yup.date().default(Date.now.prototype).optional(),
    end_date: yup.date().default(Date.now.prototype).optional(),
    ownerConfirmation:yup.boolean().default(false),
    completed: yup.boolean().default(false).optional(),
    userId: yup.string().required()
})

const serealizedRentCreateSchema = yup.object().shape({
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
    }),
    car: yup.object().shape({
        carId: yup.string().uuid().required(),
        model: yup.string().required(),
        brand: yup.string().required(),
        plate: yup.string().required(),
        color: yup.string().required(),
        transmission: yup.string().required(),
        year: yup.string().required(),
        mileage: yup.string().required(),
        dailyPrice: yup.number().required(),
        available: yup.boolean().required(),
    }),
    rating: yup.array().nullable()
})

export  {createRentSchema, serealizedRentCreateSchema}
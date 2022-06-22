import * as yup from 'yup'

const serializedCreateCarSchema = yup.object().shape({
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
    user: yup.object().shape({
        userId: yup.string().uuid().required(),
        name: yup.string().required(),
        email: yup.string().email().required(),
        license: yup.boolean().required(),
        licenseCategory: yup.string().required(),
    }),
})

export { serializedCreateCarSchema}
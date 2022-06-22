import * as yup from 'yup'

const createCarSchema = yup.object().shape({
      model: yup.string().required(),
      brand: yup.string().required(),
      plate: yup.string().uppercase().required(),
      color: yup.string().required(),
      transmission: yup.string().required(),
      year: yup.string().required(),
      mileage: yup.string().required(),
      dailyPrice: yup.number().required(),
      available: yup.boolean().required(),
})

export { createCarSchema}

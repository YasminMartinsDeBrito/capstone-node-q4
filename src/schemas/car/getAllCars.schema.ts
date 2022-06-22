import * as yup from "yup";

const getAllCarsSchema = yup
  .array()
  .of(
    yup.object().shape({
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
    })
  )
  .required();

export default getAllCarsSchema;

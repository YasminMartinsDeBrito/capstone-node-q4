import * as yup from "yup";

const getAllRatingsSchema = yup.array()
    .of(yup.object().shape({
        rating: yup.number().required(),
        comment: yup.string().required(),
        evaluator: yup.string().required(),
        ratingId: yup.string().uuid().required(),
        user: yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().lowercase().required(),
            cpf: yup.string().required(),
            license: yup.boolean().default(false).optional(),
            licenseCategory: yup.string().uppercase().required(),
        }),
       
        }))

export default getAllRatingsSchema;

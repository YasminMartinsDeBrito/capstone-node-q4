import * as yup from "yup";

const createRatingSchema = yup.object().shape({
    rating: yup.number().required(),
    comment: yup.string().required(),
    evaluator: yup.string().required(),
    rentId: yup.string().uuid().required(),
});

const serializedCreateRatingSchema = yup.object().shape({});

export { createRatingSchema, serializedCreateRatingSchema };

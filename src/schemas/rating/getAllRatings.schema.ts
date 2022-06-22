import * as yup from "yup";

const getAllRatingsSchema = yup.array().of(yup.object().shape({})).required();

export default getAllRatingsSchema;

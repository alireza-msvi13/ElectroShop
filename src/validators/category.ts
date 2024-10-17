import * as yup from "yup";

const categoryValidator = yup.object().shape({
  title: yup.string().required("عنوان الزامی است").min(3, "حداقل 3 کارکتر").max(20, "حداکثر 20 کارکتر"),
  shortname: yup.string().required("نام کوتاه الزامی است").min(3, "حداقل 3 کارکتر").max(20, "حداکثر 20 کارکتر"),
}).strict().noUnknown(true, "Unknown field is not allowed");

const removeCategoryValidator = yup.object().shape({
  id: yup
    .string()
    .required("آیدی الزامی است")
    .matches(/^[0-9a-fA-F]{24}$/, "آیدی معتبر نیست"),
}).strict().noUnknown(true, "Unknown field is not allowed");

export {
  categoryValidator,
  removeCategoryValidator
};

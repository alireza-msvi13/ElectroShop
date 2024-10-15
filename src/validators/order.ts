import * as yup from "yup";


const createOrderValidator = yup.object().shape({
    message: yup.string().max(50),
    user: yup
        .string()
        .required()
        .matches(/^[0-9a-fA-F]{24}$/, "ایدی کاربر معتبر نیست !"),
    products: yup
        .array()
        .of(
            yup.object().shape({
                productId: yup
                    .string()
                    .required('آیدی محصول الزامی است')
                    .matches(/^[0-9a-fA-F]{24}$/, 'آیدی محصول معتبر نیست'),
                count: yup
                    .number()
                    .required('تعداد محصول الزامی است')
                    .min(1, 'حداقل یک محصول الزامی است'),
                color: yup.string().required()
            })
        )
        .min(1, 'حداقل یک محصول باید انتخاب شده باشد')
        .required('محصولات الزامی است')
}).strict().noUnknown(true, "Unknown field is not allowed");


const changeStatusValidator = yup.object().shape({
    id: yup
        .string()
        .required()
        .matches(/^[0-9a-fA-F]{24}$/, "آیدی محصول معتبر نیست"),
    status:yup.string().oneOf(["IN_PROGRESS", "DISPATCHED", "COMPLETED"],
         "وضعیت محصول باید یکی از وضعیت های در حال اماده سازی یا ارسال شده یا کامل شده است").required()
}).strict().noUnknown(true, "Unknown field is not allowed");

export {
    createOrderValidator,
    changeStatusValidator,
};

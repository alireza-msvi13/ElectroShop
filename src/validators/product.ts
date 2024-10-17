import * as yup from "yup";

interface FileType {
    size: number;
    type: string;
}


const productValidator = yup.object().shape({
    name: yup.string().required("نام محصول الزامی است").min(5, "نام محصول حداقل باید 5 کارکتر باشد").max(20, "نام حداکثر میتواند 40 کاکتر باشد"),

    shortname: yup.string().required("نام کوتاه محصول الزامی است").min(5, "نام کوتاه محصول حداقل باید 5 کارکتر باشد").max(20, "نام کوتاه حداکثر میتواند 40 کاکتر باشد"),

    brand: yup.string().required("برند محصول الزامی است").min(3, "برند حداقل باید 3 کارکتر باشد").max(20, "برند حداکثر میتواند 40 کاکتر باشد"),

    color: yup.string().required("رنگ محصول الزامی است").min(3, "رنگ حداقل باید 3 کارکتر باشد").max(20, " رنگ حداکثر میتواند 40 کاکتر باشد"),

    price: yup.number().required("قیمت محصول الزامی است").min(0, "قیمت نمیتونه منفی باشه"),

    discount: yup
        .number()
        .min(0, "تخفیف محصول نمی‌تواند منفی باشد")
        .max(100, "تخفیف محصول نمی‌تواند بیشتر از ۱۰۰ درصد باشد"),

    stock: yup.number().required("موجودی محصول الزامی است").min(0, "موجودی نمیتونه منفی باشد").max(40, "موجودی حداکثر 40 تا باید باشد"),
    cover: yup
        .mixed<FileType>()
        .required('کاور محصول الزامی است')
        .test('fileSize', 'حجم کاور محصول نمیتواند بیشتر از 3 مگابایت باشد',
            value => value && (value as FileType).size <= 3 * 1024 * 1024)
        .test('fileType', 'فرمت کاور محصول معتبر نیست',
            value => value && ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes((value as FileType).type)),


    categoryId: yup
        .string()
        .required(" دسته‌بندی الزامی است")
        .matches(/^[0-9a-fA-F]{24}$/, "شناسه دسته‌بندی معتبر نیست"),
}).strict().noUnknown(true, "Unknown field is not allowed");


const editProductValidator = yup.object().shape({
    name: yup.string().min(5, "نام محصول حداقل باید 5 کارکتر باشد").max(20, "نام حداکثر میتواند 40 کاکتر باشد"),

    shortname: yup.string().min(5, "نام کوتاه محصول حداقل باید 5 کارکتر باشد").max(20, "نام کوتاه حداکثر میتواند 40 کاکتر باشد"),

    brand: yup.string().min(3, "برند حداقل باید 3 کارکتر باشد").max(20, "برند حداکثر میتواند 40 کاکتر باشد"),

    color: yup.string().min(3, "رنگ حداقل باید 3 کارکتر باشد").max(20, " رنگ حداکثر میتواند 40 کاکتر باشد"),

    price: yup.number().min(0, "قیمت نمیتونه منفی باشه"),

    discount: yup
        .number()
        .min(0, "تخفیف محصول نمی‌تواند منفی باشد")
        .max(100, "تخفیف محصول نمی‌تواند بیشتر از ۱۰۰ درصد باشد"),

    stock: yup.number().min(0, "موجودی نمیتونه منفی باشد").max(40, "موجودی حداکثر 40 تا باید باشد"),
    cover: yup
        .mixed<FileType>()
        .nullable()
        .test('fileType', 'فرمت کاور محصول معتبر نیست',
            value => value === null || value === undefined ||
                ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes((value as FileType).type))
        .test('fileSize', 'حجم کاور محصول نمیتواند بیشتر از 3 مگابایت باشد',
            value => value === null || value === undefined || (value as FileType).size <= 3 * 1024 * 1024),



    categoryId: yup
        .string()
        .matches(/^[0-9a-fA-F]{24}$/, "شناسه دسته‌بندی معتبر نیست"),
}).strict().noUnknown(true, "Unknown field is not allowed");

const removeProductValidator = yup.object().shape({
    params: yup.object().shape({
        id: yup
            .string()
            .required("شناسه دوره الزامی است")
            .matches(/^[0-9a-fA-F]{24}$/, "شناسه دوره معتبر نیست"),
    }),
}).strict().noUnknown(true, "Unknown field is not allowed");


export {
    productValidator,
    removeProductValidator,
    editProductValidator
}
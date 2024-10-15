import * as yup from "yup";

const removeUserValidator = yup.object().shape({
    id: yup
        .string()
        .required("شناسه کاربر الزامی است")
        .matches(/^[0-9a-fA-F]{24}$/, "شناسه کاربر معتبر نیست"),
}).strict().noUnknown(true, "Unknown field is not allowed");

const banUserValidator = yup.object().shape({
    id: yup
        .string()
        .required("شناسه کاربر الزامی است")
        .matches(/^[0-9a-fA-F]{24}$/, "شناسه کاربر معتبر نیست"),
}).strict().noUnknown(true, "Unknown field is not allowed");

const editUserValidator = yup.object().shape({
    username: yup
        .string()
        .required("نام کاربری الزامی می‌باشد")
        .min(5, "نام و نام خانوادگی نباید کمتر از 5 کاراکتر باشد")
        .max(20, "نام و نام خانوادگی نباید بیشتر از 20 کاراکتر باشد"),
    email: yup
        .string()
        .email("ایمیل نامعتبر است")
        .max(40, "ایمیل حداکثر میتواند 40 کارکتر باشد")
        .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "ایمیل نامتعبر است"
        )
        .required("ایمیل الزامی است"),
    password: yup
        .string()
        .max(25, "رمز عبور حداکثر میتواند 25 کارکتر باشد")
        .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
        .required("رمز عبور الزامی می‌باشد"),
    phone: yup
        .string()
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "شماره همراه نامتعبر است")
        .required("شماره همراه الزامی است"),
    role: yup
        .string()
        .oneOf(["ADMIN", "USER"], "نقش کاربر باید یکی از مقادیر ADMIN و USER باشد"),
    id: yup
        .string()
        .required("شناسه کاربر الزامی است")
        .matches(/^[0-9a-fA-F]{24}$/, "شناسه کاربر معتبر نیست"),
    province: yup
        .string()
        .max(30, "نام استان نباید بیشتر از 30 کاراکتر باشد"),
    city: yup
        .string()
        .max(30, "نام شهر نباید بیشتر از 30 کاراکتر باشد"),
    address: yup
        .string()
        .max(80, "آدرس نباید بیشتر از 80 کاراکتر باشد"),
    postalCode: yup
        .string()
        .max(32, "کد پستی نباید بیشتر از 32 کاراکتر باشد")
}).strict().noUnknown(true, "Unknown field is not allowed");

const updateUserValidator = yup.object().shape({
    username: yup
        .string()
        .required("نام کاربری الزامی می‌باشد")
        .min(5, "نام و نام خانوادگی نباید کمتر از 5 کاراکتر باشد")
        .max(20, "نام و نام خانوادگی نباید بیشتر از 20 کاراکتر باشد"),
    email: yup
        .string()
        .email("ایمیل نامعتبر است")
        .max(40, "ایمیل حداکثر میتواند 40 کارکتر باشد")
        .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "ایمیل نامتعبر است"
        )
        .required("ایمیل الزامی است"),
    phone: yup
        .string()
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "شماره همراه نامتعبر است")
        .required("شماره همراه الزامی است"),
    province: yup
        .string()
        .required("نام استان الزامی است")
        .max(30, "نام استان نباید بیشتر از 30 کاراکتر باشد"),
    city: yup
        .string()
        .required("نام شهر الزامی است")
        .max(30, "نام شهر نباید بیشتر از 30 کاراکتر باشد"),
    address: yup
        .string()
        .required("آدرس الزامی است")
        .max(80, "آدرس نباید بیشتر از 80 کاراکتر باشد"),
    postalCode: yup
        .string()
        .max(32, "کد پستی نباید بیشتر از 32 کاراکتر باشد")
        .required("کد پستی الزامی است")

}).strict().noUnknown(true, "Unknown field is not allowed");


const changeUserRoleValidator = yup.object().shape({
    id: yup
        .string()
        .required()
        .matches(/^[0-9a-fA-F]{24}$/, "شناسه کاربر معتبر نیست"),
    role: yup
        .string()
        .oneOf(["ADMIN", "USER"], "نقش کاربر باید یکی از مقادیر ADMIN و USER باشد")
        .required("نقش کاربر الزامی است"),
}).strict().noUnknown(true, "Unknown field is not allowed");

export {
    removeUserValidator,
    banUserValidator,
    editUserValidator,
    updateUserValidator,
    changeUserRoleValidator,
};

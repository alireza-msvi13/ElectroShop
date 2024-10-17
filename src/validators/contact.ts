import * as yup from "yup";
const contactValidator = yup.object().shape({
    name: yup
        .string()
        .required("نام و نام خانوادگی الزامی است")
        .max(20),
    email: yup
        .string()
        .email("ایمیل معتبر نیست")
        .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
            "ایمیل معتبر نیست"
        )
        .max(40,"ایمیل حداکثر 40 کارکتر")
        .required(),
    phone: yup
        .string()
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
        .required("شمراه همراه الزامی است"),
    message: yup
        .string()
        .max(45,'حداکثر 45 کارکتر')
        .required("پیام الزامی است"),

}).strict().noUnknown(true, "Unknown field is not allowed");


export {
    contactValidator
};

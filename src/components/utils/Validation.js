import * as yup from "yup";

export const loginValidation = yup.object({
  loginEmail: yup
    .string()
    .email("Please enter the valid email")
    .required("Please enter the valid email"),
  loginPassword: yup.string().required("Please enter the valid password"),
});

export const studentValidation = yup.object({
  student_name: yup.string().required("Please enter the student name"),
  standard: yup
    .number()
    .min(1, "Minimum Standard must be atleast 1")
    .max(12, "There can be no Standard higher than 12")
    .required("Please enter the valid Standard"),
  section: yup
    .string()
    .max(1, "Please enter the valid section")
    .matches(/^[A-Z]+$/, "Standard must be in upper case Alphabet")
    .required("Please enter the valid Section"),
  rollno: yup
    .number()
    .min(1, "Minimum Roll number must be atleast 1")
    .max(60, "Entered role number is more than Students Strength")
    .required("Please enter the valid Roll number"),
});

export const scholasticAreasValidation = yup.object({
  subject: yup.string().required("Please select the subject"),
  faMark: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(40, "There can be no mark higher than 40")
    .required("Please enter the FA mark"),
  faOralMark: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(10, "There can be no mark higher than 10")
    .required("Please enter the FA Oral mark"),
  saMark: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(40, "There can be no mark higher than 40")
    .required("Please enter the SA mark"),
  saOralMark: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(10, "There can be no mark higher than 10")
    .required("Please enter the SA Oral mark"),
});

export const coScholasticAreasValidation = yup.object({
  coScholasticSkills: yup
    .string()
    .required("Please select the Co-Scholastic Skill")
    .nullable(),
  grade: yup.string().required("Please select the grade").nullable(),
});

export const attendenceFormValidation = yup.object({
  presentDays: yup
    .number()
    .min(0, "Minimum must be atleast 0")
    .max(83, "Entered days is more than total working days")
    .required("Please enter the Present Days")
    .nullable(),
});

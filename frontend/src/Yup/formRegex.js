import * as Yup from 'yup';
const emailRegex = new RegExp(`^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$`);
export const validate = Yup.object({
    first_name: Yup.string()
        .min(4, 'Name must be 4 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Name field is required'),
    last_name: Yup.string()
        .min(4, 'Name must be 4 characters')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    email: Yup.string().trim("do not leave blank").required("Email is required").email("Invalid email").matches(emailRegex, "Invalid email"),
    whycontactus: Yup.string().min(3, "It's too short").required("Message field is required"),
    phone_number: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required('A phone number is required'),
})
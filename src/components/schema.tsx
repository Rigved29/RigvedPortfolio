import * as yup from 'yup';

export const contactFormSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    message: yup.string().required('Message is required'),
    file: yup.mixed(),
    interestedIn: yup.array().min(1, 'At least one topic must be selected')
})
// Core
import { object, string } from 'yup';
// Instruments

const commentMin5   = `The comment must have at least 5 characters.`;
const Required      = `The field must not be empty.`;

export const shapeComment = {
    shape: {
        body: '',
    },
    schema: object().shape({
        body: string()
            .min(5, commentMin5)
            .required(Required),
    }),

};

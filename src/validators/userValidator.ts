import Joi, {LanguageMessages} from "joi";

const mb = 1024*1024
const userValidator = Joi.object({
    name: Joi.string().min(2).max(5).required(),
    age: Joi.number().min(16).max(20).required(),
    avatar: Joi.any().required().custom((value, helpers) => {
        if (value && value[0].size > 2 * mb) {
        console.log(value[0].size);
            return helpers.message('File size must be less or equal 2MB' as any as LanguageMessages)
        }

        return value
    })
})

export {
    userValidator
}
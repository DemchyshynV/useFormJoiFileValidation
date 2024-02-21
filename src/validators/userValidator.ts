import Joi, {LanguageMessages} from "joi";

const mb = 500*1024
const userValidator = Joi.object({
    name: Joi.string().min(2).max(5).required(),
    age: Joi.number().min(16).max(20).required(),
    avatar: Joi.any().required().custom((value, helpers) => {
        if (value && value[0].size > 2 * mb) {
            return helpers.message('File size must be less or equal 500kb' as any as LanguageMessages)
        }

        return value
    })
})

export {
    userValidator
}
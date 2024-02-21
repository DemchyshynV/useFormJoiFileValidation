import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "./interfaces";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "./validators";

const App = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<IUser>({
        mode: 'onBlur',
        resolver: joiResolver(userValidator)
    });

    const onSubmit: SubmitHandler<IUser> = (user) => {
        console.log(user);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'age'} {...register('age', {valueAsNumber: true})}/>
            <input type="file" {...register('avatar')}/>
            {errors.avatar && <div>{errors.avatar.message}</div>}
            <button disabled={!isValid}>save</button>
        </form>
    );
};

export {App};
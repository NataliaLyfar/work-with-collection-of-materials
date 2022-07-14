import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Input = styled.input`
padding: ${p => p.theme.space[1]}px;
margin: 0 ${p => p.theme.space[2]}px;
border-radius: ${p => p.theme.radii.small};
`;
const Button = styled.input.attrs({ type: 'submit' })` 
background: #ec5990;
color: white;
text-transform: uppercase;
border: none;
border-radius: ${p => p.theme.radii.normal};
margin: 0 ${p => p.theme.space[2]}px;
padding: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.thin};
letter-spacing: 2px;
&:hover {
  background: #bf1650;
};
&:active {
transition: 0.3s all;
  transform: translateY(3px);
  border: ${p => p.theme.borders.normal} transparent;
  opacity: 0.8;
}
`;

export const MaterialEditorForm = ({onSubmit}) => {
const {register, handleSubmit, reset, formState: {isSubmitSuccessful, isSubmitted}} = useForm();

useEffect(() => {
    reset({
        name: '',
        email: '',
        avatar: '',
    })
},[isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
        <label htmlFor="name">Name
        <Input {...register("name", {pattern: /[A-Za-z]{3}/})} type="text" />
        </label>
        <label htmlFor="email">Email
        <Input {...register("email")} type="email" />
        </label>
        <label htmlFor="avatar">Avatar
        <Input {...register("avatar")} type="text" />
        </label>
        <Button type="submit" disabled={isSubmitted}/>
    </form>
  );
};
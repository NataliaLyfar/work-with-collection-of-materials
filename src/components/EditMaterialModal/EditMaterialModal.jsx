import { useEffect } from "react";
import {IoMdCloseCircle} from 'react-icons/io';
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { createPortal } from 'react-dom';

const ModalBackdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${p => p.theme.colors.shadow};
z-index: 1200;
`;
const Modal = styled.div`
position: relative;
padding: ${p => p.theme.space[4]}px;
`;
const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`;
const Input = styled.input`
display: block;
min-width: 300px;
padding: ${p => p.theme.space[1]}px;
margin: ${p => p.theme.space[0]}px 0 ${p => p.theme.space[2]}px;
border-radius: ${p => p.theme.radii.small};
`;
const Label = styled.label`
color: white;
`;
const Button = styled.input.attrs({ type: 'submit' })` 
background: #ec5990;
color: white;
text-transform: uppercase;
border: none;
border-radius: ${p => p.theme.radii.normal};
// margin-bottom: ${p => p.theme.space[2]}px;
padding: ${p => p.theme.space[1]}px;
font-size: ${p => p.theme.fontSizes.s};
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
const CloseButton = styled.button`
position: absolute;
top: 0;
right: 0;
background: transparent;
color: orange;
border: none;
border-radius: ${p => p.theme.radii.normal};
padding: ${p => p.theme.space[0]}px;
&:hover {
  color: red;
};
&:active {
transition: 0.3s all;
  transform: translateY(3px);
  border: ${p => p.theme.borders.normal} transparent;
  opacity: 0.8;
};
svg{
  width: 30px;
  height: 30px; 
}
`;

const modalRoot = document.querySelector('#modal-root');

export const EditMaterialModal = ({onClose, onEdit, item}) => {
  useEffect(()=> {
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  });

  const closeModal = ({code, target, currentTarget}) => {
    if(code === "Escape" || target === currentTarget){onClose();}
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    onEdit({id: item.id, name: data.name, createdAt: data.email, avatar: data.avatar});
     onClose();};

  return createPortal(
    <ModalBackdrop onClick={closeModal}>
      <Modal>
      <Form onSubmit={handleSubmit(onSubmit)} >
        <Label htmlFor="name">Name
        <Input {...register("name", {pattern: /[A-Za-z]{3}/})} type="text" />
        </Label>
        <Label htmlFor="email">Email
        <Input {...register("email")} type="email" />
        </Label>
        <Label htmlFor="avatar">Avatar
        <Input {...register("avatar")} type="text" />
        </Label>
        <Button type="submit" />
      </Form>
        <CloseButton type="button" onClick={onClose}><IoMdCloseCircle/></CloseButton>
      </Modal>
</ModalBackdrop>, modalRoot
  );
};
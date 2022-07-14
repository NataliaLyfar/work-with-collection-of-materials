import { EditMaterialModal } from 'components/EditMaterialModal/EditMaterialModal';
import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import styled from "styled-components";

const Item = styled.li`
position: relative;
width: 300px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
border-radius: ${p => p.theme.radii.small};
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
const Image = styled.img`
width: 100%;
height: 260px;
object-fit: cover;
`;
const TextInfo = styled.p`
padding: ${p => p.theme.space[0]}px;
font-weight: ${p => p.theme.fontWeights.semibold}
`;
const TextEmail = styled.p`
padding: ${p => p.theme.space[0]}px;
color: ${p => p.theme.colors.shadow};
`;
const DeleteButton = styled.button`
position: absolute;
bottom: 0;
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
const Button = styled.button` 
background: green;
color: white;
text-transform: uppercase;
border: none;
border-radius: ${p => p.theme.radii.normal};
margin: ${p => p.theme.space[0]}px ${p => p.theme.space[0]}px;
padding: ${p => p.theme.space[1]}px;
font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p => p.theme.fontWeights.thin};
letter-spacing: 2px;
&:hover {
  background: orange;
};
&:active {
transition: 0.3s all;
  transform: translateY(3px);
  border: ${p => p.theme.borders.normal} transparent;
  opacity: 0.8;
}
`;

export const Material = ({item, onUpdate, onDelete}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = (e) => setIsModalOpen(true);
  const closeModal = (e) => setIsModalOpen(false);;
  return (
      <Item>
          <Image src={item.avatar} alt={item.name}/>
          <TextInfo>{item.name}</TextInfo>
          <TextEmail>{item.createdAt}</TextEmail>
          <DeleteButton type="button" onClick={() => onDelete(item.id)}><RiDeleteBin6Line/></DeleteButton>
          <Button type="button" 
          onClick={openModal}
          >update</Button> 
         {isModalOpen && <EditMaterialModal item={item} onEdit={onUpdate} onClose={closeModal}/>}
      </Item>
    );
  };
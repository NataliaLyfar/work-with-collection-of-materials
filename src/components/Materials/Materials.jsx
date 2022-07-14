import styled from "styled-components";
import { Material } from './Material';

const MaterialsList = styled.ul`
display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => p.theme.space[3]}px;
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px 0;
`;

export const Materials = ({items, ...otherProps}) => {
return (
    <MaterialsList>
        {items.map(item => 
        <Material 
            key={item.id}
            item={item}
            {...otherProps}
            />)}
    </MaterialsList>
  );
};


import axios from "axios";

axios.defaults.baseURL = 'https://62cec418826a88972d02970c.mockapi.io';

export const addMaterial = async(values) => {
    const { data } = await axios.post('/materials', values);
    return data;
};

export const getMaterial = async() => {
    const { data } = await axios.get('/materials');
    return data;
};

export const deleteMaterial = async(id) => {
    const { data } = await axios.delete(`/materials/${id}`);
    return data;
};

export const updateMaterial = async(fields) => {
    const { data } = await axios.put(`/materials/${fields.id}`, fields);
    return data;
};
// export const Materials = ({items, ...otherProps}) => {
//     return (
//         <MaterialsList>
//             {items.map(({id, name, avatar,createdAt}) => 
//             <Material 
//                 key={id}
//                 avatar={avatar}
//                 name={name}
//                 createdAt={createdAt}
//                 {...otherProps}
//                 />)}
//         </MaterialsList>
//       );
//     };
import { useState, useEffect } from "react";
import { Container } from "./Container/Container";
import { MaterialEditorForm } from "./MaterialEditorForm/MaterialEditorForm";
import * as API from 'services/api';
import { Materials } from "./Materials/Materials";


export const App = () => {
const [materials, setMaterials] = useState([]);
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  (async() => {
    try {
      setIsLoading(true);
      const materials = await API.getMaterial();
      setMaterials(materials);
      setIsLoading(false);
    } catch (error) {
      console.log(error)
    }
    
  })();
}, [])
  
 const addMaterial = async (values) => {
  try {
    const material = await API.addMaterial(values);
    console.log(material);
    setMaterials(prevState => [...materials, material]);
  } catch (error) {
    console.log(error);
  };
};
const deleteMaterial = async (id) => {
  try {
    await API.deleteMaterial(id);
    setMaterials(prevState => prevState.filter(material => id !== material.id));
  } catch (error) {
    console.log(error);
  };
};
const updateMaterial = async fields => {
  try {
    const updatedMaterial =  await API.updateMaterial(fields);
    setMaterials(prevState => prevState.map(material =>
     material.id === fields.id ? updatedMaterial : material));
  } catch (error) {
    console.log(error);
  };
};
  return (
    <Container>    
     <MaterialEditorForm 
     onSubmit={addMaterial}     
     />
     {isLoading ? <div>Loading...</div> 
     :  <Materials 
     items={materials} 
     onDelete={deleteMaterial} 
     onUpdate={updateMaterial}
     />} 
    </Container>
  );
};

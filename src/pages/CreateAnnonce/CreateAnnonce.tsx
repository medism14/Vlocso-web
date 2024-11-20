import React from 'react';
import './CreateAnnonce.css';
import { CreateAnnonceProps, useCreateAnnonce } from './useCreateAnnonce';

const CreateAnnonce: React.FC = (props: CreateAnnonceProps) => {
  const {  } = useCreateAnnonce(props);
  return <div>CreateAnnonce</div>;
};

export default CreateAnnonce;

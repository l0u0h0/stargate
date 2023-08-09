import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProFileIcon = () => {
  const navigate = useNavigate();
  return <span onClick={() => navigate('/mypage')} className="material-symbols-outlined">account_box</span>;
};

export default ProFileIcon;

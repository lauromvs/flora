import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IProduct {
  id: string;
  name: string;
  image: string;
  value: number;
  amount: number;
  available: boolean;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateProduct: (product: Omit<IProduct, 'id' | 'available'>) => void;
  editingProduct: IProduct;
}

interface IEditProductData {
  name: string;
  image: string;
  value: number;
  amount: number;
}

const ModalEditProduct: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingProduct,
  handleUpdateProduct,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditProductData) => {
      handleUpdateProduct(data);
      setIsOpen();
    },
    [handleUpdateProduct, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingProduct}>
        <h1>Editar Produto</h1>

        <h3>URL da imagem</h3>
        <Input name="image" placeholder="Cole o link aqui" />

        <h3>Nome do produto</h3>
        <Input name="name" placeholder="Ex: Aloe Vera" />

        <h3>Quantidade disponível</h3>
        <Input name="amount" placeholder="Ex: 3" />

        <h3>Preço</h3>
        <Input name="value" placeholder="Ex: 19.90" />

        <button type="submit" data-testid="edit-product-button">
          <div className="text">Editar Produto</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditProduct;

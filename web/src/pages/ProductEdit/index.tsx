import React, { FormEvent, useState, useEffect } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import api from '../../services/api';

import { Container, Form } from './styles';

interface IProduct {
  id: string;
  name: string;
  image: string;
  value: number;
  amount: number;
}

const ProductEdit: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [amount, setAmount] = useState('');
  const [editingId, setEditingId] = useState('');

  useEffect(() => {
    const editingProduct = history.location.state as IProduct;
    setName(editingProduct.name);
    setValue(String(editingProduct.value));
    setAmount(String(editingProduct.amount));
    setEditingId(String(editingProduct.id));
  }, [history]);

  function handleCancel(): void {
    history.goBack();
  }

  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    const body = {
      name,
      value,
      amount,
    };

    await api.put(`products/${editingId}`, body);

    alert('Atualização realizada com sucesso!');

    history.push('/admin');
  }

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Editar Produto</h1>

          <h3>Nome do produto</h3>
          <input
            name="name"
            value={name}
            placeholder="Ex: Aloe Vera"
            onChange={event => setName(event.target.value)}
          />

          <h3>Quantidade disponível</h3>
          <input
            name="amount"
            value={amount}
            placeholder="Ex: 3"
            onChange={event => setAmount(event.target.value)}
          />

          <h3>Preço</h3>
          <input
            name="value"
            value={value}
            placeholder="Ex: 19.90"
            onChange={event => setValue(event.target.value)}
          />
          <div>
            <button type="button" onClick={handleCancel}>
              Cancelar
            </button>
            <button type="submit" data-testid="add-product-button">
              <p className="text">Editar Produto</p>
              <div className="icon">
                <FiCheckSquare size={24} />
              </div>
            </button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default ProductEdit;

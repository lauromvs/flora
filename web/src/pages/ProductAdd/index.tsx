import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FiCheckSquare, FiUpload } from 'react-icons/fi';
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
  available: boolean;
}

const ProductAdd: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [amount, setAmount] = useState('');
  const [fileName, setFileName] = useState('');
  const [image, setImage] = useState<File[]>([]);

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>): void {
    if (!event.target.files) return;

    const selectedImages = Array.from(event.target.files);

    setImage(selectedImages);
    setFileName(selectedImages[0].name);
  }

  function handleCancel(): void {
    history.goBack();
  }

  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    const data = new FormData();

    data.append('name', name);
    data.append('value', value);
    data.append('amount', amount);
    data.append('image', image[0]);

    await api.post('products', data);

    alert('Cadastro realizado com sucesso!');

    history.push('/admin');
  }

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Novo Produto</h1>

          <h3>URL da imagem</h3>
          <div className="uploadDiv">
            <label htmlFor="fileInput" className="new-button">
              <FiUpload size={20} />
              Selecione uma imagem
              <input
                hidden
                id="fileInput"
                type="file"
                name="image"
                placeholder="Cole o link aqui"
                onChange={handleSelectImage}
              />
            </label>
            <p>{fileName || ''}</p>
          </div>

          <h3>Nome do produto</h3>
          <input
            name="name"
            placeholder="Ex: Aloe Vera"
            onChange={event => setName(event.target.value)}
          />

          <h3>Quantidade disponível</h3>
          <input
            name="amount"
            placeholder="Ex: 3"
            onChange={event => setAmount(event.target.value)}
          />

          <h3>Preço</h3>
          <input
            name="value"
            placeholder="Ex: 19.90"
            onChange={event => setValue(event.target.value)}
          />
          <div>
            <button type="button" onClick={handleCancel}>
              Cancelar
            </button>
            <button type="submit" data-testid="add-product-button">
              <p className="text">Adicionar Produto</p>
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

export default ProductAdd;

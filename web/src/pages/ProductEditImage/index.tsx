import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { FiCheckSquare, FiUpload } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import api from '../../services/api';

import { Container, Form, SaveContainer } from './styles';

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

  const [editingId, setEditingId] = useState('');
  const [fileName, setFileName] = useState('');
  const [image, setImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>();

  useEffect(() => {
    const editingProduct = history.location.state as IProduct;
    setEditingId(String(editingProduct.id));
    setFileName(editingProduct.image);
  }, [history]);

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>): void {
    if (!event.target.files) return;

    const selectedImage = event.target.files[0];

    setImage(selectedImage);

    const selectedImagePreview = URL.createObjectURL(selectedImage);

    setPreviewImage(selectedImagePreview);
  }

  function handleCancel(): void {
    history.goBack();
  }

  async function handleSubmit(event: FormEvent): Promise<void> {
    event.preventDefault();

    const data = new FormData();
    data.append('image', image as File);

    await api.patch(`products/${editingId}/image`, data);
    alert('Imagem alterada com sucesso!');
    history.push('/admin');
  }

  return (
    <>
      <Header />
      <Container>
        <Form>
          <h1>Editar Imagem</h1>
          <div className="flexContainer">
            {previewImage ? (
              <img src={previewImage} alt="Imagem do produto" />
            ) : (
                <img
                  src={`http://127.0.0.1:3333/files/${fileName}`}
                  alt="Imagem do produto"
                />
              )}
            <div className="uploadDiv">
              <label htmlFor="fileInput" className="new-button">
                <FiUpload size={20} />
                Selecione uma imagem
                <input
                  hidden
                  id="fileInput"
                  type="file"
                  name="image"
                  onChange={handleSelectImage}
                />
              </label>
            </div>
          </div>
        </Form>
      </Container>
      <SaveContainer>
        <button type="button" onClick={handleCancel}>
          Cancelar
        </button>
        <button type="button" onClick={handleSubmit}>
          <p className="text">Salvar Imagem</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </SaveContainer>
    </>
  );
};

export default ProductAdd;

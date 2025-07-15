import React, { useState } from 'react'
import GetAll_Products from '../Components/Utils/GetProducts'
import CardProductsBig from '../Components/Products/CardProductsBig';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

export const Catalog = () => {
  const { products } = GetAll_Products();

  const [search, setSearch] = useState('');
  const [tipo, setTipo] = useState('');

  // Categorías únicas
  const categorias = [...new Set(products.map((p) => p.category))];
  const opcionesCategorias = [
    { label: 'Todos los tipos', value: '' },
    ...categorias.map((cat) => ({
      label: cat,
      value: cat // <- asegúrate que sea un string
    }))
  ];

  const productosFiltrados = products.filter((product) => {
    const tipoStr = typeof tipo === "string" ? tipo : "";

    const categoriaStr = typeof product.category === "string" ? product.category : "";

    const coincideCategoria =
      tipoStr === "" ? true : categoriaStr.toLowerCase() === tipoStr.toLowerCase();

    const coincideBusqueda =
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

  const onTipoChange = (e) => {
    setTipo(e.value);
    setSearch('');
  };
  console.log('tipo seleccionado:', tipo);

  return (
    <div className='divCatalog'>
      {/* Filtros con PrimeReact */}
      <div className="p-inputgroup filtros" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <InputText
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar productos..."
          className="p-inputtext-sm"
          style={{ flex: 2 }}
        />

        <Dropdown
          value={tipo}
          options={opcionesCategorias}
          onChange={onTipoChange}
          placeholder="Filtrar por tipo"
          className="p-dropdown-sm"
          style={{ flex: 1 }}
        />

      </div>

      {/* Lista de productos */}
      <div className='contenedor-products-list'>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((product) => (
            <CardProductsBig key={product.id} product={product} />
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  )
}

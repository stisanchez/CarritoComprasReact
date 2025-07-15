import React, { useState, useRef, useEffect } from 'react';
import GetAll_Products from '../Components/Utils/GetProducts';
import CardProductsBig from '../Components/Products/CardProductsBig';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { ProgressSpinner } from 'primereact/progressspinner';

export const Catalog = () => {
  const { products } = GetAll_Products();

  const [search, setSearch] = useState('');
  const [tipo, setTipo] = useState('');
  const [visibleCount, setVisibleCount] = useState(20);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const categorias = [...new Set(products.map((p) => p.category))];
  const opcionesCategorias = [
    { label: 'Todos los tipos', value: '' },
    ...categorias.map((cat) => ({ label: cat, value: cat }))
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

  // Mostrar solo una parte de los productos filtrados
  const productosVisibles = productosFiltrados.slice(0, visibleCount);

  const onTipoChange = (e) => {
    setTipo(e.value);
    setSearch('');
    setVisibleCount(20);
  };

  // Lazy loading con IntersectionObserver
  const lastProductRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && visibleCount < productosFiltrados.length) {
        setLoading(true);
        setTimeout(() => {
          setVisibleCount((prev) => prev + 20);
          setLoading(false);
        }, 500);
      }
    });

    if (node) observer.current.observe(node);
  };

  return (
    <div className='divCatalog'>
      {/* Filtros con PrimeReact */}
      <div className="p-inputgroup filtros">
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

        {productosVisibles.map((product, index) => {
          const isLast = index === productosVisibles.length - 1;
          return (
            <div ref={isLast ? lastProductRef : null} key={product.id}>
              <CardProductsBig product={product} />
            </div>
          );
        })}

        {loading && (
          <div className='divLoading'>
            <ProgressSpinner className='spinner' strokeWidth="4" />
          </div>
        )}

        {productosVisibles.length === 0 && !loading && <p>No se encontraron productos.</p>}
      </div>
    </div>
  );
};

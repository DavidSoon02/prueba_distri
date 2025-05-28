import React, { useEffect, useState } from 'react';
import type { Character } from '../types/Character';
import axios from 'axios';

const AmiiboList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://www.amiiboapi.com/api/amiibo/?character=Mario')
      .then((res) => {
        const personajes = res.data.amiibo.map((item: any, index: number) => ({
          id: index.toString(),
          name: item.character,
          description: item.gameSeries,
          image: item.image,
        }));

        setCharacters(personajes);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al obtener personajes:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando personajes...</p>;
  if (characters.length === 0) return <p>No se encontraron personajes.</p>;

  return (
    <div>
      <h2>Personajes de Mario (Amiibo API)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {characters.map((char) => (
          <div key={char.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <img src={char.image} alt={char.name} style={{ width: '100%' }} />
            <h4>{char.name}</h4>
            <p style={{ fontSize: '0.9rem' }}>{char.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmiiboList;

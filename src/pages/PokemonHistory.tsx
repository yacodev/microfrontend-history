import usePokemonStore from 'host/pokemonStore';
import { PokemonCard } from '../components/PokemonCard';
import { PokemonDetails } from '../interface';
import { FaArrowLeft } from 'react-icons/fa';

export const PokemonHistory = () => {
  const { listSelectedPokemon } = usePokemonStore();

  const handleGoBack = () => {
    window.history.pushState({}, '', '/pokemons');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-12'>
          <div className='flex items-center justify-between mb-8 mt-'>
            <h1 className='text-3xl font-extrabold text-gray-900 dark:text-white'>
              Historial de Busqueda
            </h1>
          </div>

          <div className='max-w-4xl mx-auto mb-4'>
            <button
              onClick={handleGoBack}
              className='flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors'
            >
              <FaArrowLeft />
              <span>Volver</span>
            </button>
          </div>

          {listSelectedPokemon.length === 0 ? (
            <div className='flex flex-col items-center justify-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
              <p className='text-xl text-gray-600 dark:text-gray-300 text-center'>
                No hay pokémon en el historial
              </p>
              <p className='mt-2 text-gray-500 dark:text-gray-400 text-center'>
                Los Pokémon que visites aparecerán aquí
              </p>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4'>
              {listSelectedPokemon.map(
                (pokemon: PokemonDetails, index: number) => (
                  <div
                    key={`${pokemon.id}-${index}`}
                    className='transform transition-all duration-300 hover:-translate-y-1 mb-6'
                  >
                    <PokemonCard pokemon={pokemon} />
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonHistory;

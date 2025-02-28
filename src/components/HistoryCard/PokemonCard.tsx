import { HistoryCardProps } from './interface';

export const HistoryCard = ({ pokemon }: HistoryCardProps) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700/50 overflow-hidden h-full flex flex-row transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-600/50'>
      <div className='bg-gray-100 dark:bg-gray-700 p-4 text-center'>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className='w-40 h-40 object-contain mx-auto drop-shadow-md'
        />
      </div>
      <div className='p-6 flex-grow flex flex-col justify-between'>
        <div>
          <h2 className='text-xl font-bold text-gray-800 dark:text-white capitalize mb-3'>
            {pokemon.name}
          </h2>
          <div className='flex flex-wrap gap-2 mb-4'>
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className='px-3 py-1 bg-blue-500 dark:bg-blue-600 text-white text-sm rounded-full capitalize shadow-sm hover:shadow-md transition-shadow'
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className='space-y-2 text-sm text-gray-600 dark:text-gray-300'>
          <div className='flex justify-between items-center'>
            <span className='font-medium'>Altura:</span>
            <span>{pokemon.height / 10} m</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='font-medium'>Peso:</span>
            <span>{pokemon.weight / 10} kg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;

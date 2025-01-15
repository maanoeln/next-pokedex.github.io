import Icons from '@/components/icons/icons';
import getImageUrl from '@/helpers/getImageUrl';
import { Pokemon } from '@/interfaces/pokemons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface IPokemonCard {
  pokemon: Pokemon;
  id: number;
}

function PokemonCard({ pokemon, id }: IPokemonCard) {
  const [isError, setIsError] = useState<string | boolean>();
  const [measures, setMeasures] = useState<number>(150);

  const handleError = () => {
    setIsError(true);
    setMeasures(100);
  };

  console.log(getImageUrl(id));
  return (
    <div className='flex flex-col gap-3 p-3 flex-1 bg-secondary-dark rounded-lg'>
      <div className='flex justify-between items-center gap-2'>
        <span className='capitalize text-xl font-bold text-secondary-light text-center flex-1 text-ellipsis overflow-hidden whitespace-nowrap'>
          {pokemon.name}
        </span>
        <Link href={`/pokemon/${id}`}>
          <Icons
            className='stroke-primary-main hover:stroke-primary-light cursor-pointer '
            fill='none'
            width='21px'
            height='21px'
            viewBox='0 0 21 21'
            name='info'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </Link>
      </div>
      <div className='flex justify-center h-full'>
        <div className='relative flex justify-center items-center h-[120px] w-[120px]'>
          {isError ? (
            <Icons
              className='fill-secondary'
              name='noImage'
              viewBox='0 0 32 32'
              width='90px'
              height='90px'
            />
          ) : (
            <Image
              className='justify-self-center static z-20 fill-secondary'
              src={getImageUrl(id)}
              onError={handleError}
              alt={pokemon.name}
              width={measures}
              height={measures}
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;

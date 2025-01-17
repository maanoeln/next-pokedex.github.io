import Icons from '@/components/icons/icons';
import usePagination from '@/hooks/usePagination';

interface IProps {
  totalCount: number;
  currentPage: number;
  onPageChange(value: number): void;
}

const DOTS = '...';

function Pagination({ totalCount, currentPage, onPageChange }: IProps) {
  const paginationRange = usePagination({ currentPage, totalCount });
  const lastPage = paginationRange && paginationRange[paginationRange?.length];

  return (
    <div className='flex justify-center items-center text-lg text-secondary-main gap-3'>
      <Icons
        className='fill-primary dark:fill-primary cursor-pointer'
        width='16px'
        height='16px'
        name='goBack'
        onClick={
          currentPage === 1 ? () => {} : () => onPageChange(currentPage - 1)
        }
      />

      {paginationRange?.map((item, idx) => {
        if (item === DOTS) {
          return <span key={`${item + idx}`}>{item}</span>;
        }
        return (
          <span
            className={`${
              currentPage === item ? 'text-primary-main ' : ''
            } hover:text-primary-light cursor-pointer`}
            key={item}
            onClick={() => onPageChange(+item)}
          >
            {item}
          </span>
        );
      })}

      <Icons
        className='fill-primary dark:fill-primary cursor-pointer rotate-180'
        width='16px'
        height='16px'
        name='goBack'
        onClick={
          currentPage === lastPage
            ? () => {}
            : () => onPageChange(currentPage + 1)
        }
      />
    </div>
  );
}

export default Pagination;

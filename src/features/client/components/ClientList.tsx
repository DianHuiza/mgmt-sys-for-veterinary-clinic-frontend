import { useInfiniteQuery } from '@tanstack/react-query';
import { getClients } from '../services/getClients';
import { useCallback } from 'react';
import { useIntersectionObserver } from '../../../shared/hooks/useIntersectionObserver';

export interface ClientListProps {
  search: string
}

export const ClientList: React.FC<ClientListProps> = ({ search }) => {
  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["clients", search],
    queryFn: ({ pageParam }) => getClients(search, pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });

  const onIntersectionHandler = useCallback(() => {
    if (isLoading) return;
    fetchNextPage()
  },[isLoading, fetchNextPage])

  const {ref: infiniteScrollRef} = useIntersectionObserver<HTMLDivElement>(onIntersectionHandler)

  const users = data?.pages.flatMap(page => page.data ?? []);


  return (
    <div>
      {users?.map(user => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
      <div ref={infiniteScrollRef}/>
    </div>
  )
};

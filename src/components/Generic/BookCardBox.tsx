import { useState, useEffect } from 'react';

import BookCard from './BookCard';
import { useAppSelector } from '@/redux/hooks/Hook';
import { getProduct } from '@/redux/hooks/jsonHookBook';

export type Tbook = {
  id: string;
  title: string;
  entesharat: string;
  author: string;
  number: number;
  englandTitle: string;
  url: string;
  whoget?: string[]
  major:string;
}


export default function BookCardBox() {
  const [bookss, setBookss] = useState<Tbook[]>([]);

  useEffect(() => {
    getProduct().then((result) => {
      setBookss(result);
    });
  }, []);


  const userbooks: string[]   = useAppSelector((state) => state.isMenu.reserveBook);


  return (
    <div className="flex flex-col flex-grow rounded-lg">
      {bookss.map((item: Tbook) =>
        userbooks?.includes(item.id) ? (
          <BookCard
            key={item.id}
            id={item.id}
            englandTitle={item.englandTitle}
            title={item.title}
            entesharat={item.entesharat}
            author={item.author}
            number={item.number}
            url={item.url}
            major={item.major}
          />
        ) : null
      )}
    </div>
  );
}

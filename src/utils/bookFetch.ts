interface IBook {
  _id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  code: string;
  stock: number;
  category: string;
  status: boolean;
  __v: number;
}

interface IFetchResponse {
  status: string;
  payload: IBook[];
  totalDocs: number;
  totalPages: number;
  prevPage: null | number;
  nextPage: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevLink: null | string;
  nextLink: string;
}

export default async function bookFetch(
  limit: string,
): Promise<IFetchResponse> {
  return await fetch(`http://localhost:8080/api/books?limit=${limit}`)
    .then((res) => res.json() as Promise<{ productData: IFetchResponse }>)
    .then((data) => data.productData);
}

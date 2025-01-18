import { useEffect, useState } from "react";

export const usePagination = <T>(items: T[], itemsPerPage: number = 5) => {
  const [page, setPage] = useState(0);
  const [batches, setBatches] = useState<string[]>([]);
  const [paginatedItems, setPaginatedItems] = useState<T[]>([]);

  useEffect(() => {
    // Create pagination batches
    const createBatches = () => {
      const _batches = Array.from(
        { length: Math.ceil(items.length / itemsPerPage) },
        (_, i) =>
          `${i * itemsPerPage}-${Math.min(
            i * itemsPerPage + itemsPerPage - 1,
            items.length - 1
          )}`
      );
      setBatches(_batches);
    };

    createBatches();
  }, [items, itemsPerPage]);

  useEffect(() => {
    // Update items for the current page
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    setPaginatedItems(items.slice(start, end));
  }, [page, items, itemsPerPage]);

  const handleClickBatch = (batch: string) => {
    const [start] = batch.split("-").map((n) => parseInt(n));
    setPage(start / itemsPerPage);
  };

  const isBatchSelected = (batch: string) => {
    const [start] = batch.split("-").map((n) => parseInt(n));
    return start / itemsPerPage === page;
  };

  return {
    paginatedItems,
    batches,
    handleClickBatch,
    isBatchSelected,
    currentPage: page,
  };
};

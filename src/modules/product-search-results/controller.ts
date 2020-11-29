import { Request, Response } from 'express';
import { createMultipleProducts } from '../products';

export default (req: Request, res: Response) => {
  type ProductSearchQuery = {
    q?: string;
    dataSource?: string;
    page?: string;
  };

  const { q, dataSource, page } = req.query as ProductSearchQuery;
  const params = {
    searchQuery: q || '',
    dataSource: dataSource || '',
    pageNumber: page ? parseInt(page, 10) : 1
  };
  const results = createMultipleProducts(9);
  const productsData = {
    DataSource: params.dataSource,
    ExactMatches: [],
    HasExactMatch: false,
    HasMore: true,
    MergedResults: results,
    Page: params.pageNumber,
    PageSize: 10,
    ResultHeading: 'We couldn\'t find any products matching EWF',
    Results: results,
    SearchQuery: params.searchQuery,
    SimilarResultsHeading: 'Did you mean?',
    Total: 25,
    TotalShowing: results.length,
  };

  // Delay to mirror a real world response
  setTimeout(() => res.send(productsData), 1000);
};

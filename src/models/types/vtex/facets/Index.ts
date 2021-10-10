import Facet from './Facet';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface VtexFacets {
  Departments: Array<Facet>
  Brands: Array<Facet>
  SpecificationFilters: Array<Facet>
  CategoriesTrees: Array<Facet>
  PriceRanges: Array<any>
  Summary: {
    Departments: {
      DisplayedItems: number,
      TotalItems: number,
    },
    CategoriesTrees: {
      DisplayedItems: number,
      TotalItems: number,
    },
    Brands: {
      DisplayedItems: number,
      TotalItems: number,
    },
    PriceRanges: {
      DisplayedItems: number,
      TotalItems: number,
    },
    SpecificationFilters: any,
  },
}

export default VtexFacets;

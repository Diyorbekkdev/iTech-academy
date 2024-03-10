export interface ICategoryFilter {
  label: string;
  value: string | boolean;
}

export const categorPorudctsFilter: ICategoryFilter[] = [
  { label: 'Yangi mahsulotlar', value: 'new' },
  { label: 'Top mahsulotlar', value: 'top' },
  { label: 'B/U', value: 'bu' },
];

interface ICheckbox {
  label: string;
  value: string;
  checked: boolean;
}

export const checkboxes: ICheckbox[] = [
  { label: 'Barchasi', value: 'all', checked: false },
  { label: 'Yangi mahsulotlar', value: 'new', checked: false },
  { label: 'B/U mahsulotlar', value: 'used', checked: false },
  { label: 'Chegirmadagi mahsulotlar', value: 'discounted', checked: false },
];

interface IBrandCheckbox {
  label: string;
  value: string;
  checked: boolean;
}

export const brandCheckboxes: IBrandCheckbox[] = [
  { label: 'Samsung', value: 'samsung', checked: false },
  { label: 'Redmi', value: 'redmi', checked: false },
  { label: 'iPhone', value: 'iphone', checked: false },
  { label: 'Realme', value: 'realme', checked: false },
];


interface IMemoryCheckbox {
  label: string;
  value: string;
  checked: boolean;
}

export const memoryCheckboxes: IMemoryCheckbox[] = [
  { label: '64 GB', value: '64gb', checked: false },
  { label: '128 GB', value: '128gb', checked: false },
  { label: '256 GB', value: '256gb', checked: false },
  { label: '512 GB', value: '512gb', checked: false },
];

interface IRAMCheckbox {
  label: string;
  value: string;
  checked: boolean;
}

export const ramCheckboxes: IRAMCheckbox[] = [
  { label: '4 GB', value: '4gb', checked: false },
  { label: '8 GB', value: '8gb', checked: false },
  { label: '12 GB', value: '12gb', checked: false },
  { label: '16 GB', value: '16gb', checked: false },
];

interface PoItem {
  id: number;
  itemCode: string;
  description: string;
  uom: string;
  supplier: string;
  unitPrice: number;
  quantity: number;
  amount: number;
  soh: number;
}

interface OrderHistoryEntry {
  poNumber: string;
  date: string;
  time: string;
  items: PoItem[];
  status: string;
  user: string;
}

export type { PoItem, OrderHistoryEntry };

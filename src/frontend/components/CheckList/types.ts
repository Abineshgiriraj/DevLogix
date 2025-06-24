export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface ChecklistState {
  items: ChecklistItem[];
}

export interface ChecklistContextType {
  items: ChecklistItem[];
  addItem: (text: string) => void;
  editItem: (id: string, text: string) => void;
  deleteItem: (id: string) => void;
  toggleItem: (id: string) => void;
  clearAll: () => void;
} 
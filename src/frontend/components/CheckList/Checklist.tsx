import React, { useState, useEffect } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ChecklistItem } from './types';
import {
  Container,
  Header,
  Title,
  AddItemForm,
  Input,
  Button,
  List,
  ListItem,
  Checkbox,
  ItemText,
  ButtonGroup,
  IconButton,
  SearchContainer,
  NoItems
} from './CheckListStyles';

const STORAGE_KEY = 'checklist_items';

const Checklist: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [newItemText, setNewItemText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState<{ id: string; text: string } | null>(null);

  // Load items from localStorage on mount
  useEffect(() => {
    const savedItems = localStorage.getItem(STORAGE_KEY);
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItemText.trim()) return;

    const newItem: ChecklistItem = {
      id: Date.now().toString(),
      text: newItemText.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    setItems(prevItems => [...prevItems, newItem]);
    setNewItemText('');
  };

  const toggleItem = (id: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const startEditing = (item: ChecklistItem) => {
    setEditingItem({ id: item.id, text: item.text });
  };

  const saveEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingItem) return;

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === editingItem.id ? { ...item, text: editingItem.text } : item
      )
    );
    setEditingItem(null);
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear all items?')) {
      setItems([]);
    }
  };

  const filteredItems = items.filter(item =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <Title>Checklist</Title>
        <SearchContainer>
          <Input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </Header>

      <AddItemForm onSubmit={addItem}>
        <Input
          type="text"
          placeholder="Add new item..."
          value={newItemText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewItemText(e.target.value)}
        />
        <Button type="submit" disabled={!newItemText.trim()}>
          Add Item
        </Button>
      </AddItemForm>

      {items.length > 0 && (
        <Button
          type="button"
          $variant="danger"
          onClick={clearAll}
          style={{ marginBottom: '1rem' }}
        >
          Clear All
        </Button>
      )}

      <List>
        {filteredItems.length === 0 ? (
          <NoItems>
            {searchTerm ? 'No items match your search' : 'No items in the checklist'}
          </NoItems>
        ) : (
          filteredItems.map(item => (
            <ListItem key={item.id}>
              <Checkbox
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleItem(item.id)}
              />
              {editingItem?.id === item.id ? (
                <form onSubmit={saveEdit} style={{ flex: 1, display: 'flex', gap: '0.5rem' }}>
                  <Input
                    type="text"
                    value={editingItem.text}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                      setEditingItem({ ...editingItem, text: e.target.value })}
                    autoFocus
                  />
                  <Button type="submit" disabled={!editingItem.text.trim()}>
                    Save
                  </Button>
                </form>
              ) : (
                <>
                  <ItemText $completed={item.completed}>{item.text}</ItemText>
                  <ButtonGroup>
                    <IconButton
                      type="button"
                      onClick={() => startEditing(item)}
                      title="Edit item"
                    >
                      <EditOutlined />
                    </IconButton>
                    <IconButton
                      type="button"
                      onClick={() => deleteItem(item.id)}
                      className="delete"
                      title="Delete item"
                    >
                      <DeleteOutlined />
                    </IconButton>
                  </ButtonGroup>
                </>
              )}
            </ListItem>
          ))
        )}
      </List>
    </Container>
  );
};

export default Checklist;

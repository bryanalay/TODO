import { useState } from 'react'

function useLocalStorage(itemName, initialValue) {
    const localStorageItems = localStorage.getItem(itemName);
    let parsedItems;
  
    if (!localStorageItems) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItems = initialValue;
    } else {
      parsedItems = JSON.parse(localStorageItems);
    }
  
    const [item, setItem] = useState(parsedItems);
    
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    };
  
    return [item,saveItem];
  }

export {useLocalStorage}
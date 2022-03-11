import styles from "./ShoppingItems.module.css";

import ShoppingItemList from "./ShoppingitemList";

const Dummy_Items = [
  { id: 1, name: "book1", description: "a good Book", price: 20 },
  { id: 2, name: "book2", description: "a good Book", price: 25 },
  { id: 3, name: "book3", description: "a good Book", price: 28 },
  { id: 4, name: "book4", description: "a good Book", price: 12 }
];

const ShoppingItems = (props) => {
  return (
    <div className={styles.WrapperItemsCard}>
      <ul>
        {Dummy_Items.map((item) => {
          return (
            <ShoppingItemList
              key={item.id}
              item={{
                id: item.id,
                name: item.name,
                price: item.price,
                description: item.description
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingItems;

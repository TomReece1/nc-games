import axios from "axios";

export function getUsers() {
  return fetch("https://em-tr-marketplace-app.herokuapp.com/api/users")
    .then((res) => res.json())
    .then((data) => {
      return data.users;
    });
}

export function deleteItem(item_id) {
  axios.delete(
    `https://em-tr-marketplace-app.herokuapp.com/api/items/${item_id}`
  );
}

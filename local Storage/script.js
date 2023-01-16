const form = document.querySelector(".add-items");
const listItems = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
function addItems(e) {
  e.preventDefault();
  const name = this.item.value;
  //   console.log(name);
  const item = {
    name,
    done: false,
  };
  items.push(item);
  populateList(items, listItems);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `<li>
        <input type= 'checkbox' data-index = ${i} id='items${i}' ${
        plate.done ? "checked" : ""
      }/>
        <label for='items${i}'>${plate.name}</label>
        </li>`;
    })
    .join("");
}

function toggleDone(e) {
  //   console.log(e.target);
  if (!e.target.matches("input")) return;
  const el = e.target;
  //   console.log(el);
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, listItems);
}

form.addEventListener("submit", addItems);
listItems.addEventListener("click", toggleDone);

populateList(items, listItems);

const form = document.getElementById('addForm');
const itemList =document.getElementById('items');
const filter = document.getElementById('filter');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem)

filter.addEventListener('keyup', filterItems)
function addItem(e){
 e.preventDefault();
  console.log(1);
  var newItem = document.getElementById('item').value;
  var li =document.createElement('li');

  li.className='list-group-item';

  li.appendChild(document.createTextNode(newItem));

  itemList.appendChild(li);


  var deleteBtn = document.createElement('button');

  deleteBtn.className='btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('x'));

  li.appendChild(deleteBtn);


  itemList.appendChild(li);
}

function removeItem(e){
if(e.target.classList.contains('delete')){
  if(confirm('Are you sure?')){
    var li = e.target.parentElement;
    itemList.removeChild(li);
  }
}

}
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item');

    var li = document.createElement('li');
}
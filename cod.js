let unuitazs = [];
proverka = false;
function addUnitaz() {
    const Name = document.getElementById('name');
    const Model = document.getElementById('model');
    const Price = document.getElementById('price');

    const name = Name.value.trim();
    const model = Model.value.trim();
    const price = parseInt(Price.value);

    if (!name ||  !model || isNaN(price)) {
        alert('Поля заполнены неправильно');
        return;
    }

    const unit = {
        name: name,
        model: model,
        price: price,
        displayInfo: function () {
            return `Название: ${this.name} Модель: ${this.model} Цена: ${this.price}`;
        }
    };

    unuitazs.push(unit);
    updateUnitList();
    Name.value = '';
    Model.value = '';
    Price.value = '';
}

function deleteUnit(index) {
    unuitazs.splice(index, 1);
    updateUnitList();
}

function editUnit(index) {
    const unit = unuitazs[index];
    const Name = document.getElementById('name');
    const Model = document.getElementById('model');
    const Price = document.getElementById('price');
    if (proverka === false){
      Name.value = unit.name;
      Model.value = unit.model;
      Price.value = unit.price;
    }
    else if (proverka === true){
      const newName = Name.value;
      const newModel = Model.value;
      const newPrice = Price.value;

      if (!newName || !newModel || isNaN(newPrice)) {
          alert('Пожалуйста, правильно заполните все поля.');
          return;
      }

      unit.name = newName;
      unit.model = newModel;
      unit.price = newPrice;
      updateUnitList();
      proverka = false;
      Name.value = '';
      Model.value = '';
      Price.value = '';
      return;
    }
  proverka = true;
}

function updateUnitList() {
    const unitList = document.getElementById('unit-list');
    unitList.innerHTML = '';
    unuitazs.forEach((unit, index) => {
        const li = document.createElement('li');
        li.classList.add('unit-item');
        li.textContent = unit.displayInfo();

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить'
        editButton.classList.add("btm")
        editButton.onclick = function() {
            editUnit(index);
        };
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.classList.add("btm")
        deleteButton.onclick = function() {
            deleteUnit(index);
        };
        li.appendChild(deleteButton);

        unitList.appendChild(li);
    });
}


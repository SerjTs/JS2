function Container() {
	this.id = "";
	this.className = "";
	this.htmlCode = "";
};

Container.prototype.render = function() {
	return this.htmlCode;
};

function Menu(my_id, my_class, my_items) {
	Container.call(this);
	this.id = my_id;
	this.className = my_class;
	this.items = my_items;	
};

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function() {
	let result = '<ul class="' + this.className + '" id="' + this.id + '">';

	for(let item in this.items) {
		if(this.items[item] instanceof MenuItem){
			result += this.items[item].render();
		};
	};

	result += '</ul>'
	return result;
};



function SubMenu(my_id, my_class, my_items) {
	Container.call(this);
	this.id = my_id;
	this.className = my_class;
	this.items = my_items;	
};

SubMenu.prototype = Object.create(Menu.prototype);
SubMenu.prototype.constructor = SubMenu;


Menu.prototype.render = function() {
	let result = '<ul class="' + this.className + '" id="' + this.id + '">';

	for(let item in this.items) {
		if(this.items[item] instanceof MenuItem){
			result += this.items[item].render();
		};
        
        // если обьект - подменю
        if(this.items[item] instanceof SubMenuItem){
			result += '<ul class="' + this.className + '" id="' + this.id + '">';
            
            result += this.items[item].render();
            result += '</ul>'; 
		};
        
        
	};

//// ********************************************************
//    for(let item in this.items) {
//		if(this.items[item] instanceof SubMenuItem){
//			result += this.items[item].render();
//		};
//	};
//// ********************************************************
    
    result += '</ul>'
	return result;
};

// метод remove ищет dom элемент по id и удаляет его
Menu.prototype.remove = function(id_removeItem) {
	let result = '<ul class="' + this.className + '" id="' + this.id + '">';

	for(let item in this.items) {
		if(this.items[item] instanceof MenuItem){
			// проверка на соответствие условия
            console.log (this.items[item]);
            if(this.items[item].id != id_removeItem){
                result += this.items[item].render();
            }
//            result += this.items[item].render();
		};
        
        // если обьект - подменю
        if(this.items[item] instanceof SubMenuItem){
			result += '<ul class="' + this.className + '" id="' + this.id + '">';
            
            if(this.items[item].id != id_removeItem){
                result += this.items[item].render();
            }
                        
            result += '</ul>'; 
		};
        
        
	};

	result += '</ul>'
	return result;
};

function MenuItem(my_id, my_href, my_name) {
	Container.call(this);

    this.id = my_id;
    this.className = "menu-item";
	this.href = my_href;
	this.name = my_name;
};

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function() {
	return '<li class=' + this.className + '>' + this.name + '</li>';
};

let m_item1 = new MenuItem("m_1", "/", "Главная");
let m_item2 = new MenuItem("m_2", "/catalogue", "Каталог");
let m_item3 = new MenuItem("m_3", "/gallery", "Галерея");
let m_items = {0: m_item1, 1: m_item2, 2: m_item3};

//let menu = new Menu("my_menu", "menu_class", m_items);


function SubMenuItem(my_id, my_href, my_name) {
	Container.call(this);

    this.id = my_id;
    this.className = "submenu-item";
	this.href = my_href;
	this.name = my_name;
};


SubMenuItem.prototype = Object.create(Container.prototype);
SubMenuItem.prototype.constructor = SubMenuItem;
SubMenuItem.prototype.render = function() {
	return '<li class=' + this.className + '>' + this.name + '</li>';
};

let sub_m_item1 = new SubMenuItem("s_m_1", "/catalogue/books", "Книги");
let sub_m_item2 = new SubMenuItem("s_m_2", "/catalogue/catalogue/magazines", "Журналы");
let sub_m_item3 = new SubMenuItem("s_m_3", "/gallery", "Newspapers");
//let sub_m_items = {0: sub_m_item1, 1: sub_m_item2, 2: sub_m_item3};

//let submenu = new SubMenu("my_sub_menu", "sub_menu_class", sub_m_items);
// добавляем субменю в меню
m_items = {0: m_item1, 1: m_item2, 2: m_item3, 3: sub_m_item1, 4: sub_m_item2, 5: sub_m_item3}; 

let menu = new Menu("my_menu", "menu_class", m_items);


//document.write(submenu.render());
//document.write(menu.render());

document.write(menu.remove("s_m_1")); //document.write(menu.remove(id_removeItem));

const header= document.getElementById('header');

const menuUrl = "http://127.0.0.1:5500/resources/data/menu.json"

fetchMenu();


function fetchMenu(){

    fetch(menuUrl).then( response=> response.json())
                .then(menuItems=> {

                    appendMenuItem(menuItems);
                    
                });
}



function appendMenuItem(menuItems){

    menuItems.forEach(element => {

        const menuItem = document.createElement("a");
        menuItem.setAttribute('href',element.url)
        menuItem.textContent=element.name;
        header.appendChild(menuItem);
        menuItem.setAttribute('class', 'menu-item');
                       
    });
   
}
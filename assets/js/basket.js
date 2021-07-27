window.addEventListener('load', function (params) {
    let products = JSON.parse(localStorage.getItem('product'))


    let butons = CreateCards(products);
    ChangeProductCount(butons, products);
});

function CreateCards(products) {
    let butons = [];
    let body = document.querySelector('body');

    let section = document.createElement('section');
    let container = document.createElement('div');
    let row = document.createElement('div');

    container.classList.add('container');
    row.classList.add('row');

    body.appendChild(section);
    section.appendChild(container);
    container.appendChild(row);

    products.forEach(product => {

        let col3 = document.createElement('div');
        let card = document.createElement('div');
        let cardHeader = document.createElement('div');
        let cardBody = document.createElement('div');
        let cardFooter = document.createElement('div');
        let minus = document.createElement('a');
        let plus = document.createElement('a');
        let count = document.createElement('h3');
        let image = document.createElement('img');
        let productName = document.createElement('p');
        let productPrice = document.createElement('p');


        col3.classList.add('col-3');
        card.classList.add('card');
        card.setAttribute('data-id', product.id);
        cardHeader.classList.add('card-header');
        cardHeader.classList.add('d-flex');
        cardHeader.classList.add('justify-content-between');
        cardHeader.classList.add('align-items-center');
        cardBody.classList.add('card-body');
        cardFooter.classList.add('card-footer');
        cardFooter.classList.add('d-flex');
        cardFooter.classList.add('justify-content-center');
        // cardFooter.classList.add('align-items-center');
        minus.classList.add('btn');
        minus.classList.add('btn-outline-success');
        minus.classList.add('minus');
        plus.classList.add('btn');
        plus.classList.add('btn-outline-success');
        plus.classList.add('plus');
        count.classList.add('px-3');
        count.classList.add('mb-0');
        count.classList.add('circle');
        count.classList.add('bg-dark');
        count.classList.add('text-light');
        // basketIcon.classList.add('fa-shopping-basket');
        image.classList.add('card-img-top');
        image.setAttribute('src', product.image);
        // basketIcon.classList.add('fa-shopping-basket');
        productName.classList.add('card-text');
        productName.classList.add('mb-0');
        productPrice.classList.add('card-text');

        minus.innerText = '-';
        plus.innerText = '+';
        count.innerText = product.count;
        productName.innerText = product.name;
        productPrice.innerText = product.price;


        col3.appendChild(card);
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
        cardHeader.appendChild(productName);
        cardHeader.appendChild(productPrice);
        // basket.appendChild(basketIcon);
        cardBody.appendChild(image);
        cardFooter.appendChild(minus);
        cardFooter.appendChild(count);
        cardFooter.appendChild(plus);
        row.appendChild(col3);

        butons.push(plus);
        butons.push(minus);

    });
    return butons;

}

function ChangeProductCount(myButons, myProducts) {

    myButons.forEach(myButon => {
        let id = myButon.parentElement.parentElement.getAttribute('data-id');

        myButon.addEventListener('click', () => {

            if (myButon.classList.contains('minus')) {

                if (myProducts.find(p => p.id == id).count == 1) {
                    myProducts = myProducts.filter((el) => {
                        if (!(el.id == id && el.count ==1)) {
                            return el;
                        }
                    });
                }
                else
                {
                    myProducts = myProducts.map((el) => {
                        if (el.id == id) el.count--;
                        return el;
                });
            }
        }
        else{
            if (myProducts.find(p => p.id == id).count != 100) {
                // myProducts = myProducts.filter((el) => {
                //     if (!(el.id == id && el.count ==1)) {
                //         return el;
                //     }
                // });
                myProducts = myProducts.map((el) => {
                    if (el.id == id) el.count++;
                    return el;
            });
            }
          
        }
            localStorage.setItem('product',JSON.stringify(myProducts));
            window.location.reload();
        })
    });
}
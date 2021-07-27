window.addEventListener('load', function (params) {
    let datas = [
        {
            id: 1,
            name: 'Apple Iphone 11',
            price: '1549 AZN',
            image: 'assets/img/phone-1.jpg',
            count: 1
        },
        {
            id: 2,
            name: 'Apple Iphone SE',
            price: '999 AZN',
            image: 'assets/img/phone-2.jpg',
            count: 1
        },
        {
            id: 3,
            name: 'Apple Iphone 11',
            price: '1799 AZN',
            image: 'assets/img/phone-3.jpg',
            count: 1
        },
        {
            id: 4,
            name: 'Apple Iphone 12 Pro',
            price: '2399 AZN',
            image: 'assets/img/phone-4.jpg',
            count: 1
        }
    ]
    
   let baskets = CreateCards(datas);  
  

   
    AddAndRemoveProduct(baskets,datas);


});

function AddAndRemoveProduct(baskets,productDatas){
    let productCount = document.querySelector('#products');
    
    // let products = JSON.parse(localStorage.getItem('product'));
    let products = [];
    baskets.forEach((basket,index) => {
        let isActive = false;
        // And and remove active class        
        basket.addEventListener('click',function(){
            isActive = !isActive;
            if (isActive) basket.classList.add('active');
            else basket.classList.remove('active');     
            
        });    

      
        basket.addEventListener('click',function(){

            if (JSON.parse(localStorage.getItem('product')) == null) {            
                products.push(productDatas.find(x=>x.id==(index+1)));            
               }

               else{
               
                if (products.find(x=>x.id==(index+1))) {
                    console.log('no');
                   products = products.filter((el)=>{
                        if (el.id != (index+1)) {
                            return el;
                        }
    
                        
                    })
                    console.log(products);
                }
                else{
                    products.push(productDatas.find(x=>x.id==(index+1)));         
                }
               }

           localStorage.setItem('product',JSON.stringify(products));
           productCount.innerText = JSON.parse(localStorage.getItem('product')).length;
        }); 

    });

}

function CreateCards(datas) {

    let body = document.querySelector('body');
    let baskets = [];

    let section = document.createElement('section');
    let container = document.createElement('div');
    let row = document.createElement('div');

    container.classList.add('container');
    row.classList.add('row');

    body.appendChild(section);
    section.appendChild(container);
    container.appendChild(row);

    datas.forEach(data => {
       
        let col3 = document.createElement('div');
        let card = document.createElement('div');
        let cardHeader = document.createElement('div');
        let cardBody = document.createElement('div');
        let cardFooter = document.createElement('div');
        let basket = document.createElement('a');
        let basketIcon = document.createElement('i');
        let image = document.createElement('img');
        let productName = document.createElement('p');
        let productPrice = document.createElement('h4');

       
        col3.classList.add('col-3');
        card.classList.add('card');
        cardHeader.classList.add('card-header');
        cardHeader.classList.add('d-flex');
        cardHeader.classList.add('justify-content-between');
        cardHeader.classList.add('align-items-center');
        cardBody.classList.add('card-body');
        cardFooter.classList.add('card-footer');
        cardFooter.classList.add('d-flex');
        cardFooter.classList.add('justify-content-center');
        basket.classList.add('btn');
        basket.classList.add('btn-outline-success');
        basketIcon.classList.add('fas');
        basketIcon.classList.add('fa-shopping-basket');
        image.classList.add('card-img-top');
        image.setAttribute('src', data.image);
        basketIcon.classList.add('fa-shopping-basket');
        productName.classList.add('card-text');
        productName.classList.add('mb-0');
        productPrice.classList.add('card-text');       
        productPrice.classList.add('rounded-pill');

        productName.innerText = data.name;
        productPrice.innerText = data.price;

       
        col3.appendChild(card);
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
        cardHeader.appendChild(productName);
        cardHeader.appendChild(basket);      
        basket.appendChild(basketIcon);
        cardBody.appendChild(image);
        cardFooter.appendChild(productPrice);
        row.appendChild(col3);

baskets.push(basket);

    });

    return baskets;
}


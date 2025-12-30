//http://localhost:3000/items

/*const SearchInput=document.querySelector(".input");

let AllproductData=[];

let Filters={
    SearchItems:"",
}

document.addEventListener("DOMContentLoaded",()=>{

    axios.get("http://localhost:3000/items")
    .then((res)=>{
        AllproductData=res.data;
        //render product on dom
        RenderProducts(res.data,Filters)
    })
    .catch((err)=>{
        console.log(err);
        
    })
})

//render product function

function RenderProducts(_products,_filters){
    
   const FilteredProducts= _products.filter((p)=>{

        return p.title.toLowerCase().includes(_filters.SearchItems.toLowerCase())
    })

    console.log(FilteredProducts);
    
}

SearchInput.addEventListener("input",(e)=>{

    Filters.SearchItems=e.target.value;

    RenderProducts(AllproductData,Filters);

})*/

const productcontainer=document.querySelector(".content");
const filteritems=document.querySelectorAll(".filter-item")

let filters={
    searchitems:""
}
let allproductsdata=[];

document.addEventListener("DOMContentLoaded",()=>{

    axios.get("http://localhost:3000/items")
    .then((res)=>{

        allproductsdata=res.data;

        RenderProducts(res.data,filters)
    })
})

function RenderProducts(products,filters) {
    
    const filteredproducts=products.filter((p)=>{

        return p.title.toLowerCase().includes(filters.searchitems.toLowerCase())

    })

console.log(filteredproducts);

//render to dom 

productcontainer.innerHTML="";

filteredproducts.forEach((item,index) => {
    
    //create content append to dom

    const divcontent=document.createElement("div");
    divcontent.classList.add("cart")
    divcontent.innerHTML=`
    
    <div class="img-container">
            <img src="${item.img}" alt="p-${item.index}" class="">
            </div>
            <div class="cart-footer">

                <div>
                <p class="title-product">${item.title}</p>

                <p class="price">${item.price}</p>
                </div>
                <button type="button" class="btn">add to cart</button>

            </div>
    `
    productcontainer.appendChild(divcontent)
});


}

const searchinput=document.querySelector(".input")

searchinput.addEventListener("input",(event)=>{

    filters.searchitems=event.target.value;

    RenderProducts(allproductsdata,filters)
})

//filter items

filteritems.forEach((item)=>{

    item.addEventListener("click",(event)=>{

        const filter=event.target.dataset.filter;
        filters.searchitems=filter;
        RenderProducts(allproductsdata,filters)
    })
})




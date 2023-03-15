let food=[
    {
        name:"SS Hyderabad Briyani",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bwkfac2r3bpphgfm7rh9",
        cuisine:"Biriyani, North Indian",
        location:"Parrys Corner, George Town | Change Outlet ",
        starmins:"41 MINS",
        rate:"₹400 FOR TWO",
        rating:"4.4",
        offer:"50% off | Use WELCOME50",
    },
    {
        name:"A2B - Adyar Ananda Bhavan",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cyxyhx6wzgi9ogyapxym",
        cuisine:"South Indian, North Indian",
        location:"Purasai High Road, Purasaiwakkam | Change Outlet  ",
        starmins: "24 MINS",
        rate:"₹300 FOR TWO",
        rating:"4.5",
        offer:"50% off | Use WELCOME50",
    },
    {
        name:"Paradise Biryani",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/u2aycylttqjfrcs4clzb",
        cuisine:"Biryani, Kebabs",
        location:"Thanikachalam Road, T. Nagar | Change Outlet  ",
        starmins: "34 MINS",
        rate:"₹500 FOR TWO",
        rating:"4.2",
        offer:"50% off | Use WELCOME50",
    },
    {
        name:"Sangeetha Veg Restaurant",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/oodghmivnc6bxnbrvzzw",
        cuisine:"North Indian, Chinese",
        location:"Gandhi Irwin Rd, Egmore | Change Outlet  ",
        starmins: "44 MINS",
        rate:"₹200 FOR TWO",
        rating:"3.9",
        offer:"50% off | Use WELCOME50",
    },
    {
        name:"Salem RR Biriyani Unavagam",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ny8kj6b4mltw140wil1l",
        cuisine:"Biryani, Chettinad",
        location:"Egmore, Triplicane | Change Outlet ",
        starmins: "30 MINS",
        rate:"₹350 FOR TWO",
        rating:"4.0",
        offer:"50% off | Use WELCOME50",
    },
    {
        name:"Burger King",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zggqzcw1muhht6tkwuba",
        cuisine:"Burgers, American",
        location:"Express Avenue, Thousand Lights | Change Outlet ",
        starmins: "41 MINS",
        rate:"₹250 FOR TWO",
        rating:"4.4",
        offer:"50% off | Use WELCOME50",
        
    }
]
    let continer=document.querySelector(".container");

    let cards=document.createElement("div");
    cards.classList.add("row");
    continer.appendChild(cards);
    food.forEach(e=>{
        let div=document.createElement("div");
        div.classList.add("col");
        cards.appendChild(div);

        let div2=document.createElement("div");
        div2.classList.add("col-card");
        div.appendChild(div2);

        let img=document.createElement("img");
        img.src=e.image;
        div2.appendChild(img);

        let head=document.createElement("h3");
        head.innerHTML=e.cuisine;
        div2.appendChild(head);

        let para=document.createElement("p");
       para.innerHTML=e.location;
        div2.appendChild(para);


        let div3=document.createElement("div");
        div3.classList.add("icon-row")
        div2.appendChild(div3);


        let icowrap=document.createElement("i");
        icowrap.classList.add("fa");
        icowrap.classList.add("fa-star");
        div3.appendChild(icowrap);

        icowrap.innerHTML=e.rating;

        let dot=document.createElement("span");
        dot.innerHTML=".";
        div3.appendChild(dot);
        
        let time=document.createElement("span");
        time.innerHTML=e.starmins;
        div3.appendChild(time);

    
        let dot2=document.createElement("span");
        dot2.innerHTML=".";
        div3.appendChild(dot2);

        let rate=document.createElement("span");
        rate.innerHTML=e.rate;
        div3.appendChild(rate);

        let div4=document.createElement("div");
            div4.classList.add("percent");
            div2.appendChild(div4);

        let icon=document.createElement("i");
        icon.classList.add("fa");
        icon.classList.add("fa-percent");
        div4.appendChild(icon);


        let offer=document.createElement("span");
        offer.innerHTML=e.offer;
        div4.appendChild(offer);
        
        

        let addCart=document.createElement("div");
        addCart.classList.add("addCart");
        div4.appendChild(addCart);
    
        let cartLabel=document.createElement("div");
        cartLabel.classList.add("cartLabel");
        addCart.appendChild(cartLabel);
        cartLabel.innerHTML="ADD TO CART"
    
        let cartInp=document.createElement("div");
        cartInp.classList.add("cartInp");
        addCart.appendChild(cartInp);
    
        let minus=document.createElement("button");
        minus.setAttribute("id","btn1");
        minus.innerHTML="-";
        cartInp.appendChild(minus);
        
        minus.addEventListener("click",function(){
            if(input1.value>0){
                --input1.value
            }
        })
    
        let input1=document.createElement("input");
        input1.setAttribute("type","text");
        input1.setAttribute("id","number");
        input1.value=0;
        cartInp.appendChild(input1);
    
        let plus=document.createElement("button");
        plus.setAttribute("id","btn2");
        plus.innerHTML="+ ";
        cartInp.appendChild(plus);

        plus.addEventListener("click",function(){
            ++input1.value
        })
    })
    /*
    let btn1=document.getElementById("btn1");
    let btn2=document.getElementById("btn2");
    btn1.addEventListener("click", myFunction);
    btn2.addEventListener("click", myFunction1);
    
    function myFunction(){
        let a=document.getElementById("number").value;
        if(a>0){
            a--;
        }
        document.getElementById("number").value=a;
    }
    function myFunction1(){
       let a=document.getElementById("number").value;
        a++;
        document.getElementById("number").value=a;
    }
    
*/
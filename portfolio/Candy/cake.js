
let Cakes = {
    cake1: {
        img: "http://lookw.ru/1/186/1380317269-tortiki-ch2--12.jpg",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 130,
        bestseller: true,
    },
    cake2: {
        img: "http://pngimg.com/uploads/chocolate_cake/chocolate_cake_PNG25.png",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 30,
        bestseller: true,
    },
    cake3: {

        img: "https://i.pinimg.com/originals/21/06/34/21063440ea86425a918188743860971f.jpg",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 450,
        bestseller: false,
    },
    cake4: {
        img: "https://static8.depositphotos.com/1449693/983/i/380/depositphotos_9837831-stock-photo-beautiful-wedding-cake-with-pink.jpg",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 180,
        bestseller: true,
    },
    cake5: {
        img: "https://christian.fr/wp-content/uploads/2018/10/13.png",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 45,
        bestseller: false,
    },
    cake6: {
        img: "http://pluspng.com/img-png/chocolate-cake-png-hd-chocolate-cake-png-425.png",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 70,
        bestseller: false,
    },
    cake7: {
        img: "https://sitejerk.com/images/chocolate-cake-png-18.png",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 95,
        bestseller: false,
    },
    cake8: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjxPWWTJlz27BcKrCgFA_9kajetuJGCSDwySC30y8YVJ-JGWy",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 56,
        bestseller: false,
    },
    cake9: {
        img: "https://sitejerk.com/images/chocolate-cake-png-18.png",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 99,
        bestseller: true,
    },
    cake10: {
        img: "https://www.pngkey.com/png/full/252-2520313_cake-chocolate-black-forest-cake-designs.png",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 110,
        bestseller: false,
    },
    cake11: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1Y0pcceU6Io7FUn-mFJUU7AqjzoABFvlVyNnLxhIvqnvX4-G",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 250,
        bestseller: true,
    },
    cake12: {
        img: "https://image.shutterstock.com/z/stock-photo-a-beautiful-cake-on-a-white-background-218276350.jpg",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 63,
        bestseller: false,
    },
    cake13: {
        img: "http://pluspng.com/img-png/cake-hd-png-wedding-cake-png-500.png",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 86,
        bestseller: true,
    },
    cake14: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUO20gHVMxroGIjFhu2J4fOnvvksxjTo2p4t9b2ljJ_Q1Rz-ys",
        Composition: "Sugar, Eggs, Milk, Raisins, pounds, Currants, pound, Citron, pound, Grated nutmeg",
        price: 75,
        bestseller: true,
    },
    
};
var allcakes = document.getElementsByClassName('cakes');
var AllCakeImg = document.getElementsByClassName('cakeimg');
var Allcakeprices = document.getElementsByClassName('price');
var Allcakesbestseller = document.getElementsByClassName('bestseller');
let i = 0;
for (let keys in Cakes) {
    AllCakeImg[i].src = Cakes[keys].img;
    Allcakesbestseller[i].src = isbestseller(Cakes[keys].bestseller);
    Allcakeprices[i].innerHTML = "price : " + Cakes[keys].price + "$";
    i++;
}
let arrprice = [];
for (let key in Cakes) {
    arrprice.push(Cakes[key].price);
}

function isbestseller(bool) {
    if (bool) {
        return "./bestseller.png";
    } else {
        return "";
    }
}

function sorting(obj) {
    let val = document.getElementById('sel').options[document.getElementById('sel').selectedIndex].value;
    let h = -1;
    for (let key in obj) {
        h++;

        allcakes[h].style.display = 'block';

    }
    if (val === "asc") {
        arrprice.sort(function (a, b) { return a - b })

    } else if (val === "desc") {
        arrprice.sort(function (a, b) { return b - a })
    } else if (val === "bestseller") {
        let h = -1;
        for (let key in Cakes) {
            h++;
            if (!Cakes[key].bestseller) {
                allcakes[h].style.display = 'none';
            } else {
                allcakes[h].style.display = 'block';
            }
            let i = 0;
            for (let keys in Cakes) {
                AllCakeImg[i].src = Cakes[keys].img;
                Allcakesbestseller[i].src = isbestseller(Cakes[keys].bestseller);
                Allcakeprices[i].innerHTML = "price : " + Cakes[keys].price + "$";
                i++;
            }
        } return;
    }

    let arrkeys = [];
    for (let k = 0; k < arrprice.length; k++) {
        for (let key in Cakes) {

            if (Cakes[key].price == arrprice[k]) {
                arrkeys.push(key);
                break;
            }
        }
    }

    for (let i = 0; i < arrkeys.length; i++) {
        AllCakeImg[i].src = Cakes[arrkeys[i]].img;
        Allcakesbestseller[i].src = isbestseller(Cakes[arrkeys[i]].bestseller);
        Allcakeprices[i].innerHTML = "price : " + Cakes[arrkeys[i]].price + "$";
    }
}
// window.onscroll = function(){
//     var scrollTop = window.pageYOffset;
//     // console.log(scrollTop);
//     var headerHeight = document.getElementById("header").offsetHeight;
//     var menuLi = document.querySelectorAll(".menu > li > a");
    
//     for (let i = 0; i < menuLi.length; i++) {
//         const aTag = menuLi[i];
//         var hrefAttribute = aTag.getAttribute("href");
        
//         if(hrefAttribute != "#"){
//             var idByTag = document.querySelector(hrefAttribute);
            
//            var sizeTop = idByTag.offsetTop - headerHeight; 
//            if (scrollTop > sizeTop) {
//             for (let j = 0; j < menuLi.length; j++) {
//                 menuLi[j].parentElement.className = "";
//             }
//             aTag.parentElement.className = "active";
//         }
//         }
        
//     }
// }


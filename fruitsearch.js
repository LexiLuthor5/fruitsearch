const fruits = ["Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry", "Boysenberry",
     "Cherry", "Coconut", "Cranberry", "Cucumber", "Currant", "Date", "Dragonfruit", "Durian", 
     "Elderberry", "Feijoa", "Fig", "Gooseberry", "Grape", "Grapefruit", "Guava", "Honeydew",
      "Huckleberry", "Jackfruit", "Kiwi", "Kumquat", "Lemon", "Lime", "Lychee",
       "Mango", "Marionberry", "Melon", "Mulberry", "Nectarine", "Orange",
        "Papaya", "Passionfruit", "Peach", "Pear", "Persimmon", "Pineapple",
         "Plum", "Pomegranate", "Raspberry", "Strawberry", "Tangerine", "Watermelon"];

         const searchBar=
         document.getElementById('searchBar');
         const suggestions=
         document.getElementById('suggestions');

         searchBar.addEventListener('keyup', function(){
            const input=searchBar.value.toLowerCase();
            suggestions.innerHTML='';
            if(input){
                const filteredFruits=fruits.filter(fruit=>
                    fruit.toLowerCase().includes(input)
                    );
                    filteredFruits.forEach(fruit=>{
                        const li =document.createElement('li');
                        li.textContent=fruit;
                        suggestions.appendChild(li);
                    });
            }
         });

         suggestions.addEventListener('click',function(e){
             if(e.target.tagName==='LI'){
                 searchBar.value=e.target.textContent;
                 suggestions.innerHTML='';
             }
         });

         suggestions.addEventListener('mouseover',function(e){
            if(e.target.tagName==='LI'){
                const items=suggestions.querySelectorAll('li');
                items.forEach(item=> item.classList.remove('highlighted'));
                e.target.classList.add('highlighted');
            }
            });
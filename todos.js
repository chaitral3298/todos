var addButton = document.getElementById('add');
	
function addItem(){                     
    var item = document.getElementById('input').value;        
    if (item == '') {    
        msg= "Enter your Task";
        alert(msg);
    } else {                       
       
        var ul = document.getElementById('list');
        var li = document.createElement('li');
        var x = document.createElement('input');
        x.type = 'checkbox'  ;
        x.setAttribute('id','check') ;
       
        var label = document.createElement('label');
     
        ul.appendChild(label);                      
        li.appendChild(x);
        label.appendChild(document.createTextNode(item));
    
        li.appendChild(label);
        
        ul.insertBefore(li, ul.childNodes[0]);
        
        li.className = 'visual';

      document.getElementById('input').value="";        
    }
}
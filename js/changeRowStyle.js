/*隔行变色函数*/ 
function stripeTables(){
    var oTab = document.getElementsByTagName('table');
    var odd, rows;

    for(var i=0; i<oTab.length; i++){
        odd = false;
        rows = oTab[i].getElementsByTagName('tr');
        for(var j=0; j<rows.length; j++){
            if(odd == true){
                rows[j].style.backgroundColor = '#ffc';
                odd = false;
            }
            else{
                odd = true;
            }
        }
    }
}

/*鼠标移上改变文字样式*/
function fontStyle(){
    var rows = document.getElementsByTagName('tr');
    //console.log(rows);
    for(var i=0; i<rows.length; i++){
        rows[i].onmouseover=function(){
            this.style.fontWeight = 'bold';
            //alert("mission complete!")
        };
        rows[i].onmouseout=function(){
            this.style.fontWeight = 'normal';
        };
    }
} 


/*公共函数*/
function addonloadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }
    else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

/*页面加载完成后，执行多个函数*/
addonloadEvent(stripeTables);
addonloadEvent(fontStyle);


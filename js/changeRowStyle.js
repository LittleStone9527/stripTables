/*隔行变色函数*/ 
//思路：1、找出table，2、对每个table元素创建odd变量且初始化为false，3、遍历表格所有数据行，
//若odd为true，设置样式，且把odd改为false；若odd为false，不设置任何样式，但要把odd修改为false

function stripeTables(){
    var oTab = document.getElementsByTagName('table');
    var odd, rows;

    for(var i=0; i<oTab.length; i++){
        odd = false;
        rows = oTab[i].getElementsByTagName('tr');
        for(var j=0; j<rows.length; j++){
            if(odd == true){
                rows[j].style.backgroundColor = '#ffc';
                // addClass函数
                // addClass(rows[j],"odd");
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
            this.className="mouseover";
            // alert("mission complete!")
            // console.log(this);
            // 现在利用addClass函数追加一些样式
            addClass(this,"style1");
        };
        rows[i].onmouseout=function(){
            this.className="mouseout";
        };
    }
} 

/*添加追加样式的函数*/
function addClass(elem,value){
    if (!elem.className) {
        elem.className = value;
    }
    else{
        var newClassname = elem.className;
        newClassname += " ";
        newClassname += value;
        elem.className = newClassname;
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


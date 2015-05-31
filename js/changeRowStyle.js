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

//显示缩略语具体内容函数
function displayAbbr(){
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;

    var aAbbr = document.getElementsByTagName("abbr");

    if (aAbbr.length<1) return false;
    //定义数组存储查找结果；
    var def = new Array();
    for(var i=0; i<aAbbr.length; i++){
        //这是IE6的一个bug，下面的语句表示，当前元素如果没有子节点，就退出本次循环，立即执行下一次循环。
        if(aAbbr[i].childNodes.length < 1) continue;
        var Title = aAbbr[i].firstChild.nodeValue;

        var Title_value = aAbbr[i].getAttribute("title");

        def[Title] = Title_value;//一个title对应一个缩略语

    }
    //创建定义列表dl，来承载title值和缩略语
    var dlist = document.createElement("dl");
    for (Title in def){
        var Title_value = def[Title];

        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(Title);
        dtitle.appendChild(dtitle_text);

        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(Title_value);
        ddesc.appendChild(ddesc_text);

        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length < 1) return false;
    //创建标题
    var oH2 = document.createElement("h2");
    var H2_text = document.createTextNode("缩略语列表");
    oH2.appendChild(H2_text);

    //var oBody = document.getElementsByTagName("body")[0];
    //把标题添加到页面主体
    document.body.appendChild(oH2);
    //把定义列表添加到页面主体
    document.body.appendChild(dlist);

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
addonloadEvent(displayAbbr);


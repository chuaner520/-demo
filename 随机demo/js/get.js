function Get(){
    var xmlhttp;
    var Mac,Sn,DeviceId 
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("id1").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","http://api.btstu.cn/yan/api.php",true);
    xmlhttp.send();

}

function Gets(){
    var xmlhttp;
    var Mac,Sn,DeviceId 
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("id1").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","https://autumnfish.cn/api/joke",true);
    xmlhttp.send();

}

function Getss(){
    var xmlhttp;
    var Mac,Sn,DeviceId 
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            document.getElementById("id1").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET","https://api.oddfar.com/yl/q.php?c=2004&encode=text",true);
    xmlhttp.send();

}

function copyContent(ElementObj){
    var clickContent = ElementObj.innerText;         
    var inputElement =  document.getElementById("copy_content");
    inputElement.value = clickContent;
    inputElement.select();
    document.execCommand("Copy");
    alert('复制成功');
}

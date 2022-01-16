// console.log(document.body)

var axy_div = document.getElementById("axy")
var href_elem = axy_div.getElementsByTagName("a")
if (href_elem.item("href").href != "https://axy.party/"){
    var redir_elem = document.createElement('div');
    redir_elem.style = "padding-left:48px"
    redir_elem.textContent = "<-- Redirects to " + href_elem.item("href").href
    axy_div.appendChild(redir_elem)

}
if(document.scripts.length != 2){
    var add_scripts_to = document.getElementsByClassName("entry")
    for(var i=2;i<document.scripts.length;i++){

        var script_text = document.scripts[i].innerText
        //TODO
        // parse scripts to extract function name and console.logs
        var script_desc = document.createElement("p")
        script_desc.textContent = script_text
        add_scripts_to[0].appendChild(script_desc)
    }

}

function recupererRecherche() {
    recherche = document.getElementById("recherche")
    resultatRecherche = recherche.value
}

var bouton = document.getElementById("bouton")
var timesClicked = 0


$('#bouton').on("click", function() {
    timesClicked++


    if(timesClicked > 1 /*&& dataAll[1].length  10*/) {
        $.ajax({
            url: 'https://fr.wikipedia.org/w/api.php?action=opensearch&search=' + resultatRecherche,
            dataType: 'jsonp',
            success: function(data2) {
                //console.log(data2)
                    for(var i = 0; i < data2[1].length; i++) {
                        if(data2[1].length != 0) {
                            let allPagesdiff = data2[1][i]
                            //console.log(data2)
                            aDoc = document.getElementsByClassName("class" + [i])
                            //console.log(aDoc)
                           $(aDoc).html(allPagesdiff)
                           for(var x = 0; x < 1; x++) {
                            let allPages2 = data2[3][i]
                            pDoc = document.getElementsByClassName("classP" + [i])
                            $(pDoc).html(allPages2)
                        }
                        }
                       else {
                           console.log("erreuuur")
                       } 
                    }
                }
                
        });
    }
    else {
        $.ajax({
            url: 'https://fr.wikipedia.org/w/api.php?action=opensearch&search=' + resultatRecherche,
            dataType: 'jsonp',
            success: function(data) {
               // console.log(data)
                for(var i = 0; i < data[1].length; i++) {
                    if(data[1].length != 0) {
                        let allPages = data[1][i]
                        //console.log(allPages)
                        div = document.createElement('div')
                        a = document.createElement('a')
                        a.className = "class" + [i]
                        a.innerHTML = allPages
                        a.title = allPages;
                        for(var x = 0; x < 1; x++) {
                            let allPages2 = data[3][i]
                            a.setAttribute("href", allPages2)
                            p = document.createElement('p')
                            p.className = "classP" + [i]
                            linkUrl = document.createTextNode(allPages2)
                            p.appendChild(linkUrl)
                        }
                        div.appendChild(a)
                        div.appendChild(p)
                        document.body.appendChild(div);
                    }
                   else {
                       console.log("erreuuur")
                   } 
                }
            }
        });
    }
    
})




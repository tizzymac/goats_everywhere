console.log("The goats have arrived")

if (typeof browser === "undefined") {
    var browser = chrome;
}

var images = document.getElementsByTagName('img')

for (elt of images){
   elt.src = `${browser.runtime.getURL("pp.jpg")}`
   elt.srcset = `${browser.runtime.getURL("pp.jpg")}`
   elt.alt = 'GOAT!'
}

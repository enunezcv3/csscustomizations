console.log('connectons_sq loaded');
if(typeof(dojo) != "undefined") {
    dojo.place(
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/customizer/customization.css?repoName=csscustomizations-global\"></link>",
        dojo.doc.head,
        "last"
    );
}
console.log('connectons_sq finished');
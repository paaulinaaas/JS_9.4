
function drawTree(rows) {
  // pętla, która drukuje wiersze
  for (var i = 1; i <= rows; i++) {
    // po każdym obrocie pętli resetujemy zmienną, która 
    // ma w sobie ilość gwiazdek z poprzedniego wiersza
    var star = "";
    
    
    // pętla odpowiadająca za dodanie spacji]
    for (var j = 0; j < rows - i; j++) {
      star += ' ';
    }
    
    
    for (var k = 0; k < i * 2 - 1; k++) {
      // obliczamy (dopisujemy) ile gwiazdek
      // ma być w danym wierszu
      star += "*";
    }
    // po każdym obrocie pętli (odpowiadającej za wiersze)
    // drukuje rezultat
    console.log(star);
  }
}
  
// wywołanie funkcji   
drawTree(5);
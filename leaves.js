const SIZE_FRONT = 100;
const SIZE_BACK = 70;

// generates random number between 0 and 100
const randint = () => {
    return Math.round(Math.random() * 100)
}

const leaf = (size) => {
    // random choice if the leaf is horizontal or vertical
    const vert_hor = ( randint() > 50 ? "vert" : "hor"  );
    var style = ""; 
    const rate = 0.3 // rate height:width

    if (vert_hor == "vert") { // veryical leaf
        // coordinates in % 0-100%
        const x1 = randint(), x3 = randint(), med = (x1 + x3) / 2;
        const x2 = Math.round(med + (randint()-med)*rate), y2 = randint(); 
        const x4 = Math.round(med + (randint()-med)*rate), y4 = randint();

        // points of polygon
        const point1 = `${x1}% 0%`
        const point2 = `${x2}% ${y2}%`
        const point3 = `${x3}% 100%`
        const point4 = `${x4}% ${y4}%`
        style = `polygon(${point1}, ${point2}, ${point3},${point4})`;
    } else { // horizontal leaf

        // coordinates 0-100%
        const y1 = randint(), y3 = randint(), med = (y1 + y3) / 2;
        const x2 = randint(), y2 = Math.round(med + (randint() - med) * rate); 
        const x4 = randint(), y4 = Math.round(med + (randint() - med) * rate);

        const point1 = `0% ${y1}%`
        const point2 = `${x2}% ${y2}%`
        const point3 = `100% ${y3}%`
        const point4 = `${x4}% ${y4}%`
        style = `polygon(${point1}, ${point2}, ${point3},${point4})`;   
    }
    return `<div class="leaf" style="clip-path:${style};"></div>`
}

const leaves = () => {
    let html = "";
    html += leaf(SIZE_FRONT);
    // html += '<div class="leaf">hi</div>'
    console.log(html);
    return html;
}

const element = document.getElementById("leaves");
element.innerHTML = leaves()
console.log(element.innerHTML)


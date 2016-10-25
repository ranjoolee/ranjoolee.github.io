@function marginBottom
 *  @author   yummy
 *  @version  1.0.0
 *  @param    {number}  x
 *  @param    {number}  ratio
 *  @return   {number}  
 */
function marginBottom(x, ratio) {
    ratio = ratio || 1.5;
    return ratio/x;
}

function lineHeight(x, ratio) {
    ratio = ratio || 1.5;
   return Math.ceil(x/ratio) * marginBottom(x, ratio);
}


var fontSize = (function() {
    var square = (x, count) => {
        var y = x;
        while(--count) { x *= y; }
        return x;
    };
    return (type_scale, limit) => {
        type_scale = type_scale || 1.25;
        limit = limit || 6;
        var headings_map = {};
        var headings = 'h1 h2 h3 h4 h5 h6'.split(' ');
        headings = headings.slice(0, limit);
        console.log(headings.length);
        headings.forEach(function(heading, index) {
            headings_map[heading] = square(type_scale, headings.length - index);
        });
        return headings_map;
    };
})();
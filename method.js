function triangle_method(a, b, N) {
    var x = 0;
    var S = 0;
    var h = (b - a)/N;
    for(var i = 0;i < N;i++) {
    	x = a + h * (i + 1/2);
    	S += f(x) * h;
    }

    return S;
}

//-----------------------------------------

function trapezdoidal_rule(a, b, N) {
    var S = 0;
    var x1 = 0;
    var x2 = 0;

    var h = (b - a)/N;
    for(var i = 0;i < N;i++) {
    	x1 = a + h * i;
    	x2 = a + h * (i + 1);
    	S += (f(x1) + f(x2)) * h/2;
    }

    return S;
}

//-----------------------------------------

function simpson_method(a, b, N) {
    var S = 0;
    var x1, x2, x12;
    var h = (b - a)/N;


    for(var i = 0;i < N;i++) {
    	x1 = a + h * i;
    	x2 = x1 + h;
    	x12 = (x1 + x2)/2;
    	S += (f(x1) + 4 * f(x12) + f(x2)) * h/6;
    }

    return S;
}

function f(num){
    var node = math.parse(document.getElementById('eq').value);

    let scope = {x: num};
    return node.compile().eval(scope);
}

function d_derivative(num, i) {
    // f - string
    var f = math.parse(document.getElementById('eq').value);
    if(i)
        return math.derivative(math.derivative(f, 'x'), 'x').eval({x:num});
    else
        return math.derivative(math.derivative(math.derivative(f, 'x'), 'x'), 'x').eval({x:num});
}

function get_maximum(a, b, bool) {
    var max = d_derivative(a,bool);
    var cur;
    for(var i = a + 0.1;i <= b;i+= 0.1) {
        cur = d_derivative(i,bool);
        if(cur > max) {
            max = cur;
        }
    }

    return Math.abs(max);
}

function triangle_error(a, b, h=0.01) {
    var max = get_maximum(a, b, true);

    return max *(b - a) * h / 24;
}

function trapezdoidal_error(a, b, h=0.01) {
    var max = get_maximum(a, b, true);

    return max *(b - a) * Math.pow(h, 2) / 12;
}

function simpson_error(a, b, h=0.01) {
    var max = get_maximum(a, b, false);

    return max *(b - a) * Math.pow(h, 3) / 288;
}

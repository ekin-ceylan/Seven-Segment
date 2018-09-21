function panelEkle(parent, adet, pid) {

    var panel = div().addClass('panel');
    parent.appendChild(panel);
    panel.setAttribute('id', pid)

    for (var i = 1; i <= adet; i++) {
        var digit = div().addClass('digit');
        panel.appendChild(digit);

        for (var j = 1; j <= 7; j++) {
            var segment = div();
            digit.appendChild(segment)
            var dvTop = div();
            var dvBottom = div();
            var golgeHor = div();

            if (j == 1 || j == 4 || j == 7) {
                segment.addClass("segmentHor")
                dvTop.addClass("dvTop");
                dvBottom.addClass("dvBottom");
                golgeHor.addClass("golgeHor");
            }
            else {
                segment.addClass("segmentVer")
                dvTop.addClass("dvLeft");
                dvBottom.addClass("dvRight");
                golgeHor.addClass("golgeVer");
            }

            segment.appendChild(dvTop);
            segment.appendChild(dvBottom);
            segment.appendChild(golgeHor);
        }
    }
}

function load(w, a) {
    let seg;
    let h = w / a;
    let l = w - 9 * h;
    let H = 2 * l + 12 * h;
    let g = Math.round(0.5 * h);

    let btw = 'border-top-width: ';
    let bbw = 'border-bottom-width: ';
    let blw = 'border-left-width: ';
    let brw = 'border-right-width: ';
    let br = 'border-radius: ';
    let bs = 'box-shadow: ';

    setCssByClass('digit', 'width: ' + w + 'px; height: ' + H + 'px;');
    setCssByClass('segmentHor', 'width: ' + w + 'px; height: ' + (6 * h) + 'px;');
    setCssByClass('segmentVer', 'width: ' + (6 * h) + 'px; height: ' + (H / 2 + 3 * h) + 'px;');
    setCssByClass('dvLeft', btw + h + 'px; ' + bbw + h + 'px; ' + blw + h + 'px; height: ' + (H / 2 - 6 * h) + 'px;');
    setCssByClass('dvRight', btw + h + 'px; ' + bbw + h + 'px; ' + brw + h + 'px; height: ' + (H / 2 - 6 * h) + 'px;');
    setCssByClass('dvTop', btw + h + 'px; ' + blw + h + 'px; ' + brw + h + 'px; width: ' + (w - 9 * h) + 'px;');
    setCssByClass('dvBottom', bbw + h + 'px; ' + blw + h + 'px; ' + brw + h + 'px; width: ' + (w - 9 * h) + 'px;');
    setCssByClass('golgeVer', br + h + 'px; ' + bs + 'red 0px 0px ' + (5 * g) + 'px ' + g + 'px; height: ' + (l + h) + 'px; width: ' + (1.6 * h) + 'px;');
    setCssByClass('golgeHor', br + h + 'px; ' + bs + 'red 0px 0px ' + (5 * g) + 'px ' + g + 'px; width: ' + (l + h) + 'px; height: ' + (1.6 * h) + 'px;');
}

function yaz(sayi, alan) {
    let b;
    let d;
    let dgt = document.getElementById(alan);

    for (var i = dgt.children.length - 1; i >= 0; i--) {
        b = sayi % 10;
        d = dgt.children[i];
        digitYaz(d, b, "red", "#700000");
        sayi = (sayi - b) / 10;
    }
}

function digitYaz(digit, i, l, d) {

    if (!(i >= 0 && i < 10)) {
        return;
    }
    var A = [l, d, l, l, d, l, l, l, l, l];
    var B = [l, l, l, l, l, d, d, l, l, l];
    var C = [l, l, d, l, l, l, l, l, l, l];
    var D = [l, d, l, l, d, l, l, d, l, l];
    var E = [l, d, l, d, d, d, l, d, l, d];
    var F = [l, d, d, d, l, l, l, d, l, l];
    var G = [d, d, l, l, l, l, l, d, l, l];

    digit.children[0].children[0].style.borderTopColor = A[i];
    digit.children[0].children[1].style.borderBottomColor = A[i];
    digit.children[0].children[2].style.display = A[i] == l ? "initial" : "none";
    digit.children[1].children[0].style.borderLeftColor = B[i];
    digit.children[1].children[1].style.borderRightColor = B[i];
    digit.children[1].children[2].style.display = B[i] == l ? "initial" : "none";
    digit.children[2].children[0].style.borderLeftColor = C[i];
    digit.children[2].children[1].style.borderRightColor = C[i];
    digit.children[2].children[2].style.display = C[i] == l ? "initial" : "none";
    digit.children[3].children[0].style.borderTopColor = D[i];
    digit.children[3].children[1].style.borderBottomColor = D[i];
    digit.children[3].children[2].style.display = D[i] == l ? "initial" : "none";
    digit.children[4].children[0].style.borderLeftColor = E[i];
    digit.children[4].children[1].style.borderRightColor = E[i];
    digit.children[4].children[2].style.display = E[i] == l ? "initial" : "none";
    digit.children[5].children[0].style.borderLeftColor = F[i];
    digit.children[5].children[1].style.borderRightColor = F[i];
    digit.children[5].children[2].style.display = F[i] == l ? "initial" : "none";
    digit.children[6].children[0].style.borderTopColor = G[i];
    digit.children[6].children[1].style.borderBottomColor = G[i];
    digit.children[6].children[2].style.display = G[i] == l ? "initial" : "none";
}

function setCssByClass(className, rules) {
    let elements = document.getElementsByClassName(className);

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.setAttribute('style', rules);
    }
}



function div() {
    return addExtensions(document.createElement('DIV'));
}

function addExtensions(el) {
    //https://jaketrent.com/post/addremove-classes-raw-javascript/
    el.__proto__.addClass = function (className) {
        if (this.classList) {
            this.classList.add(className);
        } else if (!hasClass(this, className)) {
            this.className += " " + className;
        }

        return this;
    };

    el.__proto__.removeClass = function (className) {
        if (this.classList) {
            this.classList.remove(className);
        } else if (hasClass(el, className)) {
            let reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
            this.className = this.className.replace(reg, ' ');
        }

        return this;
    };

    return el;
}

function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className)
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}
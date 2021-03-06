// A point in the complex plane belongs to the Mandelbrot set if the orbit of 0 under iteration of the quadratic map:
// zn+1=zn2+c
// remains bounded (does not escape to infinity).

// It can be plotted on a square image between -2-2i and 2+2i.

// For practical reasons, we'll only iterate 255 times for each point. We will only iterate a given point as long as the absolute value of zn is lower than 4. If it's 4 or greater, we know it will eventually escape to infinity, so we don't have to continue the iterations. The number of iterations determines the point's color.

// It all boils down to the following:
// 0. Select the point in the bottom left corner of the region (-2,-2)
// 1. Start with zx=0 and zy=0
// 2. Calculate:
//         xt=zx*zy
//         zx=zx*zx-zy*zy+cx
//         zy=2*xt+cy
//         These calculations are really the formula zn=z2n+1. The reason they look different is because i2=-1, a property of complex numbers.
// 3. Repeat step 2 if:
// a. you haven't reached 255 iterations yet [i<255]
// AND
// b. the absolute value of the result is lower than 4 [zx*zx+zy*zy)<4]
// 4. change the color of the point you're calculating (ie. cx,cy) to the color corresponding to the number of iterations (the number of times you repeated steps 2 and 3)
//         We set Red, Green and Blue values of the color of the square to the number of iterations, which generates a greyscale picture.
// 5. Select the next point (go by columns and rows)
// 6. Go to step 1, until you reach the bottom right corner

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const palette = [];
let xmin = -2,
    ymin = -2,
    scale = 300, //* New variables represent the bottom left corner of the plotted area and scale
    iterations = 1000;

canvas.addEventListener('click', zoom, false);

getColorPalette();
drawMandelbrot();

function zoom(e) {
    // console.log(e);
    
    xmin = xmin + Math.floor(e.pageX/2) / scale;
    ymin = Math.floor(e.pageY / 2) / scale + ymin;
    scale = scale * 1.5;
    console.log(scale);
    
    // iterations = iterations * 2;
    // console.log(e.pageX, e.pageY);
    
    // console.log(xmin);
    // console.log(ymin);
    
    getColorPalette();
    drawMandelbrot();
}

function getColorPalette() {
    for (let x = 0; x < 256; x++) {
        let r = 0, g = 0, b = 0;
        if (x < 85) {
            r = x * 3;
        }
        if (x >= 85 && x < 171) {
            g = 3 * (x - 84);
        }
        if (x >= 171) {
            b = 3 * (x - 170);
        }
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
    
        r = r.length === 1 ? "0" + r : r;
        g = g.length === 1 ? "0" + g : g;
        b = b.length === 1 ? "0" + b : b;
    
        palette.push(`#${r}${g}${b}`);
    }
}

function drawMandelbrot() {
    //* x, y - screen coordinates of thepoint currently being iterated
    //* cx, cy - coordinate of the point currently being iterated on a complex plane. (-2, -2) is in bottom left corner and (2, 2) is in upper right
    for (let x = 0; x < iterations; x++) {
        for (let y = 0; y < iterations; y++) {
            let i = 0;

            // Convert screen coords into a complex number
            const cx = xmin + x / scale;
            const cy = ymin + y / scale;

            // Z0 = 0
            let zx = 0;
            let zy = 0;

            do {
                const xt = zx * zy;
                zx = zx * zx - zy * zy + cx;
                zy = 2 * xt + cy;
                i++;
            // Iterate by the formula until rach 255 iterations of the absolute value is > 4
            } while (i < 255 && (zx * zx + zy * zy) < 4);

            const color = i.toString(16);
            context.beginPath();
            context.rect(x, y , 1  , 1);
            context.fillStyle = palette[i];
            context.fill();
        }
    }
}
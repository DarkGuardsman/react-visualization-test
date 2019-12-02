import randomColor from "randomcolor";


export function generateDots(count, spread, colored) {
    return new Array(count)
        .fill(0)
        .map((value) => generateDot(value, spread, colored));
}

export function generateDot(index, spread, colored) {
    return {
        x: randomPoint(-spread, spread),
        y: randomPoint(-spread, spread),
        fill: color(colored),
        stroke: color(colored)
    }
}

export function randomPoint(min, max) {
    return Math.random() * max + Math.random() * min
}

export function color(colored) {
    return colored ? randomColor({
        luminosity: 'bright',
        format: 'rgba'
    }) : undefined
}

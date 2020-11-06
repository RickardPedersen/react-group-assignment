// const BASE_HUE = 260;
// const BASE_SAT = 18;
// const HIGHLIGHT_SAT = 30;

const BASE_HUE = 260;
const BASE_SAT = 5;
const HIGHLIGHT_SAT = 40;
const WHITE_VAL = 95;
const BASE_VAL = 10;
const BASE_VAL_STEP = 5;

// const BASE_HUE = 260;
// const BASE_SAT = 5;
// const HIGHLIGHT_SAT = 40;
// const WHITE_VAL = 10;
// const BASE_VAL = 100;
// const BASE_VAL_STEP = -10;

function calcVal(step) {
    return BASE_VAL + (BASE_VAL_STEP * step)
}

function clampHue(hue, shift) {
    let computedHue = hue - shift;

    if(computedHue < 0) {
        return 360 - computedHue;
    } else {
        return computedHue;
    }
}

export const Theme = {
    fonts: {
        text:    "'Roboto', sans-serif",
        heading: "'Montserrat', sans-serif",
    },

    colors: {
        bg:      `hsl(${BASE_HUE}, ${BASE_SAT}%, ${calcVal(0)}%)`,
        gray1:   `hsl(${BASE_HUE}, ${BASE_SAT}%, ${calcVal(1)}%)`,
        gray2:   `hsl(${BASE_HUE}, ${BASE_SAT}%, ${calcVal(2)}%)`,
        gray3:   `hsl(${BASE_HUE}, ${BASE_SAT}%, ${calcVal(3)}%)`,
        gray4:   `hsl(${BASE_HUE}, ${BASE_SAT}%, ${calcVal(4)}%)`,
        gray5:   `hsl(${BASE_HUE}, ${BASE_SAT}%, ${calcVal(5)}%)`,
        gray6:   `hsl(${BASE_HUE}, ${BASE_SAT}%, ${calcVal(6)}%)`,
        gray7:   `hsl(${BASE_HUE}, ${BASE_SAT}%, ${calcVal(7)}%)`,
        gray8:   `hsl(${BASE_HUE}, ${BASE_SAT}%, ${calcVal(8)}%)`,
        gray9:   `hsl(${BASE_HUE}, ${BASE_SAT}%, ${calcVal(9)}%)`,
        white:   `hsl(${BASE_HUE}, 20%, ${WHITE_VAL}%)`,
        primary: `hsl(${clampHue(BASE_HUE, 5)},   ${BASE_SAT + HIGHLIGHT_SAT}%, 50%)`,
        success: `hsl(${clampHue(BASE_HUE, 115)}, ${BASE_SAT + HIGHLIGHT_SAT}%, 50%)`,
        warning: `hsl(${clampHue(BASE_HUE, 210)}, ${BASE_SAT + HIGHLIGHT_SAT}%, 50%)`,
        danger:  `hsl(${clampHue(BASE_HUE, 260)}, ${BASE_SAT + HIGHLIGHT_SAT}%, 50%)`,
    },

    // colors: {
    //     bg: '#111',
    //     gray1: '#222',
    //     gray2: '#333',
    //     gray3: '#444',
    //     gray3: '#555',
    //     white: '#fff',
    //     primary: '#4158b5',
    //     success: '#45ba62',
    //     warning: '#ceb219',
    //     danger: '#d94e4e',
    // },

    padding: {
        xs:  '5px',
        s:   '10px',
        m:   '15px',
        l:   '20px',
        xl:  '25px',
        xxl: '30px',
    },

    borderRadius: '5px'
}



const VALID_BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
const VALID_WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

const NOTES = [
    'C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'
];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
const KEY_TO_NOTE ={
    z: 'C',
    s: 'Db',
    x: 'D',
    d: 'Eb',
    c: 'E',
    v: 'F',
    g: 'Gb',
    b: 'G',
    h: 'Ab',
    n: 'A',
    j: 'Bb',
    m: 'B',
};

const NOTE_TO_KEY ={
    C: 'z',
    Db: 's',
    D: 'x',
    Eb: 'd',
    E: 'c',
    F: 'v',
    Gb: 'g',
    G: 'b',
    Ab: 'h',
    A: 'n',
    Bb: 'j',
    B: 'm',
    
}
export {
    NOTES,
    NOTE_TO_KEY,
    KEY_TO_NOTE,
    VALID_KEYS,
};

//helps set classes on image elements
//for every 5th index, a class of big is returned and for every 6th index, a class of wide is returned
export function getClass(i) {
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
}
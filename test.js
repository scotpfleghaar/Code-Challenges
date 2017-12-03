function spEng(sentence) {
    return (sentence.toUpperCase().includes('ENGLISH')) ? true : false;
}

console.log(spEng("english"));
console.log(spEng("egnlish"));
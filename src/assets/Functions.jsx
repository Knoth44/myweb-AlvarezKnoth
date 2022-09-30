 function reduceFunct(array) {
    return array.reduce((a, b) => a + (b.price * b.quantity), 0) 
}

 function agree(evt) {
    return evt.some(e => e === "")
}

export {agree,reduceFunct};
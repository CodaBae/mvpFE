import { extendTheme } from "@chakra-ui/react";

let colors = {
    brand: {
        primary: '#F6CA65',
        text: '#005B96',
        line: '#F3F6F9',
        box: '#1BC5BD',
        text_1: '#011F4B',
        text_2: '#7E8299',
        bg: '#F1FAFE'
    },
}


let fonts = {
    body: 'Manrope'
}

const theme = extendTheme({ colors })

export default theme
import { createGlobalStyle } from 'styled-components'

import BaiJamjureeWoff from './BaiJamjuree.woff'
import BaiJamjureeWoff2 from './BaiJamjuree.woff2'
import BaiJamjureeBold from './BaiJamjuree-Bold.ttf'
import InterWoff from './Inter.woff'
import InterWoff2 from './Inter.woff2'
import ArchivoWoff from './Archivo.woff'
import ArchivoWoff2 from './Archivo.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Bai Jamjuree';
        src: local('Bai Jamjuree'), local('BaiJamjuree'),
        url(${BaiJamjureeWoff}) format('woff');
        url(${BaiJamjureeWoff2}) format('woff2'),
        font-weight: 100 900;
    }

    @font-face {
        font-family: 'Bai Jamjuree Bold';
        src: url(${BaiJamjureeBold}) format('truetype');
    }


    @font-face {
        font-family: 'Inter';
        src: local('Inter'), local('Inter'),
        url(${InterWoff}) format('woff');
        url(${InterWoff2}) format('woff2'),
        font-weight: 100 900;
    }

    
    @font-face {
        font-family: 'Archivo';
        src: local('Archivo'), local('Archivo'),
        url(${ArchivoWoff}) format('woff');
        url(${ArchivoWoff2}) format('woff2'),
        font-weight: 100 900;
    }
`

import { createGlobalStyle } from 'styled-components'

import BaiJamjureeWoff from './BaiJamjuree.woff'
import BaiJamjureeWoff2 from './BaiJamjuree.woff2'
import InterWoff from './Inter.woff'
import InterWoff2 from './Inter.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Bai Jamjuree';
        src: local('Bai Jamjuree'), local('BaiJamjuree'),
        url(${BaiJamjureeWoff}) format('woff');
        url(${BaiJamjureeWoff2}) format('woff2'),
        font-weight: 100 900;
    }

    @font-face {
        font-family: 'Inter';
        src: local('Inter'), local('Inter'),
        url(${InterWoff}) format('woff');
        url(${InterWoff2}) format('woff2'),
        font-weight: 100 900;
    }
`

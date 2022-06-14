import { BUY_COOKIES } from "./CookieTypes"

const buyCookies = (number = 1) => {
    return {
        type : BUY_COOKIES,
        payLoad : number
    }
}

export default buyCookies
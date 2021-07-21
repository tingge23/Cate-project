import styled from "styled-components"
import border from "../styled/border"
export const SearchWarp=border({
    Comp:styled.div `
    padding:.1rem .15rem;
    div{
        border:1px solid #000;
        display:flex;
        justify-content:center;
        height:.4rem;
        color:#666;
        background:#fff;
        align-items:center;
        img{
            width:.22rem;
            height:.22rem;
            margin-right:.05rem;
        }
    }
`
})

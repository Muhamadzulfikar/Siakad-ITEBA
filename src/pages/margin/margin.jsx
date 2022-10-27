import { useState } from "react"
import './index.css'
const Margin = () => {
    const [marginLeft, setMarginLeft] = useState(0);
    const [marginRight, setMarginRight] = useState(0);
    const [marginTop, setMarginTop] = useState(0);
    const [marginBottom, setMarginBottom] = useState(0);
    return (
        <section className="marginsection">
            <div className="flex">
            <div className="box" style={{ "padding": [`${marginTop}px`, `${marginRight}px`, `${marginBottom}px`, `${marginLeft}px`].join(" ") }}></div>
            <div className="box"></div>
            </div>
            <div className="block">
                <label htmlFor="">padding left</label>
                <input onChange={(e) => { setMarginLeft(e.target.value) }} type="text" name="" id="" />
                <label htmlFor="">padding right</label>
                <input onChange={(e) => { setMarginRight(e.target.value) }} type="text" name="" id="" />
                <label htmlFor="">padding top</label>
                <input onChange={(e) => { setMarginTop(e.target.value) }} type="text" name="" id="" />
                <label htmlFor="">padding bottom</label>
                <input onChange={(e) => { setMarginBottom(e.target.value) }} type="text" name="" id="" />
            </div>
            <p>padding-left: {marginLeft}px;</p>
            <p>padding-right: {marginRight}px;</p>
            <p>padding-top: {marginTop}px;</p>
            <p>padding-bottom: {marginBottom}px;</p>
        </section>
    )
}

export default Margin
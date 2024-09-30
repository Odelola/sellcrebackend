import { useState } from "react"
import styles from "./PropertyHighlighter.module.css"
import InfoIcon from "../assets/images/PropertyHighlighterImages/InfoIcon.svg"
import HighlightedList from "./HighlightedList";
const PropertyHighlighter = () => {
    return (
        <section className={styles.propertyHighlighterContainer}>
            <header>

                <aside>
                    <h1 className="text-primary">Property Highlights</h1>
                    <img src={InfoIcon.src} alt="Information Icon" />
                </aside>
                <aside>
                    <button className="btn btn-primary btn-icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9951 4.38247V16.6536M4.85956 10.518H17.1307" stroke="white" stroke-width="1.75652" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Add Highlight
                    </button>
                </aside>
            </header>

            <HighlightedList />
            <HighlightedList />
        </section>
    )
}

export default PropertyHighlighter;
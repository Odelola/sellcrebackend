import styles from "./HighlightedList.module.css"
const HighlightedList = () => {
    return (
        <section className={styles.highlightedList}>
            <div className={styles.highlightedListSortable}>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.32895" cy="1.90132" r="1.5" fill="#4E5864" />
                    <circle cx="8.32895" cy="1.90132" r="1.5" fill="#4E5864" />
                    <circle cx="2.32895" cy="7.90132" r="1.5" fill="#4E5864" />
                    <circle cx="8.32895" cy="7.90132" r="1.5" fill="#4E5864" />
                    <circle cx="2.32895" cy="13.9013" r="1.5" fill="#4E5864" />
                    <circle cx="8.32895" cy="13.9013" r="1.5" fill="#4E5864" />
                </svg>
            </div>

            <div className={styles.highLightInputFieldContainer}>
                <div>
                    <input type="text" name="highlight" className={styles.highLightInputField} placeholder="Type an highight" />
                </div>
                <div>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.11139 5.64267H4.8644M4.8644 5.64267H18.8885M4.8644 5.64267V17.9138C4.8644 18.3787 5.0491 18.8246 5.37785 19.1533C5.7066 19.4821 6.15249 19.6668 6.61742 19.6668H15.3825C15.8474 19.6668 16.2933 19.4821 16.6221 19.1533C16.9508 18.8246 17.1355 18.3787 17.1355 17.9138V5.64267H4.8644ZM7.49393 5.64267V3.88965C7.49393 3.42473 7.67862 2.97884 8.00737 2.65008C8.33613 2.32133 8.78201 2.13664 9.24694 2.13664H12.753C13.2179 2.13664 13.6638 2.32133 13.9925 2.65008C14.3213 2.97884 14.506 3.42473 14.506 3.88965V5.64267M9.24694 10.0252V15.2843M12.753 10.0252V15.2843" stroke="#4E5864" stroke-width="1.75302" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
        </section>
    )
}

export default HighlightedList;
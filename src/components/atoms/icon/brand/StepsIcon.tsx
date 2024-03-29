import styles from '../brand/styles/styles.module.scss'

const StepsIcon:React.FC = () => {

    return (
        <a href='#'>
            <div className={styles.BrandIcon}>
                    <svg  width="82" height="32" viewBox="0 0 82 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={styles._path}  fillRule="evenodd" clipRule="evenodd" d="M8.00036 8.70355C8.61529 8.1764 9.40674 7.91258 10.1099 7.91258C11.429 7.91258 12.7476 8.52799 14.0662 9.58278L14.6816 10.1104L16.4396 7.64877L15.9998 7.20891C14.3296 5.80253 12.5716 5.09886 10.5493 5.09886C9.05467 5.09886 7.64828 5.62649 6.2419 6.50572C4.83552 7.47273 3.95629 8.70307 3.69247 10.1977C3.34088 11.7801 3.69247 13.1865 4.83552 14.2413C5.53871 14.945 6.68176 15.5604 8.35196 16.2631C9.58278 16.7907 10.3738 17.2301 10.7253 17.5822C11.1652 18.1098 11.3408 18.812 11.1652 19.6918C10.9892 20.5705 10.5498 21.2742 9.75834 21.7136C9.05515 22.2412 8.2637 22.4172 7.47273 22.4172C5.62649 22.4172 4.04455 21.6258 2.63721 19.8673L2.19783 19.2529L0 21.6258L0.439854 22.0651C1.14305 22.9449 2.10957 23.6485 3.3404 24.263C4.65948 24.8784 5.88983 25.2309 7.12065 25.2309C8.70307 25.2309 10.1095 24.7906 11.4281 23.8236C12.9222 22.8566 13.8897 21.5375 14.1535 19.8673C14.5929 18.1098 14.1535 16.7025 13.0105 15.5604C12.3951 14.945 11.1642 14.2413 9.40578 13.5381H9.318C7.29621 12.6589 6.41698 11.6919 6.59254 10.6371C6.76954 9.84612 7.20939 9.14293 8.00036 8.70355ZM26.198 0H23.2092L21.9783 5.53823H17.9347L17.3193 8.2637H21.3634L19.1656 18.7252C18.6379 21.0981 18.814 22.8566 19.781 23.9114C20.3964 24.7901 21.5394 25.2305 23.0341 25.2305C25.7591 25.2305 28.1329 23.7353 30.2425 20.7465L30.8579 19.8668L27.8691 19.1641L27.6053 19.6035C26.2862 21.4493 24.8803 22.4167 23.3857 22.4167C22.7703 22.4167 22.3304 22.3285 22.0666 21.9774C21.8028 21.6253 21.715 20.9216 21.9783 19.9546L24.44 8.26274H30.9457L31.5611 5.53727H24.9671L26.198 0ZM46.5934 7.03335C45.5386 5.71427 44.1313 5.09886 42.286 5.09886C39.6483 5.09886 37.3627 6.24142 35.5164 8.35196C33.934 10.1982 32.8792 12.4838 32.3516 15.121C31.4724 18.6374 31.9117 21.2747 33.4064 23.2082C34.549 24.5273 36.1319 25.2309 38.2414 25.2309C40.0877 25.2309 42.4606 24.7024 45.186 23.5607L45.8015 23.2964L45.0978 20.3081L44.3073 20.7475C42.1977 21.8905 40.2632 22.4177 38.593 22.4177C37.3622 22.4177 36.4834 22.0656 35.9558 21.4497C35.0766 20.4827 34.8128 18.7252 35.1644 16.1753H47.3839L47.5599 15.5604C48.3509 11.6924 47.9993 8.79133 46.5934 7.03335ZM41.8452 7.9121C42.8131 7.9121 43.6036 8.2637 44.219 9.05515C45.0105 10.1104 45.2738 11.5168 44.9227 13.3626H35.7798C36.2196 11.8679 37.0106 10.6371 38.0659 9.5823C39.2967 8.52751 40.527 7.9121 41.8452 7.9121ZM59.2518 5.09886C57.4943 5.09886 55.9109 5.71427 54.5928 6.94509V5.01156L51.6035 5.45093V6.1546C51.7795 7.91258 51.6035 10.0226 51.0759 12.3082L46.8562 32H49.9338L51.603 24.2635C52.6974 24.9006 53.9418 25.2347 55.2082 25.2314C57.054 25.2314 58.9002 24.44 60.5709 23.0336C62.7687 21.1869 64.1751 18.7262 64.8783 15.4731C65.6688 11.8689 65.3177 9.14389 63.7352 7.20939C62.5927 5.80253 61.0985 5.09886 59.2518 5.09886ZM54.329 11.0769C55.8241 8.96737 57.3182 7.9121 58.9007 7.9121C59.8677 7.9121 60.6591 8.35196 61.2736 9.05515C62.3284 10.286 62.4166 12.3078 61.889 15.0328C61.2736 18.1098 60.0432 20.2194 58.1087 21.4497C57.1417 22.0651 56.0869 22.4177 55.0322 22.4177C54.0652 22.4177 53.0986 21.9783 52.2189 21.0986L54.329 11.0769ZM74.5488 13.5386C72.4393 12.6594 71.4713 11.6924 71.7356 10.6376C71.9116 9.8466 72.351 9.14341 73.0537 8.70355C73.7574 8.1764 74.4611 7.91258 75.2515 7.91258C76.5706 7.91258 77.8888 8.52799 79.2078 9.58278L79.8232 10.1104L81.5817 7.64877L81.1423 7.20891C79.4721 5.80253 77.6254 5.09886 75.6919 5.09886C74.1968 5.09886 72.7904 5.62649 71.3835 6.50572C69.9771 7.47273 69.0984 8.70307 68.8346 10.1977C68.4835 11.7801 68.8346 13.1865 70.0654 14.2413C70.6808 14.8567 71.8239 15.5604 73.4941 16.2631L75.867 17.5822C76.3063 18.1098 76.4824 18.812 76.3063 19.6918C76.1313 20.5705 75.6036 21.2742 74.9 21.7136C74.1963 22.2412 73.4058 22.4172 72.6139 22.4172C70.7681 22.4172 69.1862 21.6258 67.8671 19.8673L67.3394 19.2529L65.2299 21.6258L65.581 22.0651C66.2847 22.9449 67.2512 23.6485 68.4825 24.263C69.7133 24.8784 71.0314 25.2309 72.2627 25.2309C73.8452 25.2309 75.2511 24.7906 76.5702 23.8236C78.0643 22.8566 79.0313 21.5375 79.2956 19.8673C79.735 18.1098 79.2956 16.7025 78.2408 15.5604C77.5372 14.9455 76.3063 14.2418 74.5488 13.5386Z" fill="#CCCCCC"/>
                    </svg>
            </div>
        </a>
    )
}

export default StepsIcon;
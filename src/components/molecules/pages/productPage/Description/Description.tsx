import CheckCircleIcon from '../../../../atoms/icon/info/CheckCircleIcon/CheckCircleIcon';

import styles from '../Description/Description.module.scss';

const Description:React.FC = () => {

    return (
        <section className={styles.Description}>
            <span>
                Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. 
                Maecenas tincidunt ligula a sem vestibulum pharetra. 
                Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. 
                Etiam tincidunt metus vel dui interdum sollicitudin. 
                Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. 
                Sed et condimentum arcu, id molestie tellus. Nulla facilisi. 
                Nam scelerisque vitae justo a convallis. 
                Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. 
                Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.
            </span>
            <span>
                Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. 
                Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, 
                pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. 
            </span>

            <div className={styles._list}><CheckCircleIcon/>
                <span>100 g of fresh leaves provides.</span>
            </div>
            <div className={styles._list}><CheckCircleIcon/>
                <span>Aliquam ac est at augue volutpat elementum.</span>
            </div>
            <div className={styles._list}><CheckCircleIcon/>
                <span>Quisque nec enim eget sapien molestie.</span>
            </div>
            <div className={styles._list}><CheckCircleIcon/>
                <span>Proin convallis odio volutpat finibus posuere.</span>
            </div>

            <span>Cras et diam maximus, accumsan sapien et, sollicitudin velit. 
                Nulla blandit eros non turpis lobortis iaculis at ut massa. 
            </span>

        </section>
    )
}

export default Description;
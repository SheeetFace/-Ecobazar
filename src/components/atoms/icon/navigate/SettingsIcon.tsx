interface SettingsIconProps{
   className:string
}

const SettingsIcon:React.FC<SettingsIconProps> = ({className}) => {

    return (
        <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={className} d="M11.8199 20H8.17988C7.95182 20 7.73059 19.9221 7.55289 19.7792C7.37519 19.6362 7.25169 19.4368 7.20288 19.214L6.79588 17.33C6.25294 17.0921 5.73812 16.7946 5.26088 16.443L3.42388 17.028C3.20645 17.0973 2.97183 17.0902 2.759 17.0078C2.54617 16.9254 2.36794 16.7727 2.25388 16.575L0.429884 13.424C0.31703 13.2261 0.274667 12.9958 0.309727 12.7708C0.344787 12.5457 0.455193 12.3392 0.622884 12.185L2.04788 10.885C1.98308 10.2961 1.98308 9.70189 2.04788 9.113L0.622884 7.816C0.454956 7.66177 0.344399 7.45507 0.309333 7.22978C0.274268 7.00449 0.316774 6.77397 0.429884 6.576L2.24988 3.423C2.36394 3.22532 2.54218 3.07259 2.755 2.99019C2.96783 2.90778 3.20245 2.90066 3.41988 2.97L5.25688 3.555C5.50088 3.375 5.75488 3.207 6.01788 3.055C6.26988 2.913 6.52988 2.784 6.79588 2.669L7.20388 0.787C7.25246 0.564198 7.37572 0.364688 7.55323 0.221549C7.73074 0.0784098 7.95185 0.000239966 8.17988 0H11.8199C12.0479 0.000239966 12.269 0.0784098 12.4465 0.221549C12.6241 0.364688 12.7473 0.564198 12.7959 0.787L13.2079 2.67C13.7505 2.9079 14.265 3.20539 14.7419 3.557L16.5799 2.972C16.7972 2.90292 17.0316 2.91017 17.2442 2.99256C17.4568 3.07495 17.6349 3.22753 17.7489 3.425L19.5689 6.578C19.8019 6.985 19.7209 7.5 19.3759 7.817L17.9509 9.117C18.0157 9.70589 18.0157 10.3001 17.9509 10.889L19.3759 12.189C19.7209 12.507 19.8009 13.021 19.5689 13.428L17.7489 16.581C17.6349 16.7785 17.4568 16.931 17.2442 17.0134C17.0316 17.0958 16.7972 17.1031 16.5799 17.034L14.7419 16.449C14.2651 16.8004 13.7506 17.0976 13.2079 17.335L12.7959 19.214C12.7471 19.4366 12.6238 19.6359 12.4463 19.7788C12.2688 19.9218 12.0478 19.9998 11.8199 20ZM5.61988 14.229L6.43988 14.829C6.62488 14.965 6.81788 15.09 7.01688 15.204C7.20488 15.313 7.39788 15.411 7.59588 15.5L8.52888 15.909L8.98588 18H11.0159L11.4729 15.908L12.4059 15.499C12.8129 15.319 13.1999 15.096 13.5589 14.833L14.3799 14.233L16.4209 14.883L17.4359 13.125L15.8529 11.682L15.9649 10.67C16.0149 10.227 16.0149 9.78 15.9649 9.338L15.8529 8.326L17.4369 6.88L16.4209 5.121L14.3799 5.771L13.5589 5.171C13.1997 4.90669 12.8131 4.68173 12.4059 4.5L11.4729 4.091L11.0159 2H8.98588L8.52689 4.092L7.59588 4.5C7.18807 4.67861 6.80136 4.90198 6.44288 5.166L5.62188 5.766L3.58188 5.116L2.56488 6.88L4.14788 8.321L4.03588 9.334C3.98588 9.777 3.98588 10.224 4.03588 10.666L4.14788 11.678L2.56488 13.121L3.57988 14.879L5.61988 14.229ZM9.99588 14C8.93502 14 7.9176 13.5786 7.16746 12.8284C6.41731 12.0783 5.99588 11.0609 5.99588 10C5.99588 8.93913 6.41731 7.92172 7.16746 7.17157C7.9176 6.42143 8.93502 6 9.99588 6C11.0568 6 12.0742 6.42143 12.8243 7.17157C13.5745 7.92172 13.9959 8.93913 13.9959 10C13.9959 11.0609 13.5745 12.0783 12.8243 12.8284C12.0742 13.5786 11.0568 14 9.99588 14ZM9.99588 8C9.60424 8.0004 9.22133 8.11577 8.89467 8.33181C8.568 8.54785 8.31195 8.85505 8.15828 9.21528C8.00462 9.57552 7.9601 9.97295 8.03026 10.3583C8.10041 10.7436 8.28215 11.0998 8.55293 11.3828C8.8237 11.6657 9.17159 11.863 9.55344 11.95C9.93529 12.037 10.3343 12.01 10.7009 11.8724C11.0676 11.7347 11.3858 11.4924 11.616 11.1756C11.8462 10.8587 11.9783 10.4812 11.9959 10.09V10.49V10C11.9959 9.46957 11.7852 8.96086 11.4101 8.58579C11.035 8.21071 10.5263 8 9.99588 8Z" fill="#CCCCCC"/>
        </svg>

    )
}

export default SettingsIcon;
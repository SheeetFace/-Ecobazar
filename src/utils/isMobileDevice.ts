export const isMobileDevice = ():boolean => {
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isSmallScreen = window.matchMedia('(max-width: 767px)').matches;

    return mobileRegex.test(navigator.userAgent) || isSmallScreen;
}
const getIconsPath = (path) =>{
    return `./icons/${path}`;
}

const getImagesPath = (path) =>{
    return `./images/${path}`;
}

export const ICONS = {
    LOGO: getIconsPath('logo_box_b.svg'),
    SMALL_LOGO: getIconsPath('logo.svg'),
    NAVER: getIconsPath('naver.png'),
    KAKAO: getIconsPath('kakao.png'),
    GOOGLE: getIconsPath('google.png'),
    EDIT: getIconsPath('edit_icon.png'),
}
const getIconsPath = (path) =>{
    return process.env.PUBLIC_URL + `/icons/${path}`;
}

const getImagesPath = (path) =>{
    return process.env.PUBLIC_URL + `/images/${path}`;
}

export const ICONS = {
    LOGO: getIconsPath('logo_box_b.svg'),    
    SIDE_LEFT_ARROW: getIconsPath('side_left_arrow.svg'),
    LEFT_ARROW: getIconsPath('left_arrow.svg'),
    RIGHT_ARROW: getIconsPath('right_arrow.svg'),
    SMALL_LOGO: getIconsPath('logo.svg'),
    NAVER: getIconsPath('naver.png'),
    KAKAO: getIconsPath('kakao.png'),
    GOOGLE: getIconsPath('google.png'),
    EDIT: getIconsPath('edit_icon.png'),
    PENCIL: getIconsPath('pencil.svg'),
    PLUS: getIconsPath('plus.svg'),
    BORDER_PLUS: getIconsPath('border_plus.svg'),
}
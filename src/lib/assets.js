const getIconsPath = (path) =>{
    return process.env.PUBLIC_URL + `/icons/${path}`;
}

const getImagesPath = (path) =>{
    return process.env.PUBLIC_URL + `/images/${path}`;
}

export const IMAGES = {
    KNOCK_DOOR: getImagesPath('knock_door.png'),
    DOOR: getImagesPath('door.png'),
    KNOCK_DOOR_INNER: getImagesPath('knock_door_inner.png'),
    ERROR: getImagesPath('error.png'),
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
    CLOSE: getIconsPath('close.svg'),
    DOWN_ARROW: getIconsPath('down_arrow.svg'),
    SETTING: getIconsPath('setting.svg'),
    FRIEND_ADD: getIconsPath('friend_add.svg'),
    SUCCESS: getIconsPath('success.svg'),
    FAIL: getIconsPath('fail.svg')
}
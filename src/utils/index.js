export const getPixelString = (value, defaultValue) => {
    if (value === 0) {
        return '0'
    } else if (value === undefined) {
        if (defaultValue === null) {
            return undefined
        } else {
            return defaultValue + 'px'
        }
    } else {
        return value + 'px'
    }
}
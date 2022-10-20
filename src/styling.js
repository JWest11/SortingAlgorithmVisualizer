export function addArrayStyling (idArray) {
    for (let id of idArray) {
        document.getElementById(`${id}`).classList.add('coloredArrayElement');
    };
};

export function removeArrayStyling () {
    document.querySelectorAll('.coloredArrayElement').forEach((element) => {
        element.classList.remove('coloredArrayElement');
    });
};
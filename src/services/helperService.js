import { useToast } from 'vue-toast-notification';
const toast = useToast();

const successToastr = (message) => {
    toast.open({
        message,
        type: 'success',
        duration: 3000,
        position: 'top'
    });
}

const errorToastr = (message) => {
    toast.open({
        message,
        type: 'error',
        duration: 3000,
        position: 'top'
    });
}

const setObjectLocalStorage = (objName, data) => {
    console.log(data);
    localStorage.setItem(objName, JSON.stringify(data));
};

const getObjectLocalStorage = (objName) => {
    return JSON.parse(localStorage.getItem(objName));
};

export {
    successToastr,
    errorToastr,
    setObjectLocalStorage,
    getObjectLocalStorage
}
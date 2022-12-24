console.log('M 8-9: 5');

/**
 * ЗАВДАННЯ 5
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 * (ланцюжок промісів)
 */

const getData = () =>
    new Promise((res) => {
        setTimeout(() => {
            const data = 1;
            console.log(data);
            res(data);
        }, 1000);
    });

const getNewData = () =>
    new Promise((res) => {
        setTimeout(() => {
            const data = 2;
            console.log(data);
            res(data);
        }, 1000);
    });

const getAnotherData = () =>
    new Promise((res) => {
        setTimeout(() => {
            const data = 3;
            console.log(data);
            res(data);
        }, 1000);
    });

const getLastData = () =>
    new Promise((res) => {
        setTimeout(() => {
            const data = 4;
            console.log(data);
            res(data);
        }, 4000);
    });

const arr = [];


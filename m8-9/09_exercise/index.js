console.log('M 8-9: 9');

/**
 * ЗАВДАННЯ 9
 *
 */

// What is the output of the code below?
function job() {
    return new Promise(function (resolve, reject) {
        reject();
    });
}

let promise = job();

promise
    .then(function () {
        console.log('Success 1');
    })
    .then(function () {
        console.log('Success 2');
    })
    .then(function () {
        console.log('Success 3');
    })
    .catch(function () {
        console.log('Error 1');
    })
    .then(function () {
        console.log('Success 4');
    });
/**
 * 1 - Error 1
 * 2 - Success 1, Error 1
 * 3 - Success 1, Success 2, Success 3, Success 4
 * 4 - Success 1, Success 2, Success 3, Error 1, Success 4
 * 5 - Error 1, Success 1, Success 2, Success 3, Succes 4
 * 6 - Error 1, Success 4
 */

// What is the output of the code below?
function job2(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise2 = job2(true);

promise2
    .then(function (data) {
        console.log(data); // success
        return job2(false);
    })
    .catch(function (error) {
        console.log(error); // error
        return 'Error caught'; 
    })
    .then(function (data) {
        console.log(data); // 'Error caught'
        return job2(true);
    })
    .catch(function (error) {
        console.log(error);
    });

/**
 * 1 - error, success, Error caught
 * 2 - success, success
 * 3 - success, error, success, error
 * 4 - success, error, Error caught
 * 5 - error, Error caught, success
 * 6 - error, Error caught, success, error
 * 7 - success, error, error
 * 8 - success, success, success
 */

// What is the output of the code below?
function job3(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise3 = job3(true);

promise3
    .then(function (data) {
        console.log(data);
        return job(true);
    })
    .then(function (data) {
        if (data !== 'victory') {
            throw 'Defeat';
        }
        return job3(true);
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
        return job3(false);
    })
    .then(function (data) {
        console.log(data);
        return job3(true);
    })
    .catch(function (error) {
        console.log(error);
        return 'Error caught';
    })
    .then(function (data) {
        console.log(data);
        return new Error('test');
    })
    .then(function (data) {
        console.log('Success:', data.message);
    })
    .catch(function (data) {
        console.log('Error:', data.message);
    });

/**
 * 1 - error, error, Error caught, Error: test
 * 2 - success, success, Error caught, Success: Test
 * 3 - success, Defeat, error, Error caught, Success: test
 * 4 - error, Error caught, Success: test
 * 5 - success, Defeat, error, Error caught, Error: test
 * 6 - success, error, Defeat, Success: test   
 */
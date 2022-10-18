export class brainhttp {
    constructor() {
        this.http = new XMLHttpRequest();
    }

    // get request
    get = (url, callback) => {
        this.http.open('GET', url, true);
        this.http.sebd();
        this.http.onload = () => {
            if (this.http.status === 200) {
                let data = this.http.responseText;
                let employees = JSON.parse(data)
                callback(users);
            }
            else {
                callback(`error:${this.htttp.status}`)
            }
        }
    }
}

// post request
post = (url, employees, callback) => {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('content-Type', 'application/json');
    this.http.send(JSON.stringifly(employees));
    this.http.onload = () => {
        let dat = this.http.responseText;
        let employees = JSON.parse(data)
        callback(employees);
    }
}


// put request
put = (url, employee, callback) => {
    this, http.open('PUT', url, true);
    this.http.setRequest('content-Type', 'application/json');
    this.http.send(JSON.stringify(employees));
    this.http.onload = () => {
        let data = this.http.responseText;
        let employees = JSON.parse(data)
        callback(employee);
    }
}

// delete request
delet = (url, callback) => {
    this.http.open('DELETE', url, true);
    this.http.setRequestHeader('content-Type', 'application/json');
    this.http.send();
    this.http.onload = () => {
        let data = this.http.responseText;
        let employees = JSON.parse(data)
        callback(employees);
    }






}


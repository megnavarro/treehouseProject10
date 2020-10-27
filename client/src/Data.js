import config from './config';

export default class Data {
    api(path, method = 'GET', body = null) {
        const url = config.apiBaseUrl + path;

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        };
        
        if(body !== null) {
            options.body = JSON.stringify(body);
        }
        return fetch(url, options);
    }

  async deleteCourse(course) {
    const response = await this.api('/courses/:id', 'DELETE', course);
    if (response.status === 204) {
      console.log(`Course #${course} has been deleted`);
    }
    else if (response.status === 404) {
      return response.json().then(data => {
        return data.errors;
      });
    }
    else {
      throw new Error();
    }
  }

  async updateCourse(course) {
    const response = await this.api('/courses/:id', 'PUT', course);
    if (response.status === 201) {
      console.log(`Course #${course} has been updated`);
    }
    else if (response.status === 404) {
      return response.json().then(data => {
        return data.errors;
      });
    }
    else {
      throw new Error();
    }
  }
}


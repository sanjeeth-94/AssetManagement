import ApplicationStore from "../utils/ApplicationStore";

const _fetchServiceDownloadCsvData = (PATH, serviceMethod, data, successCallback, errorCallBack) => {
  const { user_token, userDetails } = ApplicationStore().getStorage('userDetails');
  const END_POINT = 'http://192.168.1.173:8000/api/';
  const { emailId, userRole, companyCode } = userDetails;

  const headers = {
    'Content-Type': 'blob',
    authorization: `Bearer ${user_token}`,
    companyCode: `${companyCode}`,
    userId: `${emailId}`, 
    userRole: `${userRole}`,
    responseType: 'arraybuffer',
  };

  const body = (serviceMethod === 'GET') || (serviceMethod === 'DELETE') ? {} : { body: JSON.stringify(data) };

  const bodyParameters = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers,
    ...body,
  };

  const bodyObject = {
    method: serviceMethod,
    ...bodyParameters,
  };

  let filename = '';

  return fetch(END_POINT + PATH, bodyObject)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      const contentDisposition = response.headers.get('Content-Disposition');
      filename = contentDisposition.split(';')[1].split('filename')[1].split('=')[1].trim();
      return response.blob();
    })
    .then((dataResponse) => {
      successCallback(dataResponse);
      if (dataResponse != null) {
        const url = Window.URL.createObjectURL(dataResponse);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        // a.remove();
      }
    })
    .catch((error) => {
      error.errorObject.then((errorResponse) => {
        if (error.errorStatus === 401 && errorResponse.message === 'Unable to access the page, Token Expired') {
          ApplicationStore().clearStorage();
          /* eslint-disable-next-line */
          location.reload();
        }
        errorCallBack(error.errorStatus, errorResponse.message);
      });
    });
};

export const DownloadAlloction=(data, successCallback, errorCallBack) => {
    const { fromDate } = data;
    const { toDate } = data;
    return _fetchServiceDownloadCsvData(`allocation/export?=&fromDate=${fromDate}&toDate=${toDate}`, 'GET', {}, successCallback, errorCallBack);
  };
  
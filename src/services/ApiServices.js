import ApplicationStore from "../utils/ApplicationStore";

const successCaseCode = [200, 201];

const _fetchService = (PATH, serviceMethod, data, successCallback, errorCallBack) => {
  const { access_token, userDetails } = ApplicationStore().getStorage('userDetails');
  const END_POINT = 'http://192.168.1.173:8000/api/';
  const { email } = userDetails;

  const headers = {
    'Content-Type': 'application/json',
    authorization: `Bearer ${access_token}`,
    email: `${email}`,
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

  return fetch(END_POINT + PATH, bodyObject)
    .then((response) => {
      if (successCaseCode.indexOf(response.status) > -1) {
        return response.json();
      }
      // eslint-disable-next-line no-throw-literal
      throw {
        errorStatus: response.status,
        errorObject: response.json(),
      };
    })
    .then((dataResponse) => successCallback(dataResponse))
    .catch((error) => {
      error.errorObject.then((errorResponse) => {
        if (error.errorStatus === 401 && errorResponse.message === 'Unable to access the page, Token Expired') {
          ApplicationStore().clearStorage();
          // eslint-disable-next-line
          location.reload();
        }
        errorCallBack(error.errorStatus, errorResponse.message);
      });
    });
};

export const LoginService = (data) => {
  const PATH = 'login';
  const END_POINT = 'http://192.168.1.173:8000/api/';
  const SERVICE_METHOD = 'POST';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return fetch(END_POINT + PATH, {
    method: SERVICE_METHOD,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
};

export const LogoutService = (successCallback, errorCallBack) => _fetchService('logout', 'POST', {}, successCallback, errorCallBack);

// // --------- User--------------//

export const FetchUserService = (successCallback, errorCallBack) => _fetchService('user/showData', 'GET', {}, successCallback, errorCallBack);

export const FetchDepaertmentService = (successCallback, errorCallBack) => _fetchService('department/showData', 'GET', {}, successCallback, errorCallBack);

export const UserAddService = (data, successCallback, errorCallBack) => _fetchService('user/add', 'POST', data, successCallback, errorCallBack);

export const UserUpdateService = (data, successCallback, errorCallBack) => _fetchService(`user/${data.id}/update`, 'POST', data, successCallback, errorCallBack);

export const UserDeleteService = (data, successCallback, errorCallBack) => _fetchService(`user/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);

// //...........vender...........////
export const FetchVendorService = (successCallback, errorCallBack) => _fetchService('vendor/showData', 'GET', {}, successCallback, errorCallBack);

export const FetchVendorTypeService = (successCallback, errorCallBack) => _fetchService('vendorType/showData', 'GET', {}, successCallback, errorCallBack);

export const VendorAddService = (data, successCallback, errorCallBack) => _fetchService('vendor/add', 'POST', data, successCallback, errorCallBack);

export const VendorUpdateService = (data, successCallback, errorCallBack) => _fetchService(`vendor/${data.id}/update`, 'POST', data, successCallback, errorCallBack);

export const VendorDeleteService = (data, successCallback, errorCallBack) => _fetchService(`vendor/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);

// //...........vender...........////

export const FetchVendorTypeListService = (successCallback, errorCallBack) => _fetchService('vendorType/showData', 'GET', {}, successCallback, errorCallBack);

export const VendorTypeAddService = (data, successCallback, errorCallBack) => _fetchService('vendorType/add', 'POST', data, successCallback, errorCallBack);

export const VendorTypeUpdateService = (data, successCallback, errorCallBack) => _fetchService(`vendorType/${data.id}/update`, 'POST', data, successCallback, errorCallBack);

export const VendorTypeDeleteService = (data, successCallback, errorCallBack) => _fetchService(`vendorType/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);

// //...........Requested Service...........////

export const FetchRequestedService = (successCallback, errorCallBack) => _fetchService('vendorType/showData', 'GET', {}, successCallback, errorCallBack);

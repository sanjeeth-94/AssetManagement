import ApplicationStore from "../utils/ApplicationStore";

const successCaseCode = [200, 201];

const _fetchService = (PATH, serviceMethod, data, successCallback, errorCallBack) => {
  const { access_token, userDetails } = ApplicationStore().getStorage('userDetails');
  const END_POINT = 'http://192.168.1.174:8000/api/';
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
          // location.reload();
        }
        errorCallBack(error.errorStatus, errorResponse.message);
      });
    });
};

export const LoginService = (data) => {
  const PATH = 'login';
  const END_POINT = 'http://192.168.1.174:8000/api/';
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

///........ common API........./////
export const FetchSectionService = (data,successCallback, errorCallBack) => _fetchService(`getSection/${data.id}`, 'GET', {}, successCallback, errorCallBack);

export const FetchAssetTypeService = (data,successCallback, errorCallBack) => _fetchService(`getAssetType/${data.id}`, 'GET', {}, successCallback, errorCallBack);

export const FetchAssetNameService = (data,successCallback, errorCallBack) => _fetchService(`getAssetName/${data.id}`, 'GET', {}, successCallback, errorCallBack);

export const FetchVenderDataService = (data,successCallback, errorCallBack) => _fetchService(`getVendorData/${data.id}`, 'GET', {}, successCallback, errorCallBack);

export const FetchAsstTransferService = (data,successCallback, errorCallBack) => _fetchService(`transferAsset/${data.id}`, 'POST', data, successCallback, errorCallBack);


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

///.........Asset........////

export const  FetchAssetListService = (successCallback, errorCallBack) => _fetchService('asset/showData', 'GET', {}, successCallback, errorCallBack);

export const  FetchVenderService = (successCallback, errorCallBack) => _fetchService('getVendor', 'GET', {}, successCallback, errorCallBack);

export const  FetchAssetIdService = (successCallback, errorCallBack) => _fetchService('asset/assetId', 'POST', {}, successCallback, errorCallBack);

export const  AssetAddService = (data, successCallback, errorCallBack) => _fetchService('asset/add', 'POST', data, successCallback, errorCallBack);

export const  AssetUpdateService = (data, successCallback, errorCallBack) => _fetchService(`asset/${data.id}/update`, 'POST', data, successCallback, errorCallBack);

export const  AssetDeleteService = (data, successCallback, errorCallBack) => _fetchService(`asset/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);

export const  FetchAssetLableService = (successCallback, errorCallBack) => _fetchService('label/showData', 'GET', {}, successCallback, errorCallBack);

////....Department..../////

export const  FetchDepartmentListService = (successCallback, errorCallBack) => _fetchService('department/showData', 'GET', {}, successCallback, errorCallBack);

export const DepartmentAddService = (data, successCallback, errorCallBack) => _fetchService('department/add', 'POST', data, successCallback, errorCallBack);

export const DepartmentUpdateService = (data, successCallback, errorCallBack) => _fetchService(`department/${data.id}/update`, 'POST', data, successCallback, errorCallBack);

export const DepartmentDeleteService = (data, successCallback, errorCallBack) => _fetchService(`department/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);


///...........Section........////

export const  FetchSectionListService = (successCallback, errorCallBack) => _fetchService('section/showData', 'GET', {}, successCallback, errorCallBack);

export const SectionAddService = (data, successCallback, errorCallBack) => _fetchService('section/add', 'POST', data, successCallback, errorCallBack);

export const SectionUpdateService = (data, successCallback, errorCallBack) => _fetchService(`section/${data.id}/update`, 'POST', data, successCallback, errorCallBack);

export const SectionDeleteService = (data, successCallback, errorCallBack) => _fetchService(`section/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);

////..........Assettype........////

export const  FetchAssetTypeListService = (successCallback, errorCallBack) => _fetchService('assetType/showData', 'GET', {}, successCallback, errorCallBack);

export const AssetTypeAddService = (data, successCallback, errorCallBack) => _fetchService('assetType/add', 'POST', data, successCallback, errorCallBack);

export const AssetTypeUpdateService = (data, successCallback, errorCallBack) => _fetchService(`assetType/${data.id}/update`, 'POST', data, successCallback, errorCallBack);

export const AssettypeDeleteService = (data, successCallback, errorCallBack) => _fetchService(`assetType/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);

/////........TagAsset....../////

export const  FetchTagAssetListService = (successCallback, errorCallBack) => _fetchService('tagasset/showData', 'GET', {}, successCallback, errorCallBack);

export const TagAssetAddService = (data, successCallback, errorCallBack) => _fetchService('tagasset/add', 'POST', data, successCallback, errorCallBack);

export const TagAssetUpdateService = (data, successCallback, errorCallBack) => _fetchService(`tagasset/${data.id}/update`, 'POST', data, successCallback, errorCallBack);

export const TagAssetDeleteService = (data, successCallback, errorCallBack) => _fetchService(`tagasset/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);

////..........Audit........////
export const  FetchAuditListService = (successCallback, errorCallBack) => _fetchService('audit/showData', 'GET', {}, successCallback, errorCallBack);

export const  FetchAuditSectionService = (data,successCallback, errorCallBack) => _fetchService(`audit/${data.id}/getSection`, 'GET', {}, successCallback, errorCallBack);

export const  FetchAuditAssetTypeService = (data,successCallback, errorCallBack) => _fetchService(`audit/${data.id}/getAssetType`, 'GET', {}, successCallback, errorCallBack);

export const  AuditAddService = (data, successCallback, errorCallBack) => _fetchService('audit/add', 'POST', data, successCallback, errorCallBack);

export const  AuditUpdateService = (data, successCallback, errorCallBack) => _fetchService(`audit/${data.id}/update`, 'POST', data, successCallback, errorCallBack);

export const AuditDeleteService = (data, successCallback, errorCallBack) => _fetchService(`audit/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);

export const ViewAuditReportService = (data, successCallback, errorCallBack) => _fetchService(`audit/${data.id}/viewAuditReport`, 'POST', data, successCallback, errorCallBack);

///..........Amc.........//// 
export const  FetchAmcServiceListService = (successCallback, errorCallBack) => _fetchService('amc/showData', 'GET', {}, successCallback, errorCallBack);

export const AmcServiceAddService = (data, successCallback, errorCallBack) => _fetchService('amc/add', 'POST', data, successCallback, errorCallBack);

export const AmcServiceUpdateService = (data, successCallback, errorCallBack) => _fetchService(`AmcService/${data.id}/update`, 'POST', data, successCallback, errorCallBack);

export const AmcServiceDeleteService = (data, successCallback, errorCallBack) => _fetchService(`AmcService/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);

export const AssetTypeDeleteService = (data, successCallback, errorCallBack) => _fetchService(`assettype/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);

export const  AMCServiceDueListService = (data,successCallback, errorCallBack) => _fetchService(`amc/${data.id}/serviceDue`, 'POST', data, successCallback, errorCallBack);

export const  ViewAmcService = (data,successCallback, errorCallBack) => _fetchService(`amc/${data.id}/showService`, 'GET', {}, successCallback, errorCallBack);

export const  ViewAmcRenewal = (successCallback, errorCallBack) => _fetchService('amc/viewAmcRenewal', 'GET', {}, successCallback, errorCallBack);

/////........Certificate................./////

export const CertificateAddService = (data, successCallback, errorCallBack) => _fetchService('certificate/add', 'POST', data, successCallback, errorCallBack);

export const  FetchCertificateService = (successCallback, errorCallBack) => _fetchService('certificate/showData', 'GET', {}, successCallback, errorCallBack);

export const CertificateUpdateService = (data, successCallback, errorCallBack) => _fetchService(`certificate/${data.id}/update`, 'POST', data, successCallback, errorCallBack);

export const CertificateDeleteService = (data, successCallback, errorCallBack) => _fetchService(`certificate/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);

export const  ViewInspection = (data,successCallback, errorCallBack) => _fetchService(`certificate/${data.id}/showInspection`, 'GET', {}, successCallback, errorCallBack);

export const  ViewCertificateRenewal = (successCallback, errorCallBack) => _fetchService('certificate/viewCertificateRenewal', 'GET', {}, successCallback, errorCallBack);


////.......Insurance....//////

export const InsuranceAddService = (data, successCallback, errorCallBack) => _fetchService('insurance/add', 'POST', data, successCallback, errorCallBack);

export const  FetchInsuranceService = (successCallback, errorCallBack) => _fetchService('insurance/showData', 'GET', {}, successCallback, errorCallBack);

export const InsuranceUpdateService = (data, successCallback, errorCallBack) => _fetchService(`insurance/${data.id}/update`, 'POST', data, successCallback, errorCallBack);

export const InsuranceDeleteService = (data, successCallback, errorCallBack) => _fetchService(`insurance/${data.id}/delete`, 'POST', data, successCallback, errorCallBack);

export const ViewInsuranceRenewal = (successCallback, errorCallBack) => _fetchService('insurance/viewInsuranceRenewal', 'GET', {}, successCallback, errorCallBack);

export const  InsuranceDueListService = (data,successCallback, errorCallBack) => _fetchService(`insurance/${data.id}/insuranceDue`, 'POST', data, successCallback, errorCallBack);


/////........Warrenty.........///////

export const  FetchWarrantyService = (successCallback, errorCallBack) => _fetchService('warranty/showData', 'GET', {}, successCallback, errorCallBack);

///.........Maintenance......./////
export const MaintenanceAddService = (data, successCallback, errorCallBack) => _fetchService('maintenance/add', 'POST', data, successCallback, errorCallBack);

export const  FetchMachineService = (successCallback, errorCallBack) => _fetchService('getMachine', 'GET', {}, successCallback, errorCallBack);


///........Maintenance Status......////

export const  FetchMaintenanceApprovedService = (successCallback, errorCallBack) => _fetchService('maintenance/aprovedShowData', 'GET', {}, successCallback, errorCallBack);




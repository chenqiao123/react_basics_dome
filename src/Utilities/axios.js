import axios from '../../config/axios-authentication';
let getaxios = {
 sginDataSagas(action,urlpost,method,SuccessCallback,errorCallback){

        try {
           
            axios({
              method:method,
              url: urlpost,
           
            }).then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          
        } catch (error) {
            yield put(actions.postNewPlanSubmitFail(error));
        }
    }
}
export { getaxios }
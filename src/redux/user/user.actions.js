import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) =>({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
});

// export const fetchUserStart = () =>({
//    type:UserActionTypes.FETCH_COLLECTION_START
// });

// export const fectchUserCuccess = (user,message) =>({
//     type:UserActionTypes.FETCH_USER_SECCUSS,
//     payload:user,
//     message:message
// });

// export const fectchUserFailure = errorMessage =>({
//     type:UserActionTypes.FETCH_USER_FAILURE,
//     payload:errorMessage
// });

// export const fetchUserStartAsync = (data) =>{
//     return dispatch => {
//         console.log(data);
//         fetch("Https://smscore.trez.ir/api/V1/User/LoginUser", {
//             headers: {
//                 'Content-Type': 'application/json'
//                 },
//             method:"POST",
//             body: JSON.stringify(data)
//         })
//         .then((response)=>{ 
//             console.log(response);
//             return response.json();   
//         })
//         .then((dataRes)=>{ 
//             console.log(dataRes);
//             dispatch(fectchUserCuccess((dataRes.result.result,dataRes.result.message)))
//             // this.setState({status:dataRes.resultCode , message:dataRes.message , showPopup:true , token:dataRes.result.result});
            
//         })
//         .catch(
//             console.log('err')
//         )
//         // /////////////////////////////////////
//         // dispatch(fetchCollectionsStart());
//         // fetch("http://localhost:7000/Login", {
//         //     headers: {
//         //         'Content-Type': 'application/json'
//         //         },
//         //     method:"POST",
//         //     body: JSON.stringify(data)
//         // })
//         // .then((response)=>{ 
//         //     return response.json();   
//         // })
//         // .then((dataRes)=>{ 
//         //     console.log(dataRes);
//         //     console.log(dataRes.userId);
//         //     dispatch(fectchUserCuccess(dataRes.userId,dataRes.isTeacher,dataRes.isAdmin))
//         // })
//         // .catch(err => {
//         //     dispatch(fectchUserFailure(err.message));
//         // });
//     }
//  }
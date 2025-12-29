//React Native(Not use EXPO version) : 
// check https://www.npmjs.com/package/react-native-permissions
import { Platform } from 'react-native';
import { PERMISSIONS } from 'react-native-permissions';
import { PermissionsAndroid } from 'react-native';

//'android' / 'ios'
const currentDevice = Platform.OS

//Camera
export const requestCameraPermission = async()=>{
    if (currentDevice ==="android"){
     try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Camera Permission',
                message:
                'App needs access to your camera.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
        } else {
            console.log('Camera permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
    }else{
    }
}

//Photos
export const requestPhotoLibraryPermission = async()=>{
    if (currentDevice ==="android"){
     try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: 'Photo Library Permission',
                message:
                'App needs access to your Photo Library.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the Photo Library');
        } else {
            console.log('Photo Library permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
    }else{
    }

}

//Record audio
export const requestMicrophonePermission = async() =>{
    if (currentDevice ==="android"){
     try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
                title: 'Record Audio Permission',
                message:
                'App needs access to your Microphone.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the Microphone');
        } else {
            console.log('Microphone permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
    }else{
    }
}

//location(GPS)
export const requestLocationPermission =async()=>{
    if (currentDevice ==="android"){
     try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Location Permission',
                message:
                'App needs access to your Location.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the Location');
        } else {
            console.log('Location permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
    }else{
    }
}

//Notifications
export const requestNotificationPermission = async()=>{
 if (currentDevice ==="android"){
     try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONNOTIFICATIONS,
            {
                title: 'Notification Permission',
                message:
                'App needs access to your Notification.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the Notification');
        } else {
            console.log('Notification permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
    }else{
    }
}

// //Tracking
// export const requestTrackingPermission = ()=>{
//  if (currentDevice ==="android"){
//      try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONNOTIFICATIONS,
//             {
//                 title: 'Notification Permission',
//                 message:
//                 'App needs access to your Notification.',
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//             },
//         );
        
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             console.log('You can use the Notification');
//         } else {
//             console.log('Notification permission denied');
//         }
//     } catch (err) {
//         console.warn(err);
//     }
//     }else{
//     }
// }

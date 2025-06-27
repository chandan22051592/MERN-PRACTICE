import {atom, selector} from 'recoil';

export const networkAtom = atom({
    key : 'networkAtom',
    default : 102
})

export const jobsAtom = atom({
    key : 'jobsAtom',
    default : 0
})

export const messagekAtom = atom({
    key : 'messagekAtom',
    default : 12
})

export const notificationAtom = atom({
    key : 'notificationAtom',
    default : 0
})

export const totalSum = selector({
    key : 'totalSum',
    get : ({get})=>{
        const networkNotificationCount = get(networkAtom);
        const jobsNotificationCount = get(jobsAtom);
        const messageNotificationCount = get(messagekAtom);
        const notificationCount = get(notificationAtom);

        return networkNotificationCount + jobsNotificationCount + messageNotificationCount + notificationCount
    }
})
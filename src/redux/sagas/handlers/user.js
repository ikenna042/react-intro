import { call, put } from 'redux-saga/effects';
import { setUser } from '../../ducks/user';
import { requestGetUser } from '../requests/user';

export function* handleGetUser() {
    try {
        const res = yield call(requestGetUser);
        const { data } = res;
        yield put(setUser(data));
    } catch (error) {
        console.log(error)
    }
}
import { ReduxAction } from '../../types/reducers'

export enum DATA_ACTIONS {
    SET_CONTENTS = 'dataActions/setContents'
}

export const setDataContents: ReduxAction<string[]> = (contents) => {
    return {
        type: DATA_ACTIONS.SET_CONTENTS,
        payload: contents
    }
}

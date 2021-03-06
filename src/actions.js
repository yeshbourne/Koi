import * as e from './events';

/**
 * @method setDimensions
 * @param {Number} width
 * @param {Number} height
 * @return {Function}
 */
export const setDimensions = (width, height) => {

    return dispatch => {
        dispatch({ type: e.SET_DIMENSIONS, width, height });
    };

};

/**
 * @method setApparatus
 * @param {Object} renderer
 * @param {Object} camera
 * @param {Object} scene
 * @return {Function}
 */
export const setApparatus = (renderer, camera, scene) => {

    return dispatch => {
        dispatch({ type: e.SET_APPARATUS, renderer, camera, scene });
    };

};

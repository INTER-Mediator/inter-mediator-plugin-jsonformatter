/*
 * INTER-Mediator
 * Copyright (c) INTER-Mediator Directive Committee (http://inter-mediator.org)
 * This project started at the end of 2009 by Masayuki Nii msyk@msyk.net.
 *
 * INTER-Mediator is supplied under MIT License.
 * Please see the full license for details:
 * https://github.com/INTER-Mediator/INTER-Mediator/blob/master/dist-docs/License.txt
 */

// JSHint support
/* jshint -W083 */ // Function within a loop

/**
 * @fileoverview IMParts_Catalog class is defined here.
 */
/**
 *
 * Usually you don't have to instantiate this class with new operator.
 * @constructor
 */
IMParts_Catalog.jsonformat = {
    instantiate: function (parentNode) {
        'use strict'
        var newId = parentNode.getAttribute('id') + '-jsonf'
        var newNode = document.createElement('pre')
        newNode.setAttribute('id', newId)
        parentNode.appendChild(newNode)
        IMParts_Catalog.jsonformat.ids.push(newId)

        parentNode._im_getComponentId = (function () {
            var theId = newId
            return function () {
                return theId
            }
        })()

        parentNode._im_setValue = (function () {
            var theId = newId
            return function (str) {
                IMParts_Catalog.jsonformat.initialValues[theId] =
                    str ? JSON.stringify(JSON.parse(str), null, '    ') : ''
            }
        })()
    },

    ids: [],
    initialValues: {},

    finish: function () {
        'use strict'
        for (var i = 0; i < IMParts_Catalog.jsonformat.ids.length; i += 1) {
            var targetId = IMParts_Catalog.jsonformat.ids[i]
            var targetNode = document.getElementById(targetId)
            if (targetNode) {
                targetNode.appendChild(document.createTextNode(IMParts_Catalog.jsonformat.initialValues[targetId]))
            }
        }
        IMParts_Catalog.jsonformat.ids = []
        IMParts_Catalog.jsonformat.initialValues = {}
    }
}

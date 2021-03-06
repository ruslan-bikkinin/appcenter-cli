/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ErrorGroupState.
 */
class ErrorGroupState {
  /**
   * Create a ErrorGroupState.
   * @property {string} state Possible values include: 'open', 'closed',
   * 'ignored'
   * @property {string} [annotation]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorGroupState
   *
   * @returns {object} metadata of ErrorGroupState
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorGroupState',
      type: {
        name: 'Composite',
        className: 'ErrorGroupState',
        modelProperties: {
          state: {
            required: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          annotation: {
            required: false,
            serializedName: 'annotation',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorGroupState;

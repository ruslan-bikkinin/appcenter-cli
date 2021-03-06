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
 * A request containing information pertaining to starting a symbol upload
 * process
 *
 */
class BodyModelModel {
  /**
   * Create a BodyModelModel.
   * @property {string} symbolType The type of the symbol for the current
   * symbol upload. Possible values include: 'Apple', 'JavaScript', 'Breakpad',
   * 'AndroidProguard', 'UWP'
   * @property {string} [clientCallback] The callback URL that the client can
   * optionally provide to get status updates for the current symbol upload
   * @property {string} [fileName] The file name for the symbol upload
   * @property {string} [build] The build number. Optional for Apple. Required
   * for Android.
   * @property {string} [version] The version number. Optional for Apple.
   * Required for Android.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyModelModel
   *
   * @returns {object} metadata of BodyModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body',
      type: {
        name: 'Composite',
        className: 'BodyModelModel',
        modelProperties: {
          symbolType: {
            required: true,
            serializedName: 'symbol_type',
            type: {
              name: 'String'
            }
          },
          clientCallback: {
            required: false,
            serializedName: 'client_callback',
            type: {
              name: 'String'
            }
          },
          fileName: {
            required: false,
            serializedName: 'file_name',
            type: {
              name: 'String'
            }
          },
          build: {
            required: false,
            serializedName: 'build',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BodyModelModel;

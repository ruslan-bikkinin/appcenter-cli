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
 * The lite version of GitHub repository
 *
 */
class GitHubPullRequestLiteHeadRepo {
  /**
   * Create a GitHubPullRequestLiteHeadRepo.
   * @property {number} [id] The repository id
   */
  constructor() {
  }

  /**
   * Defines the metadata of GitHubPullRequestLiteHeadRepo
   *
   * @returns {object} metadata of GitHubPullRequestLiteHeadRepo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GitHubPullRequestLite_head_repo',
      type: {
        name: 'Composite',
        className: 'GitHubPullRequestLiteHeadRepo',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = GitHubPullRequestLiteHeadRepo;

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type IssueDetailComments_issue$ref: FragmentReference;
declare export opaque type IssueDetailComments_issue$fragmentType: IssueDetailComments_issue$ref;
export type IssueDetailComments_issue = {|
  +comments: {|
    +edges: ?$ReadOnlyArray<?{|
      +__id: string,
      +node: ?{|
        +id: string,
        +author: ?{|
          +login: string,
          +avatarUrl: any,
        |},
        +body: string,
      |},
    |}>
  |},
  +$refType: IssueDetailComments_issue$ref,
|};
export type IssueDetailComments_issue$data = IssueDetailComments_issue;
export type IssueDetailComments_issue$key = {
  +$data?: IssueDetailComments_issue$data,
  +$fragmentRefs: IssueDetailComments_issue$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "IssueDetailComments_issue",
  "type": "Issue",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 10
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "comments",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "after",
          "variableName": "cursor"
        },
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "count"
        }
      ],
      "concreteType": "IssueCommentConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "IssueCommentEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "IssueComment",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "author",
                  "storageKey": null,
                  "args": null,
                  "concreteType": null,
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "login",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "avatarUrl",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "body",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ClientExtension",
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__id",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5a3147538b2031608852a95d87f33d8e';
module.exports = node;

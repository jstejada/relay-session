/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type IssuesListItem_issue$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Issues_repository$ref: FragmentReference;
declare export opaque type Issues_repository$fragmentType: Issues_repository$ref;
export type Issues_repository = {|
  +issues: {|
    +edges: ?$ReadOnlyArray<?{|
      +__id: string,
      +node: ?{|
        +$fragmentRefs: IssuesListItem_issue$ref
      |},
    |}>
  |},
  +$refType: Issues_repository$ref,
|};
export type Issues_repository$data = Issues_repository;
export type Issues_repository$key = {
  +$data?: Issues_repository$data,
  +$fragmentRefs: Issues_repository$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Issues_repository",
  "type": "Repository",
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
      "defaultValue": 2
    },
    {
      "kind": "LocalArgument",
      "name": "states",
      "type": "[IssueState!]",
      "defaultValue": [
        "OPEN"
      ]
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "issues",
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
        },
        {
          "kind": "Variable",
          "name": "states",
          "variableName": "states"
        }
      ],
      "concreteType": "IssueConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "IssueEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Issue",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "IssuesListItem_issue",
                  "args": null
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
(node/*: any*/).hash = 'f8f9978676396ba0a401a43eca7aa6b3';
module.exports = node;

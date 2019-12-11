/**
 * @flow
 * @relayHash ff27929476414f84cd2660970a63452b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Issues_repository$ref = any;
export type HomeRootIssuesQueryVariables = {|
  owner: string,
  name: string,
|};
export type HomeRootIssuesQueryResponse = {|
  +repository: ?{|
    +$fragmentRefs: Issues_repository$ref
  |}
|};
export type HomeRootIssuesQuery = {|
  variables: HomeRootIssuesQueryVariables,
  response: HomeRootIssuesQueryResponse,
|};
*/


/*
query HomeRootIssuesQuery(
  $owner: String!
  $name: String!
) {
  repository(owner: $owner, name: $name) {
    ...Issues_repository
    id
  }
}

fragment IssuesListItem_issue on Issue {
  id
  title
}

fragment Issues_repository on Repository {
  issues(first: 10, states: [OPEN]) {
    edges {
      node {
        ...IssuesListItem_issue
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "owner",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeRootIssuesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Issues_repository",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeRootIssuesQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "repository",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "issues",
            "storageKey": "issues(first:10,states:[\"OPEN\"])",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              },
              {
                "kind": "Literal",
                "name": "states",
                "value": [
                  "OPEN"
                ]
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
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
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
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeRootIssuesQuery",
    "id": null,
    "text": "query HomeRootIssuesQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    ...Issues_repository\n    id\n  }\n}\n\nfragment IssuesListItem_issue on Issue {\n  id\n  title\n}\n\nfragment Issues_repository on Repository {\n  issues(first: 10, states: [OPEN]) {\n    edges {\n      node {\n        ...IssuesListItem_issue\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '123ee85bfef2bb303a99a7320127372f';
module.exports = node;

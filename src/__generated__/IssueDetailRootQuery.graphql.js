/**
 * @flow
 * @relayHash 1598204b9f650d1b09b8d180942a1f49
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type IssueActions_issue$ref = any;
type IssueDetailComments_issue$ref = any;
export type IssueDetailRootQueryVariables = {|
  id: string
|};
export type IssueDetailRootQueryResponse = {|
  +node: ?{|
    +title?: string,
    +number?: number,
    +author?: ?{|
      +login: string,
      +avatarUrl: any,
    |},
    +body?: string,
    +closed?: boolean,
    +url?: any,
    +$fragmentRefs: IssueDetailComments_issue$ref & IssueActions_issue$ref,
  |}
|};
export type IssueDetailRootQuery = {|
  variables: IssueDetailRootQueryVariables,
  response: IssueDetailRootQueryResponse,
|};
*/


/*
query IssueDetailRootQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Issue {
      title
      number
      author {
        __typename
        login
        avatarUrl
        ... on Node {
          id
        }
      }
      body
      closed
      url
      ...IssueDetailComments_issue
      ...IssueActions_issue
    }
    id
  }
}

fragment IssueActions_issue on Issue {
  id
  closed
}

fragment IssueDetailComments_issue on Issue {
  comments(first: 10) {
    edges {
      node {
        id
        author {
          __typename
          login
          avatarUrl
          ... on Node {
            id
          }
        }
        body
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "number",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatarUrl",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "closed",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "author",
  "storageKey": null,
  "args": null,
  "concreteType": null,
  "plural": false,
  "selections": [
    (v9/*: any*/),
    (v4/*: any*/),
    (v5/*: any*/),
    (v10/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "IssueDetailRootQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Issue",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "author",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/)
                ]
              },
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "IssueDetailComments_issue",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "IssueActions_issue",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "IssueDetailRootQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          (v9/*: any*/),
          (v10/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "Issue",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v11/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "comments",
                "storageKey": "comments(first:10)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10
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
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v6/*: any*/)
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "IssueDetailRootQuery",
    "id": null,
    "text": "query IssueDetailRootQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Issue {\n      title\n      number\n      author {\n        __typename\n        login\n        avatarUrl\n        ... on Node {\n          id\n        }\n      }\n      body\n      closed\n      url\n      ...IssueDetailComments_issue\n      ...IssueActions_issue\n    }\n    id\n  }\n}\n\nfragment IssueActions_issue on Issue {\n  id\n  closed\n}\n\nfragment IssueDetailComments_issue on Issue {\n  comments(first: 10) {\n    edges {\n      node {\n        id\n        author {\n          __typename\n          login\n          avatarUrl\n          ... on Node {\n            id\n          }\n        }\n        body\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '42e7a1bc529086397c84040c8f84c752';
module.exports = node;

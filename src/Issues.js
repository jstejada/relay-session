import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import IssuesListItem from './IssuesListItem';

/**
 * Renders a list of issues for a given repository.
 */
export default function Issues(props) {
  // Given a reference to a repository in props.repository, defines *what*
  // data the component needs about that repository. In this case we fetch
  // the list of issues starting at a given cursor (initially null to start
  // at the beginning of the issues list).
  const data = useFragment(
    graphql`
      fragment Issues_repository on Repository
        @argumentDefinitions(
          cursor: { type: "String" }
          count: { type: "Int", defaultValue: 10 }
          states: { type: "[IssueState!]", defaultValue: ["OPEN"] }
        ) {
        issues(after: $cursor, first: $count, states: $states) {
          edges {
            __id
            node {
              # Compose the data dependencies of child components
              # by spreading their fragments:
              ...IssuesListItem_issue
            }
          }
        }
      }
    `,
    props.repository,
  );

  return (
    <div className="issues">
      {data.issues.edges.map(edge => {
        if (edge == null || edge.node == null) {
          return null;
        }
        return (
          <div className="issues-issue" key={edge.__id}>
            {/* Note how we also spread IssuesListItem's fragment above */}
            <IssuesListItem issue={edge.node} />
          </div>
        );
      })}
      <button
        name="load more issues"
        type="button"
        className="issues-load-more"
        onClick={() => {
          // TODO
        }}
      >
        Load More (TODO)
      </button>
    </div>
  );
}

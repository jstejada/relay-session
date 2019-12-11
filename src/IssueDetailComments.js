import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import ReactMarkdown from 'react-markdown';
import SuspenseImage from './SuspenseImage';

const { Suspense, SuspenseList } = React;

/**
 * Renders a list of comments for a given issue.
 */
export default function IssueDetailComments(props) {
  // Given a reference to an issue in props.issue, defines *what*
  // data the component needs about that repository. In this case we fetch
  // the list of comments starting at a given cursor (initially null to start
  // at the beginning of the issues list).
  const data = useFragment(
    graphql`
      fragment IssueDetailComments_issue on Issue
        @argumentDefinitions(
          cursor: { type: "String" }
          count: { type: "Int", defaultValue: 10 }
        ) {
        comments(after: $cursor, first: $count) {
          edges {
            __id
            node {
              id
              author {
                login
                avatarUrl
              }
              body
            }
          }
        }
      }
    `,
    props.issue,
  );

  const comments = data.comments.edges;
  if (comments == null || comments.length === 0) {
    return <div className="issue-no-comments">No comments</div>;
  }

  // Per above, individual comments may suspend while images load. Using <SuspenseList>
  // allows us to render comments as they are ready, while avoiding showing them out of
  // order, as could happen if images for a later comment resolved before images for
  // an earlier comment.
  return (
    <>
      <SuspenseList revealOrder="forwards">
        {comments.map(edge => {
          if (edge == null || edge.node == null) {
            return null;
          }
          const comment = edge.node;
          return (
            // Wrap each comment in a separate suspense fallback to allow them to commit
            // individually; SuspenseList ensures they'll reveal in-order.
            <Suspense fallback={null} key={edge.__id}>
              <div className="issue-comment">
                <SuspenseImage
                  className="issue-comment-author-image"
                  title={`${comment.author.login}'s avatar`}
                  src={comment.author.avatarUrl}
                />
                <div className="issue-comment-author-name">
                  {comment.author.login}
                </div>
                <div className="issue-comment-body">
                  <ReactMarkdown
                    source={comment.body}
                    renderers={{ image: SuspenseImage }}
                  />
                </div>
              </div>
            </Suspense>
          );
        })}
      </SuspenseList>
      <button
        name="load more comments"
        type="button"
        className="issue-comments-load-more"
        onClick={() => {
          // TODO
        }}
      >
        Load More (TODO)
      </button>
    </>
  );
}

import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';

const { useCallback, useState } = React;

export default function IssueActions(props) {
  // Track the current comment text - this is used as the value of the comment textarea
  const [commentText, setCommentText] = useState('');

  // Get the data we need about the issue in order to execute the mutation. Right now that's just
  // the id, but in the future this component might neeed more information.
  const data = useFragment(
    graphql`
      fragment IssueActions_issue on Issue {
        id
        closed
      }
    `,
    props.issue,
  );

  // Callback to handle edits to the comment text
  const onChange = useCallback(
    event => {
      setCommentText(event.target.value);
    },
    [setCommentText],
  );

  // Form submit callback
  const onSubmit = useCallback(
    event => {
      event.preventDefault();

      // TODO

      // Reset the comment text
      setCommentText('');
    },
    [setCommentText],
  );

  // Reopen/Close the issue
  const onToggleOpen = useCallback(
    event => {
      event.preventDefault();

      // TODO
    },
    [],
  );

  return (
    <form onSubmit={onSubmit} className="issue-actions">
      <textarea
        className="issue-actions-text"
        onChange={onChange}
        value={commentText}
        placeholder={'Leave a comment'}
      />
      <button
        className="issue-actions-button"
        type="submit"
        disabled={commentText.trim() === ''}
      >
        Comment
      </button>
      <button
        className="issue-actions-button"
        type="button"
        onClick={onToggleOpen}
      >
        {data.closed ? 'Reopen' : 'Close'}
      </button>
    </form>
  );
}

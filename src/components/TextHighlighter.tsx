import React, { useMemo } from "react";

interface Props {
  search: string;
  textContent: string;
}

const TextHighlighter = React.memo<Props>(({ search, textContent }) => {
  const defaultContent = <span>{textContent}</span>;
  if (!search) {
    return defaultContent;
  }

  const matchIndex = textContent.toLowerCase().indexOf(search.toLowerCase());
  const searchCount = search.length;
  let matched = "";
  let content0 = "";
  let content1 = "";

  if (matchIndex === -1) {
    return defaultContent;
  }

  if (matchIndex === 0) {
    matched = textContent.substring(matchIndex, searchCount);
    content0 = textContent.substring(matchIndex + searchCount);

    return (
      <>
        <span className="highlighted">{matched}</span>
        {content0 && <span>{content0}</span>}
      </>
    );
  }

  if (matchIndex > 0) {
    content0 = textContent.substring(0, matchIndex);
    matched = textContent.substring(matchIndex, matchIndex + searchCount);
    content1 = textContent.substring(matchIndex + searchCount);

    return (
      <>
        <span>{content0}</span>
        <span className="highlighted">{matched}</span>
        {content1 && <span>{content1}</span>}
      </>
    );
  }

  return null;
});

export default TextHighlighter;

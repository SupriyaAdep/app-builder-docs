import React from 'react';
// Recursive component rendering the toc tree
function TOCItemTree({ toc, className, linkClassName, isChild }) {
  if (!toc.length) {
    return null;
  }
  const regex = /^[^:(]*/;
  const idRegex = /^[^-]*/;
  return (
    <ul className={isChild ? undefined : className}>
      {toc.map((heading) => {
        const id = heading.value.match(regex)[0].trim()
        return (

          <li key={id}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <a
              //href={`#${heading.id.split('--')[0]}`}
              href={`#${id}`.toLowerCase().replaceAll('.', '').replaceAll(' ', '-')}

              className={linkClassName ?? undefined}
              // Developer provided the HTML, so assume it's safe.
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: id }}
            />
            <TOCItemTree
              isChild
              toc={heading.children}
              className={className}
              linkClassName={linkClassName}
            />
          </li>
        )
      })}
    </ul>
  );
}
// Memo only the tree root is enough
export default React.memo(TOCItemTree);

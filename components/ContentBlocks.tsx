export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; text: string }
  | { type: "quote"; text: string };

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i} className="mt-8 text-2xl font-bold">{b.text}</h2>;
          case "p":
            return <p key={i} className="mt-4 leading-7 text-muted-foreground">{b.text}</p>;
          case "ul":
            return (
              <ul key={i} className="mt-4 list-disc space-y-1.5 pl-6 text-muted-foreground">
                {b.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            );
          case "code":
            return (
              <pre key={i} className="mt-4 overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 text-sm">
                <code>{b.text}</code>
              </pre>
            );
          case "quote":
            return <blockquote key={i} className="mt-6 border-l-2 border-primary pl-4 text-lg italic text-foreground">{b.text}</blockquote>;
        }
      })}
    </>
  );
}
